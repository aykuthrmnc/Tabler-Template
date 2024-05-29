import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TbCheck, TbKey } from "react-icons/tb";
import FormInput from "~/components/Custom/FormInput";
import { UserChangePasswordSchema } from "~/validation";

const ChangePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(UserChangePasswordSchema),
  });

  const submit = async (values: any) => {
    console.log(values);
    // await changeProfilePassword({ Password: values.password, RePassword: values.repassword })
    //   .then((res: any) => {
    //     toast.success(res.data.message || `Şifre değiştirme başarılı.`);
    //     reset({ password: "", repassword: "" });
    //   })
    //   .catch(() => {
    //     toast.error(`Şifre değiştirme başarısız.`);
    //   });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="card-stamp card-stamp-lg">
        <div className="card-stamp-icon bg-primary">
          <TbKey className="icon" />
        </div>
      </div>
      <Card.Body>
        <h2 className="mb-4">Şifreyi Değiştir</h2>
        <Row xs="1" md="2" className="g-3 my-4">
          <Col>
            <FormInput.Control
              type="password"
              name="password"
              label="Şifre"
              classNameContainer="mb-3"
              required
              showPasswordButton
              control={control}
            />
          </Col>
          <Col>
            <FormInput.Control
              type="password"
              name="repassword"
              label="Şifre (Tekrar)"
              classNameContainer="mb-3"
              required
              showPasswordButton
              control={control}
            />
          </Col>
        </Row>
        <Card.Title as="h3">Şifre Gereklilikleri</Card.Title>
        <Card.Subtitle as="div">
          <p className="text-muted">Bu gerekliliklerin sağlandığından emin olun.</p>
          <ul>
            <li
              className={classNames({
                "text-danger": errors?.password?.type === "min" || errors?.repassword?.type === "min",
              })}
            >
              En az 8 karakter uzunluğunda olmalı
            </li>
            {/* <li>En az bir küçük harf olmalı</li>
            <li>En az bir büyük harf olmalı</li>
            <li>En az bir sayı, sembol veya boşluk karakteri olmalı</li> */}
          </ul>
        </Card.Subtitle>
        {/* <label className="form-check form-switch form-switch-lg">
          <input className="form-check-input" type="checkbox" />
          <span className="form-check-label form-check-label-on">You're currently visible</span>
          <span className="form-check-label form-check-label-off">You're currently invisible</span>
        </label> */}
      </Card.Body>
      <Card.Footer className="bg-transparent mt-auto">
        <Row className="g-2 align-items-center justify-content-end">
          {/* <Button variant="">İptal Et</Button> */}
          <Col xs="12" sm="auto">
            <Button type="submit" className="w-100" disabled={isSubmitting}>
              <TbCheck className="icon" />
              Kaydet
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </form>
  );
};
export default ChangePassword;
