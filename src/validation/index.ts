import Yup from "./validate";

//! AUTH
export const AuthLoginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
  rememberMe: Yup.boolean(),
});

export const AuthRegisterSchema = Yup.object().shape({
  name: Yup.string().required(),
  surname: Yup.string().required(),
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  // phoneNumber: Yup.string()
  //   .required()
  //   .matches(/^[0-9]{10}$/, "Telefon numarası 10 karakter olmalıdır!"),
  // accept: Yup.boolean().isTrue("").required(),
});

export const AuthForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().required(),
});

export const AuthResetPasswordSchema = Yup.object().shape({
  username: Yup.string().required(),
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
