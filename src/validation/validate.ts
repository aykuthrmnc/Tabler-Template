import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Bu alan zorunludur.",
    notType: (_ref) => {
      switch (_ref.type) {
        case "number":
          return "Girilen değer sayı olmalıdır.";
        case "string":
          return "Girilen yazı türünde hatalıdır.";
        case "date":
          return "Girilen tarih değerinde olmalıdır.";
        default:
          return "Girilen değer hatalıdır.";
      }
    },
    oneOf: "Seçeneklerden biri olmalıdır.",
    notNull: "Bu alan zorunludur!",
  },
  string: {
    email: "Geçerli bir e-posta adresi girin.",
    length: "Bu alan ${length} karakter olmalıdır.",
    min: "Minimum ${min} karakter olmalıdır.",
  },
  array: {
    min: "En az bir seçenek içermelidir.",
  },
  number: {
    positive: "Sayı pozitif olmalıdır.",
  },
});

export default Yup;
