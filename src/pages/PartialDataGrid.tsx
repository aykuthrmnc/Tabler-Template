import { Card, Container } from "react-bootstrap";
import DataGrid from "~/components/Custom/DataGrid/DataGridPartial2";
import jobs from "~/mock/jobs.json";

// interface Person {
//   id: number;
//   isim?: string;
//   yas?: number;
//   meslek: string | { value: string; label: string } | null;
//   email?: string;
//   telefon: string;
//   sehir: string;
//   ilce: string;
//   mahalle: string;
//   sokak: string;
//   postaKodu: string;
// }

const PartialDataGridPage = () => {
  // useEffect(() => {
  //   const listener = (e: ClipboardEvent) => {
  //     const clipboardData = e.clipboardData?.getData("text");

  //     // Excel'den kopyalanan veri genellikle tab ve yeni satır karakterleri içerir
  //     if (clipboardData && clipboardData.includes("\t") && clipboardData.includes("\r\n")) {
  //       const rows = clipboardData.split("\r\n")?.filter(Boolean);
  //       Swal.fire({
  //         title: "Kopyaladığınız verileri tablo üzerinde eklemek istiyor musunuz?",
  //         html: `<div class="d-flex flex-column gap-3">
  //                 <div>Bu işlem sonucunda kopyalanan veri uyumlu olmaması ihtimaline karşı verilerinizi tablo üzerinden güncelleyebilirsiniz.</div>
  //                 <div>Toplam Veri: ${rows?.length}</div>
  //                </div>`,
  //         customClass: { popup: "card" },
  //         showDenyButton: true,
  //         confirmButtonColor: "var(--tblr-primary)",
  //         confirmButtonText: "Ekle",
  //         denyButtonText: "İptal",
  //       }).then(async (result) => {
  //         if (result.isConfirmed) {
  //           const data = rows?.map((row: string) => {
  //             const val = row.split("\t");
  //             return {
  //               isim: val?.[0],
  //               soyisim: val?.[1],
  //               tcNumarasi: val?.[2],
  //               dogumTarihi: val?.[3] ? moment(val?.[3]).format("YYYY-MM-DD") : "",
  //               cinsiyet: cinsiyet_durumlari?.find((x) => x?.label === val?.[4]),
  //               askerlikDurumId: askerlik_durumlari?.find(
  //                 (x: { value: number; label: string }) => x?.label === val?.[5],
  //               ),
  //               egitimDurumId: egitim_durumlari?.find((x: { value: number; label: string }) => x?.label === val?.[6]),
  //               medeniDurum: medeni_durumlar?.find((x) => x?.label === val?.[7]),
  //               email: val?.[8],
  //               emailIs: val?.[9],
  //               telefon: val?.[10],
  //               telefonIs: val?.[11],
  //               iseBalamaTarihi: val?.[12] ? moment(val?.[12]).format("YYYY-MM-DD") : "",
  //             };
  //           });

  //           setValue("personeller", [...(watch("personeller") as any), ...data]);
  //         }
  //       });
  //     }
  //   };

  //   window.addEventListener("paste", listener);

  //   return () => window.removeEventListener("paste", listener);
  // }, []);

  return (
    <DataGrid
      columns={[
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
    >
      <div className="page-body">
        <Container fluid="xl">
          <Card>
            <Card.Header>
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 w-100">
                <Card.Title as="h3" className="flex-shrink-0">
                  PERSONEL EKLE
                </Card.Title>
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-end gap-2 w-100">
                  <DataGrid.CreateButton />
                </div>
              </div>
            </Card.Header>
            <div className="card-table">
              <DataGrid.Table />
            </div>
          </Card>
        </Container>
      </div>
    </DataGrid>
  );
};
export default PartialDataGridPage;
