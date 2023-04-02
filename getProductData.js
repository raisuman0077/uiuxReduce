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
    } else if (product.department === "cafe" && !product.inventoryLinked) {
      return {
        ...obj,
        cafeItems: [...(obj.cafeItems || []), product],
        cafeItemsAmount: (obj.cafeItemsAmount || 0) + product.price,
      };
    } else if (product.department === "-None-" && !product.hiddenFromExpWeb) {
      return {
        ...obj,
        noneDepItems: [...(obj.noneDepItems || []), product],
        noneAmount: (obj.noneAmount || 0) + product.price,
      };
    }
    return obj;
  }, {});
  console.log(productType.barItemsAmount, "jija");
  console.log(productType.cafeItemsAmount, "cafe amount");
  console.log(productType.noneDepItems, "cafe amount");
  return productType;
};

export default getProductData;
