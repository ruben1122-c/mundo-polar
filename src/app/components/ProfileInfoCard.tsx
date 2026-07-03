import type { LucideIcon } from "lucide-react";

export interface ProfileInfoItem {
  label: string;
  value: string;
  Icon: LucideIcon;
}

interface ProfileInfoCardProps {
  items: ReadonlyArray<ProfileInfoItem>;
  title: string;
}

export function ProfileInfoCard({ items, title }: ProfileInfoCardProps) {
  const headingId = `profile-${title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <section className="profile-info-card" aria-labelledby={headingId}>
      <h2 id={headingId}>{title}</h2>
      <dl>
        {items.map(({ Icon, label, value }) => (
          <div key={label} className="profile-info-row">
            <span className="profile-info-icon">
              <Icon size={19} aria-hidden="true" />
            </span>
            <div>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
