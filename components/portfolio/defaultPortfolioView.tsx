import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import useWindowSize from "./useWindowSize";

import "react-notion-x/src/styles.css";
import { useRouter } from "next/router";
import { getAllPagesInSpace } from "notion-utils";
import { defaultMapPageUrl } from "react-notion-x";
import { NotionAPI } from "notion-client";
import { Collection } from "react-notion-x/build/third-party/collection";
import { Modal } from "react-notion-x/build/third-party/modal";
import { NotionRenderer } from "react-notion-x";
import Image from "next/image";
import Link from "next/link";

// import { NotionAPI } from "notion-client";
// import notion from '@/modules/notion'
// import { NotionRenderer } from "react-notion-x";
import {ExtendedRecordMap} from 'notion-types';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Portfolio({recordMap}:{recordMap:ExtendedRecordMap}) {
    const windowSize = useWindowSize();
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  return (
    <div className="flex flex-wrap">
        <div className="max-w-4xl mx-auto mt-16 antialiased">
          <div className="container px-4 mx-auto">
          <NotionRenderer 
                recordMap={recordMap} 
                fullPage={true} 
                darkMode={false}
                components={{
                  Collection,
                  Modal,
                  nextImage: Image
                }}/>
                {/* <Document file="/pdf/Portfolio_default.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (_, index) => (
                        <Page
                        width={windowSize.width}
                        height={windowSize.height}
                        key={index}
                        pageNumber={index + 1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        />
                    ))}
                </Document> */}
            </div>
        </div>
    </div>
  );
};