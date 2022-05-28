const priceFormat = (number) => {
   return new Intl.NumberFormat('vn-VN', {
      // style: 'currency',
      currency: 'VND',
   }).format(number || 0);
};

export default priceFormat;
