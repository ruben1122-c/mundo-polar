import { Footer } from "@/app/components/Footer";
import {
  ProfileInfoCard,
  type ProfileInfoItem,
} from "@/app/components/ProfileInfoCard";
import { ProfileOptionRow } from "@/app/components/ProfileOptionRow";
import { useAuth } from "@/app/context/AuthContext";
import type { Gender } from "@/types/auth";
import {
  CreditCard,
  Edit3,
  LockKeyhole,
  Mail,
  PackageSearch,
  Phone,
  Save,
  UserRound,
  VenusAndMars,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";

const genderLabels: Record<Gender, string> = {
  female: "Mujer",
  male: "Hombre",
  non_binary: "No binario",
  prefer_not_to_say: "Prefiero no indicarlo",
};

export default function PerfilPage() {
  const { profile, updateProfile } = useAuth();
  const [notice, setNotice] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    documentNumber: "",
    gender: "prefer_not_to_say" as Gender,
  });

  useEffect(() => {
    if (!profile) return;
    setForm({
      firstName: profile.first_name,
      lastName: profile.last_name,
      phone: profile.phone ?? "",
      documentNumber: profile.document_number ?? "",
      gender: profile.gender ?? "prefer_not_to_say",
    });
  }, [profile]);

  const contactItems = useMemo<ReadonlyArray<ProfileInfoItem>>(
    () => [
      {
        label: "Teléfono",
        value: profile?.phone || "No registrado",
        Icon: Phone,
      },
      {
        label: profile?.document_type.toUpperCase() || "DNI",
        value: profile?.document_number || "No registrado",
        Icon: CreditCard,
      },
    ],
    [profile],
  );

  const personalItems = useMemo<ReadonlyArray<ProfileInfoItem>>(
    () => [
      {
        label: "Correo",
        value: profile?.email || "No disponible",
        Icon: Mail,
      },
      {
        label: "Género",
        value: profile?.gender
          ? genderLabels[profile.gender]
          : "No especificado",
        Icon: VenusAndMars,
      },
    ],
    [profile],
  );

  if (!profile) {
    return (
      <>
        <section className="account-page">
          <div className="account-page-container">
            <div className="auth-message error" role="alert">
              No se pudo cargar tu perfil. Cierra sesión e inténtalo nuevamente.
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const fullName = `${profile.first_name} ${profile.last_name}`.trim();
  const initials =
    `${profile.first_name[0] ?? ""}${profile.last_name[0] ?? ""}`.toUpperCase();

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSaving) return;
    try {
      setIsSaving(true);
      setNotice("");
      await updateProfile({
        first_name: form.firstName,
        last_name: form.lastName,
        phone: form.phone || null,
        document_type: "dni",
        document_number: form.documentNumber || null,
        gender: form.gender,
      });
      setIsEditing(false);
      setNotice("Tus datos se actualizaron correctamente.");
    } catch (reason: unknown) {
      setNotice(
        reason instanceof Error
          ? reason.message
          : "No se pudo actualizar el perfil.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <section className="account-page profile-page">
        <div className="account-page-container profile-container">
          <header className="profile-page-header">
            <div>
              <p className="section-eyebrow">Cuenta</p>
              <h1>Mi perfil</h1>
            </div>
            <button
              className="profile-edit-button"
              type="button"
              onClick={() => setIsEditing((editing) => !editing)}
            >
              {isEditing ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Edit3 size={18} aria-hidden="true" />
              )}
              {isEditing ? "Cancelar" : "Editar perfil"}
            </button>
          </header>

          <section className="profile-summary" aria-label="Resumen de la cuenta">
            <span className="profile-avatar" aria-hidden="true">
              {initials || "MP"}
            </span>
            <div className="profile-identity">
              <h2>{fullName}</h2>
              <p>{profile.email}</p>
              <p>Cuenta protegida · {profile.role === "admin" ? "Administrador" : "Cliente"}</p>
            </div>
            <div className="profile-purchases">
              <strong>{profile.order_count}</strong>
              <span>Compras realizadas</span>
            </div>
          </section>

          {isEditing ? (
            <form className="profile-edit-form" onSubmit={handleSave}>
              <header>
                <div>
                  <p className="section-eyebrow">Datos personales</p>
                  <h2>Editar información</h2>
                </div>
                <p>El correo de acceso no puede cambiarse desde esta sección.</p>
              </header>
              <div className="profile-form-grid">
                <label>
                  <span>Nombres</span>
                  <input
                    required
                    maxLength={80}
                    value={form.firstName}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        firstName: event.target.value,
                      }))
                    }
                  />
                </label>
                <label>
                  <span>Apellidos</span>
                  <input
                    required
                    maxLength={80}
                    value={form.lastName}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        lastName: event.target.value,
                      }))
                    }
                  />
                </label>
                <label>
                  <span>Teléfono</span>
                  <input
                    type="tel"
                    maxLength={30}
                    value={form.phone}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                  />
                </label>
                <label>
                  <span>DNI</span>
                  <input
                    inputMode="numeric"
                    maxLength={8}
                    pattern="[0-9]{8}"
                    value={form.documentNumber}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        documentNumber: event.target.value.replace(/\D/g, ""),
                      }))
                    }
                  />
                </label>
                <label>
                  <span>Género</span>
                  <select
                    value={form.gender}
                    onChange={(event) =>
                      setForm((current) => ({
                        ...current,
                        gender: event.target.value as Gender,
                      }))
                    }
                  >
                    {Object.entries(genderLabels).map(([value, label]) => (
                      <option value={value} key={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  <span>Correo</span>
                  <input value={profile.email} disabled readOnly />
                </label>
              </div>
              <button
                className="profile-save-button"
                type="submit"
                disabled={isSaving}
              >
                <Save size={18} aria-hidden="true" />
                {isSaving ? "Guardando…" : "Guardar cambios"}
              </button>
            </form>
          ) : null}

          <div className="profile-info-grid">
            <ProfileInfoCard title="Contacto" items={contactItems} />
            <ProfileInfoCard title="Datos personales" items={personalItems} />
          </div>

          <section className="profile-options" aria-labelledby="more-options">
            <h2 id="more-options">Más opciones</h2>
            <ProfileOptionRow
              Icon={PackageSearch}
              label="Ver mis pedidos"
              onClick={() =>
                setNotice(
                  "El historial completo de pedidos estará disponible próximamente.",
                )
              }
            />
            <ProfileOptionRow
              Icon={LockKeyhole}
              label="Cambiar contraseña"
              onClick={() =>
                setNotice(
                  "El cambio de contraseña se habilitará en una siguiente fase.",
                )
              }
            />
          </section>

          {notice ? (
            <button
              className="account-notice"
              type="button"
              onClick={() => setNotice("")}
              aria-live="polite"
            >
              {notice}
            </button>
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
}
