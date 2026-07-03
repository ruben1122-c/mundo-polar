import { Footer } from "@/app/components/Footer";
import { useAuth } from "@/app/context/AuthContext";
import {
  consumeAuthReturnPage,
  navigateTo,
} from "@/app/navigation";
import { Eye, EyeOff, UserPlus } from "lucide-react";
import { useState, type FormEvent } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
  phone: "",
  documentNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegistroPage() {
  const { signUp } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");
      setNotice("");
      const hasSession = await signUp({
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        documentNumber: form.documentNumber,
        email: form.email,
        password: form.password,
      });
      if (hasSession) {
        navigateTo(consumeAuthReturnPage() ?? "perfil");
      } else {
        setNotice(
          "Cuenta creada. Revisa tu correo para confirmar el registro.",
        );
      }
    } catch (reason: unknown) {
      setError(
        reason instanceof Error ? reason.message : "No se pudo crear la cuenta.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="auth-page">
        <div className="auth-card auth-card-wide">
          <div className="auth-icon" aria-hidden="true">
            <UserPlus size={28} />
          </div>
          <header>
            <p className="section-eyebrow">Cuenta nueva</p>
            <h1>Crear cuenta</h1>
            <p>Completa tus datos para comprar de forma segura.</p>
          </header>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-grid">
              <label>
                <span>Nombres</span>
                <input
                  required
                  maxLength={80}
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={(event) =>
                    updateField("firstName", event.target.value)
                  }
                />
              </label>
              <label>
                <span>Apellidos</span>
                <input
                  required
                  maxLength={80}
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={(event) =>
                    updateField("lastName", event.target.value)
                  }
                />
              </label>
              <label>
                <span>Teléfono</span>
                <input
                  type="tel"
                  maxLength={30}
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
              </label>
              <label>
                <span>DNI</span>
                <input
                  inputMode="numeric"
                  required
                  minLength={8}
                  maxLength={8}
                  pattern="[0-9]{8}"
                  value={form.documentNumber}
                  onChange={(event) =>
                    updateField(
                      "documentNumber",
                      event.target.value.replace(/\D/g, ""),
                    )
                  }
                />
              </label>
            </div>
            <label>
              <span>Correo electrónico</span>
              <input
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
            </label>
            <div className="auth-grid">
              <label>
                <span>Contraseña</span>
                <div className="auth-input plain">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    value={form.password}
                    onChange={(event) =>
                      updateField("password", event.target.value)
                    }
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
              <label>
                <span>Confirmar contraseña</span>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  autoComplete="new-password"
                  value={form.confirmPassword}
                  onChange={(event) =>
                    updateField("confirmPassword", event.target.value)
                  }
                />
              </label>
            </div>

            {error ? (
              <p className="auth-message error" role="alert">
                {error}
              </p>
            ) : null}
            {notice ? (
              <p className="auth-message success" role="status">
                {notice}
              </p>
            ) : null}

            <button
              className="auth-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creando cuenta…" : "Crear cuenta"}
            </button>
          </form>

          <p className="auth-switch">
            ¿Ya tienes una cuenta?
            <button type="button" onClick={() => navigateTo("login")}>
              Iniciar sesión
            </button>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
