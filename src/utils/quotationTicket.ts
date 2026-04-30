/** Referencia visible para el usuario (F1.4.7 / F1.4.8); el envío real de email queda en backend). */
export function generateQuotationTicketId(): string {
  const d = new Date();
  const y = d.getFullYear();
  const mo = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `NDK-${y}${mo}${day}-${rand}`;
}
