import { FormEvent, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AlertCircle, Lock } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAdminAuth } from "@/hooks/useAdminAuth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { configured, isAuthenticated, loading, signIn } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? "/admin/dashboard";

  if (!loading && isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const { error: signInError } = await signIn(email, password);
    setSubmitting(false);

    if (signInError) {
      setError("No se pudo iniciar sesión con esas credenciales.");
      return;
    }

    navigate(from, { replace: true });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-6 py-24">
      <section className="w-full max-w-md rounded-2xl border border-border bg-background p-8 shadow-sm">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Lock className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Admin</p>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">NordiK Contactos</h1>
          </div>
        </div>

        {!configured ? (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" aria-hidden />
            <AlertTitle>Supabase no configurado</AlertTitle>
            <AlertDescription>
              Define `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` para habilitar el login.
            </AlertDescription>
          </Alert>
        ) : null}

        {error ? (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" aria-hidden />
            <AlertTitle>Acceso denegado</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : null}

        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="admin-email">Email</Label>
            <Input
              id="admin-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              disabled={!configured || submitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password">Password</Label>
            <Input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              disabled={!configured || submitting}
            />
          </div>
          <Button type="submit" className="w-full" disabled={!configured || submitting}>
            {submitting ? "Entrando..." : "Entrar al dashboard"}
          </Button>
        </form>
      </section>
    </main>
  );
};

export default AdminLogin;
