export const getProductDetails = async (id: any) => {
  const res = await fetch(`https://fake-pasal-api.vercel.app/api/products/${id}`);
  return res.json();
};
