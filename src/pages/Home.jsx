import React from "react";
import { Row, Col, Typography, Card } from "antd";
import FigmaPhone from "../components/Figma";

const { Title, Paragraph } = Typography;

const Inicio = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#f5f7fa]">
      {/* Círculos decorativos generales */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0D2841] rounded-full opacity-20 -translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF710F] rounded-full opacity-20 translate-x-1/3 translate-y-1/3 animate-pulse"></div>

      {/* Sección 1: Imagen + texto con fondo degradado azul suave */}
      <section className="relative z-10 py-16 px-6 bg-gray-300 shadow-inner overflow-hidden">
        {/* Círculos decorativos sección 1 */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#0D2841] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF710F] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-[#60a5fa] rounded-full opacity-15 animate-pulse"></div>

        <Row gutter={[32, 32]} align="middle" justify="center">
          <Col xs={24} md={12} className="flex justify-center">
            <img
              src="https://www.mercedes-benz-bus.com/content/dam/mbo/markets/common/brand/omnibus-magazin/highway-star-mercedes-benz-tourrider/images/content/om22-content-highway-star-mercedes-benz-tourrider-21.gif"
              alt="Bus"
              className="max-w-full rounded-lg shadow-lg"
            />
          </Col>

          <Col xs={24} md={12} className="relative z-20">
            <h1 className="font-extrabold text-2xl sm:text-5xl mb-5" style={{ color: "#0D2841" }}>
              Conectando pasajeros y transporte
            </h1>
            <Paragraph style={{ fontSize: "1.1rem" }}>
              Nuestra misión es <span className="font-bold">conectar firmemente a los pasajeros con su servicio de transporte y la comunidad</span> en sus rutas diarias.  
              Ofrecemos una plataforma donde podrás <span className="font-bold">descubrir, planificar y compartir tu experiencia de viaje</span>, garantizando <span className="font-bold">seguridad, puntualidad y comodidad</span>.
            </Paragraph>
          </Col>
        </Row>
      </section>

      {/* Sección 3: Prototipo con fondo degradado suave naranja */}
      <section className="relative z-10 py-12 flex flex-col items-center bg-gradient-to-t from-white via-[#fff3e0] to-[#fff8f0] rounded-t-3xl shadow-md overflow-hidden">
        {/* Círculos decorativos sección 3 */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#FF710F] rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FBBF24] rounded-full opacity-15 animate-pulse"></div>

        {/* Título */}
        <h2 className="relative z-20 mb-3 text-2xl sm:text-5xl text-center font-extrabold text-[#FF710F] drop-shadow-3sm select-none">
          Vista previa del producto
        </h2>

        {/* Texto descriptivo */}
        <p className="relative z-20 mb-8 max-w-xl mx-4 sm:mx-0 px-6 py-4 border-2 border-[#FF710F] rounded-2xl mt-5 text-center text-[#7a4e00] text-sm sm:text-base leading-relaxed font-medium shadow-sm select-text bg-gradient-to-r from-[#fff3e0] to-[#fff8f0]">
          Explora nuestro <span className="font-bold">prototipo móvil</span> para descubrir cómo los usuarios pueden <span className="font-bold">interactuar con la plataforma</span>.  
          Esta <span className="font-bold">vista previa</span> te permite <span className="font-bold">experimentar la interfaz de forma realista</span> y anticipar la <span className="font-bold">experiencia de uso final</span>.
        </p>

        <Card
          style={{
            border: "2px solid #FF710F",
            borderRadius: "12px",
            padding: "1rem",
            position: "relative",
            zIndex: 20,
          }}
          bodyStyle={{ padding: "1rem" }}
        >
          <FigmaPhone />
        </Card>
      </section>

      {/* Sección 2: Planes para empresas */}
      <section
        className="relative z-10 py-12 px-6 bg-gradient-to-r from-[#e0f2fe] via-[#bae6fd] to-[#e0f2fe] rounded-b-3xl shadow-md overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255, 113, 15, 0.05) 0%, transparent 60%)," +
            "radial-gradient(circle at 80% 80%, rgba(13, 40, 65, 0.05) 0%, transparent 60%)",
        }}
      >
        {/* Círculos decorativos sección 2 */}
        <div className="absolute top-10 left-10 w-36 h-36 bg-[#FF710F] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-48 h-48 bg-[#0000FF] rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-20 right-24 w-24 h-24 bg-blue-400 rounded-full opacity-5 animate-pulse"></div>

        <div className="text-center mb-12 relative z-20">
          <h1 className="font-extrabold text-2xl sm:text-4xl mb-5 text-gray-800">
            Nuestros planes para empresas
          </h1>
          <Paragraph style={{ fontSize: "1.1rem" }}>
            Adaptamos nuestros servicios a las necesidades de tu empresa.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} justify="center" align="stretch">
          {/* Plan 1 */}
          <Col xs={24} md={10} style={{ display: "flex" }}>
            <Card
              title="• Plan Pago Directo del Pasajero"
              bordered={false}
              style={{
                border: "2px solid #0D2841",
                borderRadius: "12px",
                backgroundColor: "#f0f8ff",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
              headStyle={{ color: "#0D2841", fontWeight: "bold" }}
            >
              <Paragraph className="text-base" style={{ flexGrow: 1 }}>
                En este plan, los pasajeros están <span className="font-bold">obligados a pagar su acceso al servicio de transporte directamente a través de nuestra plataforma</span>.
              </Paragraph>
              <Paragraph className="text-base">
                Ideal para <span className="font-bold">empresas que desean una administración sencilla y sin manejar cobros internos</span>.
              </Paragraph>
            </Card>
          </Col>

          {/* Plan 2 */}
          <Col xs={24} md={10} style={{ display: "flex" }}>
            <Card
              title="• Plan Empresa Patrocinadora"
              bordered={false}
              style={{
                border: "2px solid #FF710F",
                borderRadius: "12px",
                backgroundColor: "#fff8f3",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
              headStyle={{ color: "#FF710F", fontWeight: "bold" }}
            >
              <Paragraph className="text-base" style={{ flexGrow: 1 }}>
                En este plan, la empresa nos paga directamente y puede agregar a sus
                pasajeros mediante enlaces de invitación personalizados.
              </Paragraph>
              <Paragraph className="text-base">
                Perfecto para brindar un beneficio adicional a empleados, garantizando
                acceso sin preocuparse por pagos individuales.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Inicio;
