export const ATTACH_MAX_FILES = 5;
export const ATTACH_MAX_BYTES = 10 * 1024 * 1024;
export const ATTACH_ACCEPT = ".pdf,.jpg,.jpeg,.png";

export type QuotationAttachment = {
  id: string;
  file: File;
  previewUrl?: string;
};

export function acceptsAttachmentFile(file: File): boolean {
  const mimeOk = /^image\/(jpeg|png)$|^application\/pdf$/i.test(file.type);
  const extOk = /\.(pdf|jpe?g|png)$/i.test(file.name);
  return mimeOk || extOk;
}

export function mergeAttachmentFiles(
  current: QuotationAttachment[],
  files: Iterable<File>,
): { next: QuotationAttachment[]; error: string | null } {
  const next = [...current];
  let error: string | null = null;

  for (const file of files) {
    if (next.length >= ATTACH_MAX_FILES) {
      error = `Máximo ${ATTACH_MAX_FILES} archivos.`;
      break;
    }
    if (!acceptsAttachmentFile(file)) {
      error = "Formatos permitidos: PDF, JPG y PNG.";
      break;
    }
    if (file.size > ATTACH_MAX_BYTES) {
      error = "Cada archivo debe tener como máximo 10 MB.";
      break;
    }
    const previewUrl = /^image\/(jpeg|png)$/i.test(file.type) ? URL.createObjectURL(file) : undefined;
    next.push({
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`,
      file,
      previewUrl,
    });
  }

  return { next, error };
}

export function revokeAttachmentPreview(row: QuotationAttachment) {
  if (row.previewUrl) URL.revokeObjectURL(row.previewUrl);
}
