import React, { useState } from "react";
import { Button, Menu, Drawer } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  MailOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const menuItems = [
  { key: "inicio", icon: <HomeOutlined />, label: "Inicio" },
  { key: "sobre-nosotros", icon: <InfoCircleOutlined />, label: "Sobre Nosotros" },
  { key: "contactar", icon: <MailOutlined />, label: "Contactar" },
];

const HeaderBar = ({ onSelect, selectedKey }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleClick = (e) => {
    onSelect(e.key);
    setDrawerVisible(false);
  };

  const renderMenuItems = (isMobile = false) =>
    menuItems.map(({ key, icon, label }) => ({
      key,
      icon,
      label: (
        <span
          className={`font-bold underline transition-colors duration-300 ${
            isMobile ? "text-white" : "text-white"
          } hover:text-black`}
        >
          {label}
        </span>
      ),
      style: {
        borderRadius: 8,
        marginRight: isMobile ? 0 : 16,
        margin: isMobile ? "8px 16px" : undefined,
      },
    }));

  return (
    <header className="bg-[#FF710F] text-white px-4 sm:px-8 py-3 flex items-center justify-between select-none shadow-md border-b border-[#0D2841]">
      {/* Logo */}
      <div
        className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#0D2841] shadow-md cursor-pointer"
        aria-label="Logo AdondeVa"
      >
        <img
          src="/logo_text.png"
          alt="Logo AdondeVa"
          className="w-10 h-10 sm:w-16 sm:h-16 object-contain rounded-full"
          draggable={false}
        />
      </div>

      {/* Título + slogan */}
      <div className="ml-4 flex flex-col justify-center select-text">
        <h1 className="text-2xl sm:text-3xl font-[Rubik Mono] font-extrabold tracking-tight text-white leading-none">
          AdondeVa
        </h1>
        <small className="text-[#0D2841] font-bold tracking-wide text-xs sm:text-sm select-none">
          Muevete Inteligente.
        </small>
      </div>

      {/* Botón menú móvil */}
      <Button
        type="text"
        icon={<MenuOutlined style={{ fontSize: 28, color: "white" }} />}
        onClick={() => setDrawerVisible(true)}
        aria-label="Abrir menú"
      />

      {/* Drawer menú móvil */}
      <Drawer
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        bodyStyle={{ backgroundColor: "#FF710F", padding: 0 }}
        headerStyle={{ backgroundColor: "#FF710F", borderBottom: "none" }}
        closeIcon={<MenuOutlined style={{ color: "white" }} />}
      >
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[selectedKey]}
          onClick={handleClick}
          items={renderMenuItems(true)}
          style={{ backgroundColor: "#FF710F", borderRight: "none" }}
          className="custom-menu"
        />
      </Drawer>

      {/* Estilos custom para seleccionado */}
      <style>{`
        .custom-menu .ant-menu-item-selected {
          background-color: rgba(13, 40, 65, 0.3) !important;
          border-radius: 8px;
        }
        .custom-menu .ant-menu-item-selected span {
          color: #0D2841 !important;
          font-weight: 600;
        }
        .ant-menu-horizontal > .ant-menu-item:hover {
          color: #0D2841 !important;
          background: transparent !important;
        }
        .ant-menu-horizontal > .ant-menu-item {
          transition: color 0.3s ease;
        }
      `}</style>
    </header>
  );
};

export default HeaderBar;
