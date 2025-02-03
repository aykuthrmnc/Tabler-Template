import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { TbEdit } from "react-icons/tb";
import { useNavigate } from "react-router";
import Table from "~/components/Custom/Table";
import people from "~/mock/people.json";

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

const TablePage = () => {
  const navigate = useNavigate();
  const [tableValues, setTableValues] = useState<Person[]>([]);

  useEffect(() => {
    setTableValues(people);
  }, []);

  return (
    <div className="page-body">
      <Container fluid="xl">
        <Row className="g-2">
          <Col>
            <Card>
              <Card.Body>
                <Table
                  title="Table"
                  className="table-bordered"
                  head={[
                    { key: "isim", name: "İsim", sortable: true },
                    { key: "yas", name: "Yaş", sortable: true, valueGetter: (e) => `${e.yas} yaşında` },
                    { key: "meslek", name: "Meslek", sortable: true },
                    { key: "email", name: "E-posta" },
                    { key: "telefon", name: "Telefon" },
                    { key: "sehir", name: "Şehir", sortable: true },
                  ]}
                  searchable
                  customFields={[
                    {
                      header: "Düzenle",
                      icon: <TbEdit className="icon" />,
                      onClick: (e: Person) => {
                        navigate(`/person/${e.id}`);
                      },
                    },
                  ]}
                  body={tableValues.slice(0, 10)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TablePage;
