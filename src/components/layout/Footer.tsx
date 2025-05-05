import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()} &copy;DV product</p>
    </footer>
  );
};

export default Footer;
