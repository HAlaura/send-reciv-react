import React from 'react';
import '../styles/waredview.css';
import samplePdf from './samplePdf/sample.pdf';
 import { Link } from "react-router-dom";


function WaredView() {
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
                        
                    <h1>PDF Viewer</h1>
                    <iframe
                     src={samplePdf} // Ensure the PDF is in the public folder
                    style={{ width: '100%', height: '600px' }}
                    title="PDF Viewer"
                    frameBorder="0"
                    />
                    </div>
                </td>
                <td width="100%"className="container-color" >
            <form className="form" >
                <div  className=" wa">
                    <label>الوارد</label>
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
                            <button> <Link to="#">الوارد</Link>
                            </button>
                        </li>
                        <li>
                        {/* <button onClick={handleClick}>
                        الصادرد
                            </button> */}
                            <button> <Link to="/saderview">الصادر</Link>
                            </button>
                            
                            </li>
                        <li>
                        <button  >
                        <Link to="#">الارشفة</Link>
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

export default WaredView;
