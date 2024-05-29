import { Button, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TbBuilding, TbCheck } from "react-icons/tb";
import FormInput from "~/components/Custom/FormInput";

const Company = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();


  const submit = async (values: any) => {
    console.log(values);
    // await updateCompany({
    //   Name: values.name,
    //   Address: values.address,
    //   OwnerId: values.owner?.value,
    // })
    //   .then((res: any) => {
    //     toast.success(res.data.Message || `Şirket bilgileri güncellendi.`);
    //   })
    //   .catch(() => {
    //     toast.error(`Şirket bilgileri güncellenemedi.`);
    //   });
  };

  // useEffect(() => {
  //   if (company) {
  //     reset({
  //       name: company.Name,
  //       address: company.Address,
  //       owner: company.OwnerId ? { value: company.OwnerId, label: `${company.OwnerName} ${company.OwnerSurname}` } : null,
  //     });
  //   }
  // }, [company]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="card-stamp card-stamp-lg">
        <div className="card-stamp-icon bg-primary">
          <TbBuilding className="icon" />
        </div>
      </div>
      <Card.Body>
        <h2 className="mb-4">Şirket Bilgileri</h2>
        <Row xs="1" md="2" className="g-3 mt-4">
          <Col>
            <FormInput.Control name="name" label="Şirket İsmi" classNameContainer="mb-3" required control={control} />
          </Col>
          <Col>
            <FormInput.ReactSelectAsyncUrl
              name="owner"
              label="Şirket Sahibi"
              classNameContainer="mb-3"
              optionsUrl={() => "/user/get-users"}
              optionConfig={(search: any) => ({
                method: "POST",
                data: {
                  Page: 1,
                  PageSize: 10,
                  Terms: search,
                },
              })}
              getOptionValues={(e) => e?.Users.map((user: any) => ({ value: user?.Id, label: `${user?.Name} ${user?.Surname}` }))}
              required
              control={control}
            />
          </Col>
          <Col>
            <FormInput.Control as="textarea" name="address" label="Adres" classNameContainer="mb-3" control={control} />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="bg-transparent mt-auto">
        <Row className="g-2 align-items-center justify-content-end">
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
export default Company;
