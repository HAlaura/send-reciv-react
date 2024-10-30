// PdfViewer.js
import React from 'react';
import './pdfviewer.css';

const PdfViewer = ({ pdfUrl }) => {
    return (
        <div>
           
            <iframe
                src={pdfUrl}
                style={{ width: '370px', height: '400px' }}
                title="PDF Viewer"
                frameBorder="0"
            />
        </div>
    );
};

export default PdfViewer;

