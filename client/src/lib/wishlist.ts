export function toggleWishlistId(ids: string[], id: string): string[] {
  return ids.includes(id) ? ids.filter((currentId) => currentId !== id) : [...ids, id];
}

export function parseWishlist(value: string | null): string[] {
  if (!value) return [];
  try {
    const parsed: unknown = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string");
  } catch {
    return [];
  }
}
