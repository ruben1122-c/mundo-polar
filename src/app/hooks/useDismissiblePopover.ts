import { useEffect, type RefObject } from "react";

export function useDismissiblePopover(
  ref: RefObject<HTMLElement>,
  open: boolean,
  onClose: () => void,
) {
  useEffect(() => {
    if (!open) return undefined;

    const dismissOnPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) onClose();
    };
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("pointerdown", dismissOnPointerDown);
    document.addEventListener("keydown", dismissOnEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOnPointerDown);
      document.removeEventListener("keydown", dismissOnEscape);
    };
  }, [onClose, open, ref]);
}
