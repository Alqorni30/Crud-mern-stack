export const formatToRupiah = (totalHarga: string): string => {
    const number = parseInt(totalHarga);
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  