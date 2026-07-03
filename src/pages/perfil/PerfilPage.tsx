import { Footer } from "@/app/components/Footer";
import {
  ProfileInfoCard,
  type ProfileInfoItem,
} from "@/app/components/ProfileInfoCard";
import { ProfileOptionRow } from "@/app/components/ProfileOptionRow";
import {
  CreditCard,
  Edit3,
  LockKeyhole,
  PackageSearch,
  Phone,
  UserRound,
  VenusAndMars,
} from "lucide-react";
import { useState } from "react";

const contactItems: ReadonlyArray<ProfileInfoItem> = [
  { label: "Teléfono", value: "912345678", Icon: Phone },
  { label: "DNI", value: "12345678", Icon: CreditCard },
];

const personalItems: ReadonlyArray<ProfileInfoItem> = [
  { label: "Usuario", value: "Nombre", Icon: UserRound },
  { label: "Género", value: "No especificado", Icon: VenusAndMars },
];

export default function PerfilPage() {
  const [notice, setNotice] = useState("");

  const showMockNotice = (message: string) => {
    setNotice(message);
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
              onClick={() =>
                showMockNotice("La edición de perfil es una demostración visual.")
              }
            >
              <Edit3 size={18} aria-hidden="true" />
              Editar perfil
            </button>
          </header>

          <section className="profile-summary" aria-label="Resumen de la cuenta">
            <span className="profile-avatar" aria-hidden="true">
              TT
            </span>
            <div className="profile-identity">
              <h2>Appellido Nombre</h2>
              <p>@nombredeusuario</p>
              <p>correo@gmail.com · Cuenta protegida</p>
            </div>
            <div className="profile-purchases">
              <strong>0</strong>
              <span>Compras realizadas</span>
            </div>
          </section>

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
                showMockNotice(
                  "El historial de pedidos estará disponible más adelante.",
                )
              }
            />
            <ProfileOptionRow
              Icon={LockKeyhole}
              label="Cambiar contraseña"
              onClick={() =>
                showMockNotice(
                  "El cambio de contraseña requiere autenticación real.",
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
