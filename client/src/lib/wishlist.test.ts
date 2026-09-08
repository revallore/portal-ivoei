import { describe, expect, it } from "vitest";
import { parseWishlist, toggleWishlistId } from "./wishlist";

describe("wishlist", () => {
  it("adiciona uma oferta sem duplicar a seleção", () => {
    expect(toggleWishlistId([], "porto")).toEqual(["porto"]);
    expect(toggleWishlistId(["porto"], "porto")).toEqual([]);
  });

  it("remove somente o favorito selecionado", () => {
    expect(toggleWishlistId(["porto", "lençois"], "porto")).toEqual(["lençois"]);
  });

  it("recupera apenas ids válidos do armazenamento local", () => {
    expect(parseWishlist(JSON.stringify(["porto", 7, null, "lençois"]))).toEqual(["porto", "lençois"]);
    expect(parseWishlist("conteúdo inválido")).toEqual([]);
  });
});
