export const getData = async(url: string) => {
  // const res = await fetch("https://fakestoreapi.com/products");
const res = await fetch(url, {
  cache: "no-store",
  next: { tags: ["products"] },
});

  if (!res.ok) {
    throw new Error("Failed to fetch Data");
  }

  return res.json();
}