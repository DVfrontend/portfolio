import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Мой сайт. Все права защищены.</p>
    </footer>
  );
};

export default Footer;
