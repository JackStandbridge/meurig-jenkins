import type { Language } from "@/types/language";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import { content } from "@/content/shortfilms";

import styles from "./pdf.module.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

export type PDFProps = {
  filePath: string;
  language: Language;
};

export const PDF = ({ filePath, language }: PDFProps): JSX.Element => {
  const [numPages, setNumPages] = useState<null | number>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [renderedPageNumber, setRenderedPageNumber] = useState<null | number>(
    null
  );

  const handleLoad = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  };

  const nextPage = (): void => {
    if (numPages) {
      setPageNumber(Math.min(pageNumber + 1, numPages));
    }
  };

  const prevPage = (): void => {
    setPageNumber(Math.max(pageNumber - 1, 1));
  };

  const isLoading = renderedPageNumber !== pageNumber;

  return (
    <div className={styles.wrapper}>
      <Document
        file={filePath}
        onLoadSuccess={handleLoad}
        className={styles.document}
      >
        {isLoading && renderedPageNumber ? (
          // What a faff. Keep the previous page around while loading the next
          // page in order to prevent flickering. Why this isn't the default is
          // beyond me
          <Page
            key={renderedPageNumber}
            pageNumber={renderedPageNumber}
            width={900}
            className={styles.previousPage}
          />
        ) : null}

        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          width={900}
          onRenderSuccess={(): void => setRenderedPageNumber(pageNumber)}
          className={styles.page}
          renderAnnotationLayer={false}
        />

        <button onClick={prevPage} className={styles.prev}>
          <span className="screenReader">{content[language].prevPage}</span>
        </button>

        <button onClick={nextPage} className={styles.next}>
          <span className="screenReader">{content[language].nextPage}</span>
        </button>
      </Document>
    </div>
  );
};
