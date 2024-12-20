// import React from 'react';
// import './Header.css';
// import log from '../aset/log.png'; // استبدل بالمسار الصحيح للصورة
// import user from '../aset/user.svg'; // استبدل بالمسار الصحيح للصورة

// const Header = ({ username }) => {
//   return (
//     <header className="header">
//       <img src={log} alt="Logo" className="logo" />
//       <h1 className="header-title">برنامج الصادر والوارد</h1>
//       <div className="user-info">
//         {/* يمكنك إضافة صورة المستخدم هنا إذا لزم الأمر */}
//         {/* <img src={userImage} alt="User" className="user-image" /> */}
//         <span className="user-name">مرحبًا{username}</span>
//       </div>
      
//       <img src={user} alt="Logo" className="user" />
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import './Header.css';
import log from '../aset/log.png'; // استبدل بالمسار الصحيح للصورة
import user from '../aset/user.svg'; // استبدل بالمسار الصحيح للصورة

const Header = () => {
  // استرجاع اسم المستخدم من الـ localStorage
  const username = localStorage.getItem('username');

  return (
    <header className="header">
      <img src={log} alt="Logo" className="logo" />
      <h1 className="header-title">برنامج الصادر والوارد</h1>
      <div className="user-info">
        {/* عرض اسم المستخدم إذا كان موجودًا */}
        <span className="user-name"> {username}</span>
      </div>
      <img src={user} alt="Logo" className="user" />
    </header>
  );
};

export default Header;

