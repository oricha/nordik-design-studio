import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export const ProtectedAdminRoute = () => {
  const location = useLocation();
  const { configured, isAuthenticated, loading } = useAdminAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-muted/30 px-6 pt-20">
        <p className="text-sm font-medium text-muted-foreground">Comprobando sesión de administrador...</p>
      </div>
    );
  }

  if (!configured || !isAuthenticated) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
};
