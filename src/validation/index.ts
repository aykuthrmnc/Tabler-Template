import Yup from "./validate";

//! AUTH
export const AuthLoginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
  // rememberMe: Yup.boolean(),
});

export const AuthRegisterSchema = Yup.object().shape({
  name: Yup.string().required(), // .matches(/^\S+(\s{1}\S+)+$/, "Geçerli bir isim giriniz.")
  phoneNumber: Yup.string().nullable(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  repassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref("password"), undefined], "Şifreler eşleşmiyor."),
  // phoneNumber: Yup.string()
  //   .required()
  //   .matches(/^[0-9]{10}$/, "Telefon numarası 10 karakter olmalıdır!"),
  // accept: Yup.boolean().isTrue("").required(),
});

export const AuthForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().required(),
});

export const AuthResetPasswordSchema = Yup.object().shape({
  code: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string()
    .test({
      test: (value) => {
        const errors = [];

        if (!/^(?=.*[a-z])/.test(value || "")) {
          errors.push("En az 1 küçük harf olmalıdır.");
        }

        if (!/^(?=.*[A-Z])/.test(value || "")) {
          errors.push("En az 1 büyük harf olmalıdır.");
        }

        if (!/^(?=.*[0-9])/.test(value || "")) {
          errors.push("En az 1 sayı olmalıdır.");
        }

        if (!/^(?=.*[!@#$%^&*(),.?":{}|<>])/.test(value || "")) {
          errors.push("En az 1 sembol olmalıdır.");
        }

        if (!/^(?=.{8,})/.test(value || "")) {
          errors.push("Minimum 8 karakter olmalıdır.");
        }

        if (errors.length) {
          // @ts-ignore
          throw new Yup.ValidationError({
            name: "ValidationError",
            path: "newPassword",
            errors: errors,
            message: errors,
            value: value,
            inner: true,
          });
        }

        return true;
      },
    })
    // .min(8)
    // .matches(/[a-z]+/, "En az 1 küçük harf olmalıdır.")
    // .matches(/[A-Z]+/, "En az 1 büyük harf olmalıdır.")
    // .matches(/\d+/, "En az 1 sayı olmalıdır.")
    // .matches(/[@$!%*#?&]+/, "En az 1 sembol olmalıdır.")
    .required(),
  repassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref("password"), undefined], "Şifreler eşleşmiyor."),
});

//! USER
export const UserAddOrUpdateSchema = Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  address: Yup.string().required(),
  description: Yup.string().required(),
  email: Yup.string().required(),
  // type: Yup.object({
  //   value: Yup.string(),
  //   label: Yup.string(),
  // })
  //   .default(null)
  //   .required(),
});

export const UserChangePasswordSchema = Yup.object().shape({
  password: Yup.string().min(8).required(),
  repassword: Yup.string()
    .min(8)
    .oneOf([Yup.ref("password"), undefined], "Şifreler eşleşmiyor."),
});

//   accountCode: Yup.string().when("id", {
//     is: (id: any) => id.length > 0,
//     then: () =>
//       Yup.object()
//         .shape({
//           label: Yup.string(),
//           value: Yup.string().required(),
//         })
//         .default(undefined)
//         .nullable(),
//     otherwise: () =>
//       Yup.object()
//         .shape({
//           label: Yup.string(),
//           value: Yup.string().required(),
//         })
//         .default(undefined)
//         .required(),
//   })

export const PersonSchema = Yup.object().shape({
  id: Yup.number().required(),
  isim: Yup.string().required(),
  yas: Yup.number().required(),
  meslek: Yup.object()
    .shape({
      label: Yup.string(),
      value: Yup.string(),
    })
    .default(null)
    .nullable(),
  email: Yup.string().email().required(),
  telefon: Yup.string().nullable(),
  sehir: Yup.string().nullable(),
  ilce: Yup.string().nullable(),
  mahalle: Yup.string().nullable(),
  sokak: Yup.string().nullable(),
  postaKodu: Yup.string().nullable(),
});
