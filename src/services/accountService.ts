import { API_BASE_URL } from "@/config/api";
import type {
  AuthResponse,
  ProfileUpdateData,
  SignUpData,
  UserProfile,
} from "@/types/auth";

async function readError(response: Response): Promise<string> {
  const body = (await response.json().catch(() => null)) as {
    detail?: string;
  } | null;
  return body?.detail ?? `La solicitud falló (HTTP ${response.status}).`;
}

async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, init);
  if (!response.ok) throw new Error(await readError(response));
  return (await response.json()) as T;
}

export function login(
  email: string,
  password: string,
): Promise<AuthResponse> {
  return request<AuthResponse>("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.trim().toLowerCase(), password }),
  });
}

export function register(data: SignUpData): Promise<AuthResponse> {
  return request<AuthResponse>("/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: data.firstName.trim(),
      last_name: data.lastName.trim(),
      phone: data.phone.trim() || null,
      document_type: "dni",
      document_number: data.documentNumber.trim() || null,
      email: data.email.trim().toLowerCase(),
      password: data.password,
    }),
  });
}

export async function logout(accessToken: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: "POST",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!response.ok && response.status !== 401) {
    throw new Error(await readError(response));
  }
}

export function getCurrentProfile(
  accessToken: string,
): Promise<UserProfile> {
  return request<UserProfile>("/auth/me", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
}

export function saveCurrentProfile(
  accessToken: string,
  payload: ProfileUpdateData,
): Promise<UserProfile> {
  return request<UserProfile>("/auth/me", {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
