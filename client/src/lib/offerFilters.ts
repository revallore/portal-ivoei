export type PriceBand = "Todos" | "Até R$ 2 mil" | "R$ 2–5 mil" | "R$ 5–10 mil" | "R$ 10 mil+";

export const priceBands: PriceBand[] = ["Todos", "Até R$ 2 mil", "R$ 2–5 mil", "R$ 5–10 mil", "R$ 10 mil+"];

export const travelStyles = [
  "Todos",
  "Praia e descanso",
  "Romance",
  "Família e parques",
  "Cultura e gastronomia",
  "Natureza e aventura",
  "Luxo e cruzeiros",
  "Eventos",
] as const;

export type OfferFilter = {
  destinationSearch: string;
  priceBand: PriceBand;
  styleFilter: string;
};

export type FilterableOffer = {
  destination: string;
  title: string;
  summary: string;
  inclusions: string;
  price: string;
};

export function priceValue(price: string) {
  return Number(price.replace(/[^0-9]/g, ""));
}

export function styleForCategory(categoryId: string) {
  if (["praias", "parques-nacionais"].includes(categoryId)) return categoryId === "praias" ? "Praia e descanso" : "Família e parques";
  if (["romance-brasil", "romance-mundo", "luxo-extremo"].includes(categoryId)) return categoryId.includes("romance") ? "Romance" : "Luxo e cruzeiros";
  if (["cruzeiros-nacionais", "cruzeiros-internacionais", "cruzeiros-rio", "cruzeiros-luxo"].includes(categoryId)) return "Luxo e cruzeiros";
  if (["carnaval", "eventos"].includes(categoryId)) return "Eventos";
  if (["gastronomia-brasil", "gastronomia-mundo", "historia", "ciencia", "tecnologia"].includes(categoryId)) return "Cultura e gastronomia";
  return ["classicos", "internacionais", "expedicoes", "parques"].includes(categoryId) ? "Natureza e aventura" : "Natureza e aventura";
}

export function matchesOffer(offer: FilterableOffer, categoryId: string, filters: OfferFilter) {
  const haystack = `${offer.destination} ${offer.title} ${offer.summary} ${offer.inclusions}`.toLowerCase();
  const query = filters.destinationSearch.trim().toLowerCase();
  const matchesDestination = !query || haystack.includes(query);
  const value = priceValue(offer.price);
  const matchesPrice = filters.priceBand === "Todos" ||
    (filters.priceBand === "Até R$ 2 mil" && value <= 2000) ||
    (filters.priceBand === "R$ 2–5 mil" && value > 2000 && value <= 5000) ||
    (filters.priceBand === "R$ 5–10 mil" && value > 5000 && value <= 10000) ||
    (filters.priceBand === "R$ 10 mil+" && value > 10000);
  const matchesStyle = filters.styleFilter === "Todos" || styleForCategory(categoryId) === filters.styleFilter;
  return matchesDestination && matchesPrice && matchesStyle;
}
