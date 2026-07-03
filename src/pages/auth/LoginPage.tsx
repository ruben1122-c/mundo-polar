import { Footer } from "@/app/components/Footer";
import { useAuth } from "@/app/context/AuthContext";
import {
  consumeAuthReturnPage,
  navigateTo,
} from "@/app/navigation";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function LoginPage() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    try {
      setIsSubmitting(true);
      setError("");
      await signIn(email, password);
      navigateTo(consumeAuthReturnPage() ?? "perfil");
    } catch (reason: unknown) {
      setError(
        reason instanceof Error
          ? reason.message
          : "No se pudo iniciar sesión.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="auth-page">
        <div className="auth-card">
          <div className="auth-icon" aria-hidden="true">
            <LockKeyhole size={28} />
          </div>
          <header>
            <p className="section-eyebrow">Cuenta</p>
            <h1>Iniciar sesión</h1>
            <p>Accede a tu perfil y continúa preparando tu compra.</p>
          </header>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              <span>Correo electrónico</span>
              <div className="auth-input">
                <Mail size={19} aria-hidden="true" />
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="tu@correo.com"
                />
              </div>
            </label>
            <label>
              <span>Contraseña</span>
              <div className="auth-input">
                <LockKeyhole size={19} aria-hidden="true" />
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Mínimo 8 caracteres"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </label>

            {error ? (
              <p className="auth-message error" role="alert">
                {error}
              </p>
            ) : null}

            <button
              className="auth-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Ingresando…" : "Iniciar sesión"}
            </button>
          </form>

          <p className="auth-switch">
            ¿Todavía no tienes una cuenta?
            <button type="button" onClick={() => navigateTo("registro")}>
              Crear cuenta
            </button>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
