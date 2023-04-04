const getProductData = (_data = []) => {
  const productData = Object.values(_data);

  const productType = productData.reduce((obj, product) => {
    if (product.department === "kitchen") {
      return {
        ...obj,
        kotProductCode: [...(obj.kotProductCode || []), product.productCode],
      };
    } else if (product.department === "bar") {
      return {
        ...obj,
        botProductCode: [...(obj.botProductCode || []), product.productCode],
      };
    } else if (product.department === "cafe") {
      return {
        ...obj,
        cotProductCode: [...(obj.cotProductCode || []), product.productCode],
      };
    } else if (product.department === "-None-") {
      return {
        ...obj,
        noneDepCode: [...(obj.noneDepCode || []), product.productCode],
      };
    } else {
      return {
        ...obj,
        mulitDepCode: [...(obj.mulitDepCode || []), product.productCode],
      };
    }
  }, {});

  return productType;
};

export default getProductData;
