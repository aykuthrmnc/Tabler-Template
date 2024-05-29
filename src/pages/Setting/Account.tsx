import { Button, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TbCheck, TbUser } from "react-icons/tb";
import FormInput from "~/components/Custom/FormInput";

const Account = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();


  const submit = async (values: any) => {
    console.log(values);
    // await updateUserProfile({
    //   Name: values.name,
    //   Surname: values.surname,
    //   Email: values.email,
    //   Address: values.address,
    //   Detail: values.description,
    //   UserTypeId: 1,
    // })
    //   .then((res: any) => {
    //     toast.success(res.data.message || `Kullanıcı bilgileri güncellendi.`);
    //   })
    //   .catch(() => {
    //     toast.error(`Kullanıcı bilgileri güncellenemedi.`);
    //   });
  };

  // useEffect(() => {
  //   getUser({});
  // }, []);

  // useEffect(() => {
  //   if (user) {
  //     reset({
  //       name: user.Name,
  //       surname: user.Surname,
  //       email: user.Email,
  //       address: user.Address,
  //       description: user.Detail,
  //       createTime: user.CreateTime,
  //       updateTime: user.UpdateTime,
  //       passwordUpdateTime: user.LastPassUpdateTime,
  //     });
  //   }
  // }, [user]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="card-stamp card-stamp-lg">
        <div className="card-stamp-icon bg-primary">
          <TbUser className="icon" />
        </div>
      </div>
      <Card.Body>
        <h2 className="mb-4">Hesabım</h2>
        {/* <Card.Title as="h3">Profil Detayları</Card.Title>
        <Row className="align-items-center">
          <Col xs="auto">
            <span
              className="avatar avatar-xl"
              style={{
                backgroundImage: "url(/src/assets/static/avatars/013m.jpg)",
              }}
            />
          </Col>
          <Col xs="auto">
            <Button variant="">Fotoğrafı değiştir</Button>
          </Col>
          <Col xs="auto">
            <Button variant="ghost-danger">Fotoğrafı sil</Button>
          </Col>
        </Row> */}
        <Row xs="1" md="2" className="g-3 mt-4">
          <Col>
            <FormInput.Control name="name" label="İsim" classNameContainer="mb-3" required control={control} />
          </Col>
          <Col>
            <FormInput.Control name="surname" label="Soyisim" classNameContainer="mb-3" required control={control} />
          </Col>
          <Col>
            <FormInput.Control type="email" name="email" label="E-posta" classNameContainer="mb-3" required control={control} />
          </Col>
          <Col></Col>
          <Col>
            <FormInput.Control as="textarea" name="address" label="Adres" classNameContainer="mb-3" control={control} />
          </Col>
          <Col>
            <FormInput.Control as="textarea" name="description" label="Açıklama" classNameContainer="mb-3" control={control} />
          </Col>
        </Row>
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
export default Account;
