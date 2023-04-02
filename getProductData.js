const getProductData = (_data = []) => {
  const productData = Object.values(_data);

  const productType = productData?.reduce((obj, product) => {
    if (product.department === "kitchen") {
      return {
        ...obj,
        kitchenItems: [...(obj.kitchenItems || []), product],
        kitchenProductAmount:
          (obj.kitchenProductAmount || 0) +
          (isNaN(product.price) ? 0 : product.price),
      };
    } else if (product.department === "bar" && product.inventoryLinked) {
      return {
        ...obj,
        barItems: [...(obj.barItems || []), product],
        barItemsAmount: (obj.barItemsAmount || 0) + product.price,
      };
    }
    return obj;
  }, {});
  console.log(productType.barItemsAmount, "jija");
  return productType;
};

export default getProductData;
