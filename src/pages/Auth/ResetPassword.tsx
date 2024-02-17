import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormInput from "~/components/Custom/FormInput";
import { AuthResetPasswordSchema } from "~/validation";
import LOGO from "~/assets/static/logo-small.svg";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(AuthResetPasswordSchema) });

  const submit = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div className="text-center mb-4">
        <Link to="/login" className="navbar-brand navbar-brand-autodark">
          <img
            src={LOGO}
            height={36}
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
          <form onSubmit={handleSubmit(submit)}>
            <FormInput.Control
              id="username"
              name="username"
              label="Kullanıcı Adı"
              placeholder="Kullanıcı adını girin"
              classNameContainer="mb-3"
              register={register}
              errors={errors}
            />
            <FormInput.Control
              type="password"
              id="password"
              name="password"
              label="Yeni şifre"
              placeholder="Yeni şifreyi girin"
              classNameContainer="mb-3"
              showPasswordButton
              register={register}
              errors={errors}
            />
            <FormInput.Control
              type="password"
              id="repassword"
              name="repassword"
              label="Yeni şifre onayla"
              placeholder="Yeni şifreyi tekrar girin"
              classNameContainer="mb-3"
              showPasswordButton
              register={register}
              errors={errors}
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
