import FormInput from "~/components/Custom/FormInput";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthLoginSchema } from "~/validation";
import { Button, Card, Col, Row } from "react-bootstrap";
import { loginUserHandle } from "~/utils/storeHandle";
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb";

const Login = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(AuthLoginSchema) });

  // API
  // const [login] = useLoginMutation();

  const submit = async (values: any) => {
    loginUserHandle(values);
    // await login({ email: values.email, password: values.password })
    //   .unwrap()
    //   .then((res) => {
    //     loginUserHandle(res);
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
          <h2 className="text-center mb-4">Hesabınıza giriş yapın</h2>
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
              label={
                <>
                  Şifre
                  <span className="form-label-description">
                    <Link to="/forgot-password">Şifremi Unuttum</Link>
                  </span>
                </>
              }
              placeholder="Şifre girin"
              classNameContainer="mb-3"
              showPasswordButton
              control={control}
            />
            <FormInput.Check
              id="rememberMe"
              name="rememberMe"
              title="Beni Hatırla"
              classNameContainer="mb-3"
              register={register}
              errors={errors}
            />

            <Button type="submit" className="w-100 mt-4" disabled={isSubmitting}>
              Giriş Yap
            </Button>
          </form>
        </Card.Body>
        <div className="hr-text">veya</div>
        <Card.Body>
          <Row>
            <Col>
              <Link to="#" className="btn w-100">
                <TbBrandGithub className="icon" />
                Github ile giriş yap
              </Link>
            </Col>
            <Col>
              <Link to="#" className="btn w-100">
                <TbBrandTwitter className="icon text-twitter" />
                Twitter ile giriş yap
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="text-center text-muted mt-3">
        Hesabınız yok mu?{" "}
        <Link to="/register" tabIndex={-1}>
          Kaydol
        </Link>
      </div>
      {/* {createPortal(
        <Link to="/admin/login" className="btn btn-primary position-absolute top-0 end-0 mt-3 me-3">
          Admin Girişi
        </Link>,
        document.body
      )} */}
    </>
  );
};
export default Login;
