export const GetProducts = async () => {
  const datas = await fetch("https://dummyjson.com/products?limit=10");
  return datas.json();
};

export const GetDetail = async (id) => {
  const det = await fetch(`https://dummyjson.com/products/${id}`);
  return det.json();
};
