import { API_BASE_URL } from "@/config/api";
import type { ProfileUpdateData, UserProfile } from "@/types/auth";

async function readError(response: Response): Promise<string> {
  const body = (await response.json().catch(() => null)) as {
    detail?: string;
  } | null;
  return body?.detail ?? `La solicitud falló (HTTP ${response.status}).`;
}

export async function getCurrentProfile(
  accessToken: string,
): Promise<UserProfile> {
  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!response.ok) throw new Error(await readError(response));
  return (await response.json()) as UserProfile;
}

export async function saveCurrentProfile(
  accessToken: string,
  payload: ProfileUpdateData,
): Promise<UserProfile> {
  const response = await fetch(`${API_BASE_URL}/auth/me`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error(await readError(response));
  return (await response.json()) as UserProfile;
}
