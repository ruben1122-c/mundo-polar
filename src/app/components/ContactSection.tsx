import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: ContactValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<ContactValues>>({});
  const [notice, setNotice] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<ContactValues> = {};
    if (!values.name.trim()) nextErrors.name = "Ingresa tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Ingresa un correo válido.";
    }
    if (!values.subject.trim()) nextErrors.subject = "Ingresa el asunto.";
    if (values.message.trim().length < 10) {
      nextErrors.message = "Escribe un mensaje de al menos 10 caracteres.";
    }
    setErrors(nextErrors);
    setNotice("");
    if (Object.keys(nextErrors).length === 0) {
      setNotice("Formulario de demostración: no se enviaron datos.");
    }
  };

  const update = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  return (
    <section className="contact-section">
      <div className="page-container contact-layout">
        <div className="contact-intro">
          <p className="section-eyebrow">Contáctanos</p>
          <h1>Estamos para ayudarte</h1>
          <p>
            Cuéntanos qué necesitas. Esta versión valida tus datos localmente,
            pero todavía no envía mensajes.
          </p>
          <div className="contact-details">
            <p><MapPin aria-hidden="true" /> Lima, Perú</p>
            <p><Phone aria-hidden="true" /> +51 962 690 195</p>
            <p><Mail aria-hidden="true" /> contacto@mundopolar.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="field-row">
            <Field
              id="contact-name"
              label="Nombre"
              value={values.name}
              error={errors.name}
              onChange={(value) => update("name", value)}
              autoComplete="name"
            />
            <Field
              id="contact-email"
              label="Correo electrónico"
              value={values.email}
              error={errors.email}
              onChange={(value) => update("email", value)}
              autoComplete="email"
              type="email"
            />
          </div>
          <Field
            id="contact-subject"
            label="Asunto"
            value={values.subject}
            error={errors.subject}
            onChange={(value) => update("subject", value)}
          />
          <label className="form-field" htmlFor="contact-message">
            <span>Mensaje</span>
            <textarea
              id="contact-message"
              value={values.message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              onChange={(event) => update("message", event.target.value)}
              placeholder="Cuéntanos cómo podemos ayudarte"
              rows={6}
            />
            {errors.message ? (
              <small id="contact-message-error">{errors.message}</small>
            ) : null}
          </label>
          <button className="primary-button" type="submit">Enviar mensaje</button>
          {notice ? <p className="form-notice" role="status">{notice}</p> : null}
        </form>
      </div>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: "text" | "email";
  autoComplete?: string;
  onChange: (value: string) => void;
}

function Field({
  id,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  onChange,
}: FieldProps) {
  return (
    <label className="form-field" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <small id={`${id}-error`}>{error}</small> : null}
    </label>
  );
}
