// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       {/* <h2>نظام الصادر والوارد</h2> */}
//       <ul>
//         <li><Link to="/create">إنشاء صادر</Link></li>
//         <li><Link to="/datatable">عرض بيانات الصادر</Link></li>
//         <li><Link to="/archive">عرض ارشفة الصادر</Link></li>
        
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
//2
// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   const location = useLocation(); // الحصول على الموقع الحالي

//   return (
//     <div className="sidebar">
//       <ul>
//         <li>
//           <Link to="/create" className={location.pathname === '/create' ? 'active' : ''}>
//             إنشاء صادر
//           </Link>
//         </li>
//         <li>
//           <Link to="/datatable" className={location.pathname === '/datatable' ? 'active' : ''}>
//             عرض بيانات الصادر
//           </Link>
//         </li>
//         <li>
//           <Link to="/archive" className={location.pathname === '/archive' ? 'active' : ''}>
//             عرض ارشفة الصادر
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation(); // الحصول على الموقع الحالي

   // دالة للتحقق من تفعيل الرابط بناءً على المسار
   const isActive = (path) => {
    return location.pathname.startsWith(path);
  };
  // const isActive = (path) => {
  //   return location.pathname === path || location.pathname.startsWith(path);
  // };
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/create" className={isActive('/create') ? 'active' : ''}>
            إنشاء صادر
          </Link>
        </li>
        <li>
        <Link to="/datatable" className={isActive('/datatable') || isActive('/record') || isActive('/edit')? 'active' : ''}>
            عرض بيانات الصادر
          </Link>
        </li>
        <li>
          <Link to="/archive" className={isActive('/archive') || isActive('/archive/') ? 'active' : ''}>
            عرض ارشفة الصادر
          </Link>
        </li>
        <li>
          <Link to="/wared" className={isActive('/wared') ? 'active' : ''}>
            إنشاء الوارد
          </Link>
        </li>
        <li>
          <Link to="/tabwared" className={isActive('/tabwared') ? 'active' : ''}>
            عرض بيانات الوارد
          </Link>
        </li>
        <li>
          {/* <Link to="/waredarchive" className={isActive('/waredarchive') ? 'active' : ''}>
            إرشفة الوارد
          </Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

