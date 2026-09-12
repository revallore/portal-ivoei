import { describe, expect, it } from "vitest";
import { approvedImageBank, imageForOffer } from "./imageBank";

describe("approvedImageBank", () => {
  it("mantém uma imagem editorial estável e única para cada destino curado", () => {
    const urls = Object.values(approvedImageBank);
    expect(urls.length).toBeGreaterThanOrEqual(50);
    expect(new Set(urls).size).toBe(urls.length);
    expect(urls.every((url) => url.startsWith("https://images.unsplash.com/photo-") || url.startsWith("/manus-storage/"))).toBe(true);
    expect(Object.keys(approvedImageBank)).toEqual(expect.arrayContaining([
      "porto-de-galinhas", "maceio-maragogi", "trancoso", "natal-pipa", "jeri", "florianopolis",
    ]));
  });

  it("usa a imagem original para destinos ainda não migrados", () => {
    expect(imageForOffer("destino-pendente", "https://example.com/fallback.jpg")).toBe("https://example.com/fallback.jpg");
  });
});
