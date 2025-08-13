import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const creadores = [
  "Josly Alvarez",
  "Osvaldo Acosta",
  "Keisy Castro",
  "David Reyes",
  "Johnny Melgar",
];

const SobreNosotros = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-100 to-[#0D2841] py-16 px-6 rounded-t-3xl shadow-xl overflow-hidden">
      {/* Decoraciones de fondo */}
      <div className="absolute top-[-60px] left-[-60px] w-40 h-40 bg-[#FF710F] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-70px] right-[-70px] w-48 h-48 bg-[#0D2841] rounded-full opacity-10 animate-pulse"></div>

      <h2 className="relative z-10 text-4xl font-extrabold mb-12 text-center text-[#0D2841] drop-shadow-md select-none">
        Sobre <span className="text-[#FF710F]">Nosotros</span>
      </h2>

      <div style={{ maxWidth: 1200, margin: "0 auto" }} className="relative z-10">
        <Row gutter={[32, 32]} justify="center">
          {creadores.map((nombre, i) => (
            <Col
              key={i}
              xs={12}  // 2 por fila móvil
              sm={12}  // 2 por fila tablet
              md={8}   // 3 por fila escritorio
              style={{ display: "flex", justifyContent: "center" }} // centra la card en la columna
            >
              <div
                className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-lg border-2 border-[#FF710F] 
                hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-default"
                style={{ maxWidth: 320, width: "100%" }} // max ancho para la card
              >
                <div
                  className="flex items-center justify-center w-20 h-20 rounded-full 
                  bg-gradient-to-tr from-[#FF710F] to-[#0D2841] text-white text-4xl drop-shadow-lg"
                >
                  <UserOutlined />
                </div>
                <p className="mt-6 text-xl text-center font-semibold text-[#0D2841]">{nombre}</p>
                <p className="mt-3 text-center text-gray-600 text-sm leading-relaxed">
                  Co-fundador de la idea y apasionado por la innovación.
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default SobreNosotros;
