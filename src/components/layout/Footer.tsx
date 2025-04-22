import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 text-center">
      <p>&copy;{new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()} DV portfolio. Все права защищены.</p>
      <p>Сайт находится в разработке. Контент и данные регулярно обновляются и дополняются. Следите за изменениями — впереди много нового!</p>
    </footer>
  );
};

export default Footer;
