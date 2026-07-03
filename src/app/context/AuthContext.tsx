import { getCurrentProfile, saveCurrentProfile } from "@/services/accountService";
import { isSupabaseConfigured, supabase } from "@/lib/supabaseClient";
import type {
  ProfileUpdateData,
  SignUpData,
  UserProfile,
} from "@/types/auth";
import type { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

interface AuthContextValue {
  session: Session | null;
  user: User | null;
  profile: UserProfile | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (data: SignUpData) => Promise<boolean>;
  signOut: () => Promise<void>;
  updateProfile: (data: ProfileUpdateData) => Promise<UserProfile>;
  refreshProfile: () => Promise<void>;
  getAccessToken: () => string | null;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function configurationError() {
  return new Error(
    "Supabase Auth no está configurado. Revisa VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.",
  );
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadProfile = useCallback(async (nextSession: Session | null) => {
    if (!nextSession) {
      setProfile(null);
      return;
    }
    const nextProfile = await getCurrentProfile(nextSession.access_token);
    setProfile(nextProfile);
  }, []);

  useEffect(() => {
    let active = true;

    void supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return;
      setSession(data.session);
      try {
        await loadProfile(data.session);
      } catch {
        if (active) setProfile(null);
      } finally {
        if (active) setIsLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!active) return;
      setSession(nextSession);
      if (!nextSession) {
        setProfile(null);
        setIsLoading(false);
        return;
      }
      queueMicrotask(() => {
        void loadProfile(nextSession).finally(() => {
          if (active) setIsLoading(false);
        });
      });
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [loadProfile]);

  const signIn = useCallback(async (email: string, password: string) => {
    if (!isSupabaseConfigured) throw configurationError();
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });
    if (error) throw new Error("Correo o contraseña incorrectos.");
  }, []);

  const signUp = useCallback(async (data: SignUpData) => {
    if (!isSupabaseConfigured) throw configurationError();
    const { data: result, error } = await supabase.auth.signUp({
      email: data.email.trim().toLowerCase(),
      password: data.password,
      options: {
        data: {
          first_name: data.firstName.trim(),
          last_name: data.lastName.trim(),
          phone: data.phone.trim(),
          document_type: "dni",
          document_number: data.documentNumber.trim(),
        },
      },
    });
    if (error) {
      if (error.message.toLowerCase().includes("already registered")) {
        throw new Error("Este correo ya está registrado.");
      }
      throw new Error(error.message);
    }
    return Boolean(result.session);
  }, []);

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error("No se pudo cerrar la sesión.");
    setSession(null);
    setProfile(null);
  }, []);

  const updateProfile = useCallback(
    async (data: ProfileUpdateData) => {
      if (!session) throw new Error("Debes iniciar sesión.");
      const nextProfile = await saveCurrentProfile(session.access_token, data);
      setProfile(nextProfile);
      return nextProfile;
    },
    [session],
  );

  const refreshProfile = useCallback(async () => {
    await loadProfile(session);
  }, [loadProfile, session]);

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user: session?.user ?? null,
      profile,
      isLoading,
      signIn,
      signUp,
      signOut,
      updateProfile,
      refreshProfile,
      getAccessToken: () => session?.access_token ?? null,
    }),
    [
      session,
      profile,
      isLoading,
      signIn,
      signUp,
      signOut,
      updateProfile,
      refreshProfile,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe utilizarse dentro de AuthProvider.");
  }
  return context;
}
