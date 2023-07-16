export const getProductDetails = async (id: any) => {
  const res = await fetch(`http://localhost:4000/products/${id}`);
  return res.json();
};
