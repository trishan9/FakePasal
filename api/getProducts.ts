export const getProducts = async () => {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
};
