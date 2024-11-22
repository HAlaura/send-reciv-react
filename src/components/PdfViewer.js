// // PdfViewer.js
// import React from 'react';
// import './pdfviewer.css';

// const PdfViewer = ({ pdfUrl }) => {
//     return (
//         <div>
           
//             <iframe
//                 src={pdfUrl}
//                 style={{ width: '370px', height: '400px' }}
//                 title="PDF Viewer"
//                 frameBorder="0"
//             />
//         </div>
//     );
// };

// export default PdfViewer;

// import React from 'react';
// import './pdfviewer.css';

// const PdfViewer = ({ pdfUrl }) => {
//     return (
//         <div>
//             <embed
//                 src={pdfUrl}
//                 width="370px"
//                 height="400px"
//                 type="application/pdf"
//             />
//         </div>
//     );
// };

// export default PdfViewer;
import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
    const openPdf = () => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <div>
            <button onClick={openPdf}>فتح الملف PDF</button>
        </div>
    );
};

export default PdfViewer;


// import React, { useState } from 'react';

// const PdfViewer = ({ pdfUrl }) => {
//     const [isOpened, setIsOpened] = useState(false);

//     const openPdf = () => {
//         setIsOpened(true);  // عند الضغط على الزر، نقوم بتغيير الحالة لإظهار الـ iframe
//     };

//     return (
//         <div>
//             {!isOpened ? (
//                 <button onClick={openPdf}>فتح الملف PDF</button> // زر لفتح الـ PDF
//             ) : (
//                 <iframe
//                     src={pdfUrl}
//                     style={{ width: '100%', height: '400px' }}
//                     title="PDF Viewer"
//                     frameBorder="0"
//                 />
//             )}
//         </div>
//     );
// };

// export default PdfViewer;
// const PdfViewer = ({ pdfBase64 }) => {
//     return (
//         <div>
//             <iframe
//                 src={`data:application/pdf;base64,${pdfBase64}`}
//                 style={{ width: '100%', height: '400px' }}
//                 title="PDF Viewer"
//                 frameBorder="0"
//             />
//         </div>
//     );
// };
// export default PdfViewer;