import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "~/components/Custom/FormInput";
import { useRegisterMutation } from "~/store/apiSlice";
import { AuthRegisterSchema } from "~/validation";

const Register = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({ resolver: yupResolver(AuthRegisterSchema) });

  // API
  const [registerHandle] = useRegisterMutation();

  const submit = async (values: any) => {
    await registerHandle({
      email: values.email,
      name: values.name,
      password: values.password,
    })
      .unwrap()
      .then(() => {
        toast.success("Kullanıcı kaydı başarılı. Giriş sayfasına yönlendiriliyorsunuz.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        toast.error(err.data?.message || "Kullanıcı kaydı başarısız.");
      });
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
          <h2 className="text-center mb-4">Hesap oluşturun</h2>
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
              id="name"
              name="name"
              label="İsim"
              placeholder="İsim girin"
              classNameContainer="mb-3"
              control={control}
            />
            <FormInput.Control
              type="password"
              id="password"
              name="password"
              label="Şifre"
              placeholder="Şifre girin"
              classNameContainer="mb-3"
              showPasswordButton
              control={control}
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
              control={control}
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
