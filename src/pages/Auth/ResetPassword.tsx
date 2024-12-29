import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import FormInput from "~/components/Custom/FormInput";
import { useQueryParams } from "~/hooks";
import { AuthResetPasswordSchema } from "~/validation";

const ResetPassword = () => {
  const [code] = useQueryParams("code");
  // const [email] = useQueryParams("email");
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({ resolver: yupResolver(AuthResetPasswordSchema) });

  useEffect(() => {
    // if (!code) {
    //   navigate("/login");
    // }
    reset({
      code,
    });
  }, [code]);

  const submit = async (values: any) => {
    console.log(values);

    // await resetPasswordHandle({ VerifyCode: values.code, Email: values.email, Password: values.password, RePassword: values.repassword })
    //   .unwrap()
    //   .then(() => {
    //     toast.success("Şifreniz başarıyla değiştirildi. Giriş ekranına yönlendiriliyorsunuz.");

    //     setTimeout(() => {
    //       navigate("/login");
    //     }, 2000);
    //   })
    //   .catch((err) => {
    //     toast.error(err?.data?.message || "Şifre değiştirme işlemi başarısız.");
    //   });
  };
  return (
    <>
      <div className="text-center mb-4">
        <Link to="/login" className="navbar-brand navbar-brand-autodark">
          <img
            height={36}
            src={import.meta.env.VITE_APP_ICON}
            alt={import.meta.env.VITE_APP_NAME}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = import.meta.env.VITE_DEFAULT_IMAGE;
            }}
          />
        </Link>
      </div>
      <Card className="card-md">
        <Card.Body>
          <h2 className="text-center mb-4">Şifreyi Yenile</h2>
          <form onSubmit={handleSubmit(submit)} autoComplete="off">
            <FormInput.Control
              id="email"
              name="email"
              label="E-posta Adresi"
              placeholder="E-posta adresi girin"
              classNameContainer="mb-3"
              control={control}
            />
            <FormInput.Control
              type="password"
              id="password"
              name="password"
              label="Yeni şifre"
              placeholder="Yeni şifreyi girin"
              classNameContainer="mb-3"
              showPasswordButton
              control={control}
            />
            <FormInput.Control
              type="password"
              id="repassword"
              name="repassword"
              label="Yeni şifre onayla"
              placeholder="Yeni şifreyi tekrar girin"
              classNameContainer="mb-3"
              showPasswordButton
              control={control}
            />
            <Button type="submit" className="w-100 mt-4" disabled={isSubmitting}>
              Şifreyi Sıfırla
            </Button>
          </form>
        </Card.Body>
      </Card>
      <div className="text-center text-muted mt-3">
        <Link to="/login" tabIndex={-1}>
          Giriş yap
        </Link>{" "}
        ekranına geri dön
      </div>
    </>
  );
};
export default ResetPassword;
