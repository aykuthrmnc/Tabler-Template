import { useCallback, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useResizeObserver } from "@wojtekmaj/react-hooks";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};
const resizeObserverOptions = {};
const maxWidth = 800;

const PdfViewer = ({ file, t = (x: string) => x }: { file?: File | string; t?: ((x: string) => string) | any }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  return (
    <div ref={setContainerRef}>
      {/* {file && (
            <iframe src={file} title="PDF Viewer" width="100%" height="600px" style={{ border: "none" }}></iframe>
          )} */}
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        error={t("Belge Yüklenemedi.")}
        loading={t("Belge Yükleniyor.")}
        noData={t("PDF Dosyası Belirtilmedi.")}
        externalLinkTarget="_blank"
      >
        <Page
          pageNumber={pageNumber}
          width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
          error={t("Sayfa Yüklenemedi.")}
          loading={t("Sayfa Yükleniyor.")}
          noData={t("Sayfa Bulunamadı.")}
        />
        <div className="page-controls">
          <button type="button" disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)}>
            ‹
          </button>
          <span>
            {pageNumber} / {numPages}
          </span>
          <button type="button" disabled={pageNumber === numPages} onClick={() => setPageNumber(pageNumber + 1)}>
            ›
          </button>
        </div>
      </Document>
    </div>
  );
};

export default PdfViewer;

//! BLOB FILE SHOW IN NEW TAB
// window.open(URL.createObjectURL(res), "_blank");

//! BLOB FILE SHOW IN FANCYBOX
// new Fancybox([
//   {
//     src: URL.createObjectURL(res),
//     type: "pdf",
//   },
// ]);