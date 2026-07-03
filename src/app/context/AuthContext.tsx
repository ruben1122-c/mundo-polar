import {
  getCurrentProfile,
  login,
  logout,
  register,
  saveCurrentProfile,
} from "@/services/accountService";
import type {
  AuthResponse,
  AuthSession,
  ProfileUpdateData,
  SignUpData,
  UserProfile,
} from "@/types/auth";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

const AUTH_STORAGE_KEY = "mundo-polar-access-token";

interface AuthContextValue {
  session: AuthSession | null;
  user: UserProfile | null;
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

function storedToken(): string | null {
  try {
    return window.localStorage.getItem(AUTH_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const clearSession = useCallback(() => {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    setSession(null);
    setProfile(null);
  }, []);

  const applyAuthResponse = useCallback((response: AuthResponse) => {
    window.localStorage.setItem(AUTH_STORAGE_KEY, response.access_token);
    setProfile(response.user);
    setSession({
      access_token: response.access_token,
      expires_at: response.expires_at,
    });
  }, []);

  useEffect(() => {
    let active = true;
    const token = storedToken();
    setProfile(null);

    if (!token) {
      setIsLoading(false);
      return () => {
        active = false;
      };
    }

    void getCurrentProfile(token)
      .then((currentProfile) => {
        if (!active) return;
        setProfile(currentProfile);
        setSession({ access_token: token, expires_at: "" });
      })
      .catch(() => {
        if (active) clearSession();
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, [clearSession]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      setProfile(null);
      const response = await login(email, password);
      applyAuthResponse(response);
    },
    [applyAuthResponse],
  );

  const signUp = useCallback(
    async (data: SignUpData) => {
      setProfile(null);
      const response = await register(data);
      applyAuthResponse(response);
      return true;
    },
    [applyAuthResponse],
  );

  const signOut = useCallback(async () => {
    const accessToken = session?.access_token;
    try {
      if (accessToken) await logout(accessToken);
    } finally {
      clearSession();
    }
  }, [clearSession, session]);

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
    if (!session) return;
    const nextProfile = await getCurrentProfile(session.access_token);
    setProfile(nextProfile);
  }, [session]);

  const value = useMemo<AuthContextValue>(
    () => ({
      session,
      user: profile,
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
