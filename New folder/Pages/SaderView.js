import React from 'react';
import '../styles/waredview.css';
import PdfViewer from './PdfViewer';
// import { pdfjs } from 'react-pdf';
//  import samplePdf from '../samplePdf/sample.pdf'; 
// import { PDFViewer } from '@react-pdf/renderer';
//  import MyDocument from './PdfViewer';
 import { Link } from "react-router-dom";
function SaderView() {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div className="container">
            <div className="header">
                <div >
                    <h1 className="topbar">نظام الصادر و الوارد</h1>
                </div>
            </div>
            <table>
                <td>
                    <div className="edit">
                        <label >تعديل</label>
                    </div>
                    <div className="remov">
                        <label >حذف</label>
                    </div>

                    <div className="pdf">
                    {/* <PdfViewer file={samplePdf}/> */}
                    <PdfViewer/>
    {/* <MyDocument />
  </PDFViewer> */}

                    </div>
                </td>
                <td width="100%"className="container-color" >
            <form className="form" >
                <div  className=" wa">
                    <label>الصادر</label>
                </div>
                <div className=" view">
                    <label>سري</label>
                    
                </div>
                <div className=" view">
                    <label>المرسل :</label>
                    <label className="position">الامانة العامة لمجلس الوزراء</label>
                </div>
                <div className=" view">
                    <label >الموضوع :</label>
                    <label className="position">  المشروع الحكومي</label>
                </div>
                <div className=" view">
                    <label>العدد :</label>
                    <label className="position">6778</label>
                </div>
                <div className=" view">
                    <label>التاريخ :</label>
                    <label className="position">2024/10/10</label>
                </div>
                <div className="custom-hr ">
                    
                </div>
                <div>
                <button onClick={handleClick} className="previse">
                <Link to="/">الرجوع</Link>
                 
                            </button>
                </div>
            </form>
            
            </td>
            <td>
            <div className="sidebar">
                <div className="navbar">
      
                    <ul>
                        <li>
                            {/* <button onClick={handleClick} >
                                الوارد
                            </button> */}
                            <button> <Link to="/waredview">الوارد</Link>
                            </button>
                        </li>
                        <li>
                        <button> <Link to="/saderpage">اضافة الصادر</Link>
                        </button>
                            
                            </li>
                        <li>
                        <button  >
                        <Link to="/saderinput">انشاء صادر</Link>
                    
                            </button>
                            </li>
                    </ul>
                </div>
            </div>
            </td>
            
            </table>
        </div>
    );
}

export default SaderView;
