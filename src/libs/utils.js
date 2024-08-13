import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const currencyFormatter = (number, currency = "USD") => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(number);
};
