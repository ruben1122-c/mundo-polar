import { ChevronRight, type LucideIcon } from "lucide-react";

interface ProfileOptionRowProps {
  Icon: LucideIcon;
  label: string;
  onClick: () => void;
}

export function ProfileOptionRow({
  Icon,
  label,
  onClick,
}: ProfileOptionRowProps) {
  return (
    <button className="profile-option-row" type="button" onClick={onClick}>
      <span className="profile-info-icon">
        <Icon size={19} aria-hidden="true" />
      </span>
      <span>{label}</span>
      <ChevronRight size={18} aria-hidden="true" />
    </button>
  );
}
