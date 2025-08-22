// frontend/src/components/PdfViewer.tsx
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up the PDF.js worker. This is required by the library.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface Props {
  pdfUrl: string | null;
}

export default function PdfViewer({ pdfUrl }: Props) {
  if (!pdfUrl) {
    return (
      <div className="pdf-placeholder">
        <p>Click "Compile PDF" to see your resume here</p>
      </div>
    );
  }

  return (
    <div className="pdf-viewer">
      <Document file={pdfUrl}>
        <Page pageNumber={1} width={800} />
      </Document>
    </div>
  );
}
