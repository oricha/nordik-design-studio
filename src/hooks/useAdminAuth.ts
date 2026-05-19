import { useCallback, useEffect, useMemo, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabaseClient";

export const useAdminAuth = () => {
  const client = useMemo(() => getSupabaseBrowserClient(), []);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(isSupabaseConfigured);

  useEffect(() => {
    if (!client) {
      setLoading(false);
      return;
    }

    let mounted = true;

    client.auth.getSession().then(({ data }) => {
      if (!mounted) {
        return;
      }
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });

    const { data } = client.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      mounted = false;
      data.subscription.unsubscribe();
    };
  }, [client]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      if (!client) {
        return { error: new Error("Supabase is not configured.") };
      }

      return client.auth.signInWithPassword({ email, password });
    },
    [client],
  );

  const signOut = useCallback(async () => {
    if (!client) {
      return { error: null };
    }

    return client.auth.signOut();
  }, [client]);

  return {
    configured: isSupabaseConfigured,
    loading,
    session,
    user,
    isAuthenticated: Boolean(session),
    signIn,
    signOut,
  };
};
