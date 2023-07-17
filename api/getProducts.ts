export const getProducts = async () => {
  const res = await fetch("https://fake-pasal-api.vercel.app/api/products");
  return res.json();
};
