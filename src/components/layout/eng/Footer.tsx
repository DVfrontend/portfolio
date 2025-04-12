import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>&copy;{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()} DV portfolio. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
