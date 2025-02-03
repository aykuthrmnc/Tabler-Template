import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router";
import FormInput from "~/components/Custom/FormInput";
import people from "~/mock/people.json";
import jobs from "~/mock/jobs.json";
import { PersonSchema } from "~/validation";
import { useEffect } from "react";
import Swal from "sweetalert2";

interface Person {
  id: number;
  isim: string;
  yas: number;
  meslek: string;
  email: string;
  telefon: string;
  sehir: string;
  ilce: string;
  mahalle: string;
  sokak: string;
  postaKodu: string;
}

const Person = () => {
  const { id } = useParams();
  const person = people?.find((e) => e.id === +id!);

  const { control, reset, handleSubmit } = useForm({
    resolver: yupResolver(PersonSchema),
  });

  const submit = (values: any) => {
    console.log(values);

    Swal.fire({
      icon: "success",
      title: "BAŞARILI",
      html: "Kullanıcı başarıyla düzenlendi.",
      customClass: { popup: "card" },
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    if (person) {
      reset({ ...person, meslek: person.meslek ? { label: person.meslek, value: person.meslek } : null });
    }
  }, [person]);

  return (
    <div className="page-body">
      <Container fluid="xl">
        <form onSubmit={handleSubmit(submit)}>
          <Card>
            <Card.Header>Kullanıcıyı Düzenle</Card.Header>
            <Card.Body>
              <Row xs="1" md="2" lg="3">
                <Col>
                  <FormInput.Control
                    id="isim"
                    name="isim"
                    placeholder="İsim Soyisim"
                    label="İsim Soyisim"
                    classNameContainer="mb-3"
                    required
                    control={control}
                  />
                </Col>
                <Col>
                  <FormInput.Control
                    id="email"
                    name="email"
                    placeholder="E-posta"
                    label="E-posta"
                    classNameContainer="mb-3"
                    required
                    control={control}
                  />
                </Col>
                <Col>
                  <FormInput.PatternFormat
                    id="yas"
                    name="yas"
                    placeholder="Yaş"
                    label="Yaş"
                    classNameContainer="mb-3"
                    format="##"
                    required
                    control={control}
                  />
                </Col>
                <Col>
                  <FormInput.ReactSelect
                    id="meslek"
                    name="meslek"
                    placeholder="Meslek"
                    label="Meslek"
                    classNameContainer="mb-3"
                    options={jobs}
                    control={control}
                  />
                </Col>
                <Col>
                  <FormInput.PhoneInput
                    id="telefon"
                    name="telefon"
                    placeholder="Telefon"
                    label="Telefon"
                    classNameContainer="mb-3"
                    control={control}
                  />
                </Col>
                <Col>
                  <FormInput.Control
                    id="sehir"
                    name="sehir"
                    placeholder="Şehir"
                    label="Şehir"
                    classNameContainer="mb-3"
                    control={control}
                  />
                </Col>
                <Col>
                  <FormInput.Control
                    id="ilce"
                    name="ilce"
                    placeholder="İlçe"
                    label="İlçe"
                    classNameContainer="mb-3"
                    control={control}
                  />
                </Col>
                <Col>
                  <FormInput.Control
                    id="mahalle"
                    name="mahalle"
                    placeholder="Mahalle"
                    label="Mahalle"
                    classNameContainer="mb-3"
                    control={control}
                  />
                </Col>
                <Col>
                  <FormInput.Control
                    id="sokak"
                    name="sokak"
                    placeholder="Sokak"
                    label="Sokak"
                    classNameContainer="mb-3"
                    control={control}
                  />
                </Col>
                <Col>
                  <FormInput.NumericFormat
                    id="postaKodu"
                    name="postaKodu"
                    placeholder="Posta Kodu"
                    label="Posta Kodu"
                    classNameContainer="mb-3"
                    allowNegative={false}
                    control={control}
                  />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-end gap-3">
              <Link to="/" className="btn btn-danger">
                Vazgeç
              </Link>
              <Button type="submit">Kaydet</Button>
            </Card.Footer>
          </Card>
        </form>
      </Container>
    </div>
  );
};
export default Person;
