import CryptoJS from "crypto-js";
import React from "react";
import moment, { Moment } from "moment";
// import "moment/locale/tr";
moment.locale();
// import i18n from "~/i18n";

//! DATE FORMAT
export const dateFormatter = (e?: string) => moment(e).format("LLL");

export const dateDifferenceFormatter = (
  start: string | moment.Moment,
  now?: string | moment.Moment,
  show?: { day?: boolean; hour?: boolean; minute?: boolean; second?: boolean },
) => {
  show = { day: true, hour: true, minute: true, second: true, ...show };
  start = moment(start);
  now = moment(now);
  const dif = moment.duration(now.diff(start));
  let value = "";

  let day = dif.days();
  let hour = dif.hours();
  let minute = dif.minutes();
  let second = dif.seconds();

  if (show.day) {
    value += day + " Gün ";
  } else {
    hour = day * 24 + hour;
  }

  if (show.hour) {
    value += hour + " Saat ";
  } else {
    minute = hour * 60 + minute;
  }
  if (show.minute) {
    value += minute + " Dakika ";
  } else {
    second = minute * 60 + second;
  }

  if (show.second) {
    value += second + " Saniye";
  }

  return value.trim();
};

export const secondToTime = (second = 0) => {
  const h = Math.floor(second / 3600).toString(); // .padStart(2, "0");
  const m = Math.floor((second % 3600) / 60).toString(); // .padStart(2, "0");
  const s = Math.floor(second % 60).toString(); // .padStart(2, "0");

  return `${h} Saat ${m} Dakika ${s} Saniye`;
};

export const dateLocaleFormatter = (e?: string | Moment, format?: string) =>
  moment(e)
    // .locale(i18n.language || "tr")
    .format(format || "LLL");

export const dateFormatToReadiableTime = (value: any) => {
  const date = new Date(
    // @ts-ignore
    null,
    null,
    null,
    parseInt(value.split(":")[0]),
    parseInt(value.split(":")[1]),
    parseInt(value.split(":")[2]),
  );

  const readiableTime = (
    (date.getHours() ? date.getHours() + "sa" : "") +
    " " +
    (date.getMinutes() ? date.getMinutes() + "dk" : "")
  ).trim();

  return readiableTime || "";
};

//! CURRENCY FORMAT
export const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  // maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const CurrencyFormat = (paraMiktari: number, paraBirimi: string) => {
  return paraBirimi == "TL"
    ? new Intl.NumberFormat("tr-TR", {
        currency: "TRY",
        style: "currency",
      }).format(paraMiktari || 0)
    : paraBirimi == "EUR"
      ? new Intl.NumberFormat("de-DE", {
          currency: "EUR",
          style: "currency",
        }).format(paraMiktari || 0)
      : paraBirimi == "USD"
        ? new Intl.NumberFormat("en-US", {
            currency: "USD",
            style: "currency",
          }).format(paraMiktari || 0)
        : new Intl.NumberFormat("tr-TR", { currency: "TRY" }).format(paraMiktari || 0);
};

//! JSON PARSER
export const JSONParser = (value: string | null) => {
  try {
    if (value === null) {
      return value;
    }
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
};

//! ENCRYPTION
export const encryptValue = (value: any) => {
  const encryptedValue = CryptoJS.AES.encrypt(JSON.stringify(value), import.meta.env.VITE_AUTH_SECRET_KEY).toString();
  return encryptedValue;
};

export const decryptValue = (value: any) => {
  try {
    const decryptedValue = CryptoJS.AES.decrypt(value, import.meta.env.VITE_AUTH_SECRET_KEY).toString(
      CryptoJS.enc.Utf8,
    );
    return decryptedValue;
  } catch (error) {
    return;
  }
};

//! COLOR GENERATOR
export const getColor = (color: string, opacity = "1", prefix = "tblr-") => {
  const hexToRgba = (hex: string, opacity: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${opacity})`
      : null;
  };

  const hex = getComputedStyle(document.body).getPropertyValue(`--${prefix}${color}`).trim();
  if (opacity !== "1") {
    return hexToRgba(hex, opacity);
  }
  return hex;
};

//! REGEX
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

//! DEBOUNCE
let timer: any;
export const debounce = (callback: Function, timeout = 700) => {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    callback();
  }, timeout);
};

// const debounce = (callback, timeout = 700) => {
//   let timer = null;
//   return (...args) => {
//     window.clearTimeout(timer);
//     timer = window.setTimeout(() => {
//       callback(...args);
//     }, timeout);
//   };
// };

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

//! DOWNLOAD FILE
export const downloadFile = (
  e: any,
  fileName: string = `${import.meta.env.VITE_APP_NAME || "download"}_${moment().valueOf()}`,
) => {
  const url = window.URL.createObjectURL(e);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

//! OPERATION SYSTEM
export const getOS = () => {
  const userAgent = window.navigator.userAgent,
    platform = (window.navigator as any)?.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];

  let os: "Android" | "Ios" | "Web" | "Mac OS" | undefined;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Web"; // "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "Ios"; //"iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Web"; //"Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Web"; //'Linux';
  }

  return os;
};

//! TEXT TRANSLATOR
export const camelCaseTranslator = (text: string) => {
  const turkish_letters: any = {
    ğ: "g",
    ü: "u",
    ş: "s",
    ı: "i",
    ö: "o",
    ç: "c",
    Ğ: "G",
    Ü: "U",
    Ş: "S",
    İ: "I",
    Ö: "O",
    Ç: "C",
  };
  return text
    .toLowerCase()
    .replace(/[ğüşıöçĞÜŞİÖÇ]/g, (m) => turkish_letters[m])
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
};
