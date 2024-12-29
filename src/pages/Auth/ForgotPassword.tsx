import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import FormInput from "~/components/Custom/FormInput";
import { AuthForgotPasswordSchema } from "~/validation";

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ resolver: yupResolver(AuthForgotPasswordSchema) });

  const submit = async (values: any) => {
    console.log(values);
    // await forgotPasswordHandle({ Email: values.email })
    //   .unwrap()
    //   .then((res) => {
    //     toast.success(res?.data || "E-posta adresine doğrulama kodu gönderildi.");
    //   })
    //   .catch((err) => {
    //     toast.error(err?.data?.message || "Kullanıcı bilgilerini kontrol ediniz.");
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
          <h2 className="text-center mb-4">Şifremi Unuttum</h2>
          <form onSubmit={handleSubmit(submit)} autoComplete="off">
            <p className="text-muted mb-4">
              E-posta adresinizi girdikten sonra, doğrulama kodu e-posta adresinize gönderilecektir.
            </p>
            <FormInput.Control
              id="email"
              name="email"
              label="E-posta Adresi"
              placeholder="E-posta adresi girin"
              classNameContainer="mb-3"
              control={control}
            />
            <Button type="submit" className="w-100 mt-4" disabled={isSubmitting}>
              Doğrulama Kodu Gönder
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
export default ForgotPassword;
