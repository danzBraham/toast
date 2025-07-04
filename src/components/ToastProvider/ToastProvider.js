import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleDismissToasts(e) {
      if (e.code !== "Escape") {
        return;
      }

      setToasts([]);
    }

    window.addEventListener("keydown", handleDismissToasts);

    return () => window.removeEventListener("keydown", handleDismissToasts);
  }, []);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];

    setToasts(nextToasts);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  const value = { toasts, createToast, dismissToast };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
