import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import DataGrid from "~/components/Custom/DataGrid";
import people from "~/mock/people.json";
import jobs from "~/mock/jobs.json";

interface Person {
  id: number;
  isim?: string;
  yas?: number;
  meslek: string | { value: string; label: string } | null;
  email?: string;
  telefon: string;
  sehir: string;
  ilce: string;
  mahalle: string;
  sokak: string;
  postaKodu: string;
}

const DataGridPage = () => {
  const [tableValues, setTableValues] = useState<Person[]>([]);

  useEffect(() => {
    setTableValues(people?.map((e) => ({ ...e, meslek: e.meslek ? { label: e.meslek, value: e.meslek } : null })));
  }, []);

  return (
    <div className="page-body">
      <Container fluid="xl">
        <Row className="g-2">
          <Col>
            <Card>
              <Card.Body>
                <DataGrid
                  title="DataGrid"
                  head={[
                    {
                      key: "isim",
                      name: "İsim",
                      placeholder: "İsim",
                    },
                    {
                      key: "yas",
                      name: "Yaş",
                      type: "PatternFormat",
                      format: "## yaşında",
                      placeholder: "Yaş",
                    },
                    { key: "meslek", name: "Meslek", type: "ReactSelect", options: jobs },
                    { key: "email", name: "E-posta", placeholder: "E-posta" },
                    {
                      key: "telefon",
                      name: "Telefon",
                      placeholder: "Telefon",
                      type: "PhoneInput",
                    },
                    { key: "sehir", name: "Şehir", placeholder: "Şehir" },
                  ]}
                  searchable
                  creatable
                  body={tableValues.slice(0, 10)}
                  getValues={(e) => {
                    console.log(e);
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default DataGridPage;
