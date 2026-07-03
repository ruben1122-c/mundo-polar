import { CheckCircle2, Info, AlertCircle, X } from "lucide-react";
import type { ToastMessage } from "../../context/ToastContext";

interface ToastProps {
  toast: ToastMessage;
  onClose: (id: string) => void;
}

function ToastItem({ toast, onClose }: ToastProps) {
  const getIcon = () => {
    switch (toast.type) {
      case "success":
        return <CheckCircle2 className="text-emerald-500" size={20} />;
      case "info":
        return <Info className="text-blue-500" size={20} />;
      case "error":
        return <AlertCircle className="text-red-500" size={20} />;
    }
  };

  const getBorderColor = () => {
    switch (toast.type) {
      case "success":
        return "border-emerald-500/20";
      case "info":
        return "border-blue-500/20";
      case "error":
        return "border-red-500/20";
    }
  };

  return (
    <div
      className={`flex items-center gap-3 p-4 bg-white border ${getBorderColor()} rounded-2xl shadow-xl animate-toast-in pointer-events-auto max-w-sm w-full transition-all duration-300`}
      role="alert"
    >
      <div className="flex-shrink-0">{getIcon()}</div>
      <div className="flex-1 text-sm font-semibold text-slate-800 leading-snug">
        {toast.message}
      </div>
      <button
        onClick={() => onClose(toast.id)}
        className="flex-shrink-0 p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        aria-label="Cerrar notificación"
      >
        <X size={16} />
      </button>
    </div>
  );
}

export function ToastContainer({
  toasts,
  onClose,
}: {
  toasts: ToastMessage[];
  onClose: (id: string) => void;
}) {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none"
      aria-live="assertive"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
}
