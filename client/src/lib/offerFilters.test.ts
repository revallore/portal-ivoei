import { describe, expect, it } from "vitest";
import { matchesOffer, priceValue, type FilterableOffer } from "./offerFilters";

const offer: FilterableOffer = {
  destination: "Santorini · Grécia",
  title: "O Pôr do Sol de Oia que Para o Tempo",
  summary: "Villa com piscina e experiência romântica",
  inclusions: "Voo para Atenas + ferry · Villa com piscina",
  price: "R$ 11.900",
};

describe("offerFilters", () => {
  it("converte preço formatado em número", () => {
    expect(priceValue("R$ 1.890")).toBe(1890);
    expect(priceValue("R$ 11.900")).toBe(11900);
  });

  it("encontra oferta por destino ou texto da experiência", () => {
    expect(matchesOffer(offer, "romance-mundo", { destinationSearch: "santorini", priceBand: "Todos", styleFilter: "Todos" })).toBe(true);
    expect(matchesOffer(offer, "romance-mundo", { destinationSearch: "villa com piscina", priceBand: "Todos", styleFilter: "Todos" })).toBe(true);
  });

  it("aplica a faixa de preço e estilo da categoria", () => {
    expect(matchesOffer(offer, "romance-mundo", { destinationSearch: "", priceBand: "R$ 10 mil+", styleFilter: "Romance" })).toBe(true);
    expect(matchesOffer(offer, "romance-mundo", { destinationSearch: "", priceBand: "Até R$ 2 mil", styleFilter: "Romance" })).toBe(false);
    expect(matchesOffer(offer, "romance-mundo", { destinationSearch: "", priceBand: "Todos", styleFilter: "Família e parques" })).toBe(false);
  });

  it("retorna falso para uma combinação que não corresponde", () => {
    expect(matchesOffer(offer, "romance-mundo", { destinationSearch: "santorini", priceBand: "Até R$ 2 mil", styleFilter: "Romance" })).toBe(false);
  });
});
