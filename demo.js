const initObj = {
  filteredReceipts: [],
  totalSales: 0,
  total: 0,
  vat: 0,
  serviceCharge: 0,
  deliveryCharges: 0,
  discount: 0,
  totalNonChargeable: 0,
  totalCredit: 0,
  accomodation: 0,
};

const demo = (_data = []) => {
  const data = Object.values(_data);

  const sortedData = data?.sort(
    (a, b) =>
      new Date(b?.orderMarkedCompletedOn || b?.orderMarkedCanceledOn) -
      new Date(a?.orderMarkedCompletedOn || a?.orderMarkedCanceledOn)
  );

  const salesData = sortedData.reduce(
    (obj, order) => {
      const total = getTotalAmount(order);

      const totalNonChargeable = getNonChargeableAmount(order);

      if (
        order.orderStatus === "canceled" ||
        order.payment?.method === "nonchargeable"
      )
        return {
          ...obj,
          filteredReceipts: [...obj.filteredReceipts, order],
          total: obj.total + total,
          totalNonChargeable: obj.totalNonChargeable + totalNonChargeable,
        };

      const totalSales = obj.totalSales + order.totalAmount;

      const accomodation =
        order.orderType === "stay" ? +order?.accomodationOrder?.totalAmount : 0;

      const { vat, serviceCharge, deliveryCharges } =
        getTotalChargesAmount(order);

      const discount = obj.discount + (order?.discount || 0);

      const totalCredit = getTotalCreditAmount(order);

      return {
        ...obj,
        filteredReceipts: [...obj.filteredReceipts, order],
        totalSales,
        total: obj.total + total,
        totalNonChargeable: obj.totalNonChargeable + totalNonChargeable,
        vat: obj.vat + vat,
        serviceCharge: obj.serviceCharge + serviceCharge,
        deliveryCharges: obj.deliveryCharges + deliveryCharges,
        discount,
        totalCredit: obj.totalCredit + totalCredit,
        accomodation: obj.accomodation + accomodation,
      };
    },
    { ...initObj }
  );

  return {
    filteredReceipts: salesData.filteredReceipts,
    totalSales: salesData.totalSales,
    total: salesData.total,
    charges: {
      vat: salesData.vat,
      serviceCharge: salesData.serviceCharge,
      deliveryCharges: salesData.deliveryCharges,
    },
    discount: salesData.discount,
    totalNonChargeable: salesData.totalNonChargeable,
    totalCredit: salesData.totalCredit,
    accomodation: salesData.accomodation,
  };
};

const getTotalAmount = (order) => {
  if (order.orderStatus === "canceled") return 0;

  const filteredItem = (order?.orderItems || []).filter(
    (o) => !["canceled"].includes(o.status)
  );

  const total = filteredItem.reduce((a, c) => a + c.amount, 0);

  const accomodationAmount =
    order.orderType === "stay"
      ? +order?.accomodationOrder?.totalAmount || 0
      : 0;

  return total + accomodationAmount;
};

const getNonChargeableAmount = (order) => {
  if (order.payment?.method === "nonchargeable") {
    const totalnonchargeable = (order?.orderItems || [])
      .filter((o) => o.status !== "canceled")
      .reduce((b, o) => b + o.amount, 0);

    const accomodationNonChargeables =
      order.orderType === "stay" && order.payment.method === "nonchargeable"
        ? +order?.accomodationOrder?.totalAmount || 0
        : 0;

    return totalnonchargeable + accomodationNonChargeables;
  }

  const nonchargableAmount = (order?.orderItems || []).reduce((b, o) => {
    if (o.status === "nonchargeable") {
      return b + o.amount;
    }
    return b;
  }, 0);

  return nonchargableAmount;
};

const getTotalChargesAmount = (order) => {
  const vat =
    order?.additionalCharges.find((i) => i.name === "VAT")?.amount || 0;

  const serviceCharge =
    order?.additionalCharges.find((i) => i.name === "Service Charge")?.amount ||
    0;

  const deliveryCharges =
    order?.additionalCharges.find((i) => i.name === "Delivery Charges")
      ?.amount || 0;

  return {
    vat,
    serviceCharge,
    deliveryCharges,
  };
};

const getTotalCreditAmount = (order) => {
  if (order.payment.method === "paisaLend") {
    return order.totalAmount;
  } else if (order?.payment?.method === "multi") {
    const paisaLend = order?.payment?.multiPaymentMethods?.find(
      (o) => o.method === "paisaLend"
    );
    if (paisaLend) return paisaLend.amount || 0;

    return 0;
  }

  return 0;
};

export default demo;
