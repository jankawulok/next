import { locale, currency, country } from '@jkawulok/prestashop-api';

export const createFormatPrice = (price: number) => {
  if (!price) {
    return null;
  }
  return new Intl.NumberFormat(`${locale}-${country}`, { style: 'currency', currency }).format(price);
};

export const createFormatDate = (date: string) => {
  if (!date) {
    return null;
  }
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat(`${locale}-${country}`, options).format(new Date(date));
};
