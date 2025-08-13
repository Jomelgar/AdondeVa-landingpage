import React from "react";
import { InstagramOutlined, PhoneOutlined } from "@ant-design/icons";

const FooterBar = () => {
  return (
    <footer
      className="bg-[#0D2841] text-white px-6 py-6 select-none flex justify-end items-center"
      style={{ fontFamily: "'Anton', sans-serif" }}
    >
      <div className="text-right max-w-xs">
        <p className="text-lg font-bold mb-1 select-none">AdondeVa</p>
        <p className="text-[#FF710F] font-semibold mb-4 select-none">Muévete Inteligente</p>
        <p className="text-xs mb-2">San Pedro Sula, Honduras</p>

        <div className="flex justify-end items-center gap-6 text-white text-sm">
          <a
            href="https://www.instagram.com/tu_usuario_instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#FF710F] transition-colors"
            aria-label="Instagram"
          >
            <InstagramOutlined style={{ fontSize: 20 }} />
            @adondeva_hn
          </a>

          <a
            href="tel:+50412345678"
            className="flex items-center gap-2 hover:text-[#FF710F] transition-colors"
            aria-label="Teléfono"
          >
            <PhoneOutlined style={{ fontSize: 20 }} />
            +504 8818-9119
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
