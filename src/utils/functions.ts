import CryptoJS from "crypto-js";
import moment from "moment/moment";
import "moment/locale/tr";
import React from "react";
moment.locale();

export const dateFormatter = (e?: string) => moment(e).format("LLL");

export const dateDifferenceFormatter = (end: string | moment.Moment, now?: string | moment.Moment) => {
  end = moment(end);
  now = moment(now);
  let dif = moment.duration(now.diff(end));
  return `${dif.days()} Gün ${dif.hours()} Saat ${dif.minutes()} Dakika ${dif.seconds()} Saniye`;
};

export const secondToTime = (second: number) => {
  const h = Math.floor(second / 3600).toString(); // .padStart(2, "0");
  const m = Math.floor((second % 3600) / 60).toString(); // .padStart(2, "0");
  const s = Math.floor(second % 60).toString(); // .padStart(2, "0");

  return `${h} Saat ${m} Dakika ${s} Saniye`;
};

export const getColor = (color: string, opacity = "1", prefix = "tblr-") => {
  const hexToRgba = (hex: string, opacity: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})` : null;
  };

  const hex = getComputedStyle(document.body).getPropertyValue(`--${prefix}${color}`).trim();
  if (opacity !== "1") {
    return hexToRgba(hex, opacity);
  }
  return hex;
};

export const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const CurrencyFormat = (paraMiktari: number, paraBirimi: string) => {
  return paraBirimi == "TL"
    ? new Intl.NumberFormat("tr-TR", { currency: "TRY", style: "currency" }).format(paraMiktari || 0)
    : paraBirimi == "EUR"
    ? new Intl.NumberFormat("de-DE", { currency: "EUR", style: "currency" }).format(paraMiktari || 0)
    : paraBirimi == "USD"
    ? new Intl.NumberFormat("en-US", { currency: "USD", style: "currency" }).format(paraMiktari || 0)
    : new Intl.NumberFormat("tr-TR", { currency: "TRY" }).format(paraMiktari || 0);
};

export const testPositiveNumber = (e: string) => {
  return (
    e
      // .replace(/^$/g, "1")
      .replace(/[^0-9]/g, "")
      // .replace(/(0.*?)0.*/g, "$1")
      .replace(/0.*?([0-9])/g, "$1")
      .replace(/([1-9][0-9])([0-9])/g, "$1")
  );
};

export const testMail = (value: string) => {
  return /(^$|^\S+@\S+\.\S+$)/g.test(value);
};

export const testIntNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  return (e.target.value = e.target.value.replace(/[^0-9]/g, ""));
};

export const testPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
  return e;
  // return /^[0-9]{0,10}$/.test(e.target.value);
};

export const testIntNegativeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  return (e.target.value = e.target.value.replace(/[^0-9]/g, "").replace(/((-.*?)-.*)/g, "$1"));
};

export const testFloatNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value
    .replace(",", ".")
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1");
  return e;
};

export const testFloatNegativeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = e.target.value
    .replace(",", ".")
    .replace(/[^0-9.-]/g, "")
    .replace(/(\..*?)\..*/g, "$1")
    .replace(/(-.*?)-.*/g, "$1");
  return e;
};

export const firstScreen = () => {
  const element = document.querySelector(".scroll-snap");
  element?.scrollTo({ left: 0, behavior: "smooth" });
  // document.querySelector(".first").classList.toggle("d-none");
  // document.querySelector(".second").classList.toggle("d-none");
};

export const secondScreen = () => {
  const element = document.querySelector(".scroll-snap");
  element?.scrollTo({ left: element.scrollWidth, behavior: "smooth" });
  // document.querySelector(".first").classList.toggle("d-none");
  // document.querySelector(".second").classList.toggle("d-none");
};

export const encryptValue = (value: any) => {
  const encryptedValue = CryptoJS.AES.encrypt(JSON.stringify(value), import.meta.env.VITE_AUTH_SECRET_KEY).toString();
  return encryptedValue;
};

export const decryptValue = (value: any) => {
  try {
    const decryptedValue = CryptoJS.AES.decrypt(value, import.meta.env.VITE_AUTH_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    return decryptedValue;
  } catch (error) {
    return;
  }
};
