const getAllProduct = (setList, getCategoryForDropDown) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      setList(json);

      getCategoryForDropDown(json);
      console.log("json", json);
    })
    .catch((e) => {
      console.log(e);
    });
};
const getByCategory = (category, setList) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((json) => {
      setList(json);
    });
};
export { getAllProduct, getByCategory };
