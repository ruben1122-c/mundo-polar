export type DocumentType = "dni" | "ce" | "passport";
export type Gender =
  | "female"
  | "male"
  | "non_binary"
  | "prefer_not_to_say";
export type UserRole = "customer" | "admin";

export interface UserProfile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string | null;
  document_type: DocumentType;
  document_number: string | null;
  gender: Gender | null;
  role: UserRole;
  is_active: boolean;
  order_count: number;
  created_at: string;
  updated_at: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  phone: string;
  documentNumber: string;
  email: string;
  password: string;
}

export interface ProfileUpdateData {
  first_name?: string;
  last_name?: string;
  phone?: string | null;
  document_type?: DocumentType;
  document_number?: string | null;
  gender?: Gender | null;
}
