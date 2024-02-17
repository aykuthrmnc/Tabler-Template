import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import FormInput from "~/components/Custom/FormInput";
import { AuthRegisterSchema } from "~/validation";
import LOGO from "~/assets/static/logo-small.svg";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AuthRegisterSchema) });

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
          <h2 className="text-center mb-4">Hesap oluşturun</h2>
          <form onSubmit={handleSubmit(submit)}>
            <FormInput.Control
              id="name"
              name="name"
              label="Ad"
              placeholder="Ad girin"
              classNameContainer="mb-3"
              register={register}
              errors={errors}
            />
            <FormInput.Control
              id="surname"
              name="surname"
              label="Soyad"
              placeholder="Soyad girin"
              classNameContainer="mb-3"
              register={register}
              errors={errors}
            />
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
              id="email"
              name="email"
              label="E-posta Adresi"
              placeholder="E-posta adresi girin"
              classNameContainer="mb-3"
              register={register}
              errors={errors}
            />
            <FormInput.Control
              type="password"
              id="password"
              name="password"
              label="Şifre"
              placeholder="Şifre girin"
              classNameContainer="mb-3"
              showPasswordButton
              register={register}
              errors={errors}
            />
            {/* <FormInput.Check
              id="accept"
              name="accept"
              title={
                <>
                  <Link to="/terms-of-service">Şartları</Link> kabul ediyorum.
                </>
              }
              classNameContainer="mb-3"
              register={register}
              errors={errors}
            /> */}

            <Button type="submit" className="w-100 mt-4">
              Hesap Oluştur
            </Button>
          </form>
        </Card.Body>
      </Card>

      <div className="text-center text-muted mt-3">
        Zaten hesabınız var mı?{" "}
        <Link to="/login" tabIndex={-1}>
          Giriş Yap
        </Link>
      </div>
    </>
  );
};
export default Register;
