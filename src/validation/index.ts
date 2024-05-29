import Yup from "./validate";

//! AUTH
export const AuthLoginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
  // rememberMe: Yup.boolean(),
});

export const AuthRegisterSchema = Yup.object().shape({
  companyName: Yup.string().required(),
  userFullName: Yup.string().required(),
  surname: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  // repassword: Yup.string()
  //   .min(8)
  //   .oneOf([Yup.ref("password"), undefined], "Şifreler eşleşmiyor."),
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
  password: Yup.string().min(8).required(),
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
