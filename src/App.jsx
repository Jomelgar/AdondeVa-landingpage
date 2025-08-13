import React, { useState } from "react";
import { Layout } from "antd";
import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import Inicio from "./pages/Home";
import SobreNosotros from "./pages/AboutUs";
import Contactar from "./pages/Form";

const { Content } = Layout;

const App = () => {
  const [selectedSection, setSelectedSection] = useState("inicio");

  return (
    <Layout className="min-h-screen flex flex-col">
      <HeaderBar onSelect={setSelectedSection} selectedKey={selectedSection} />
      <Content className="flex-grow bg-white">
        {selectedSection === "inicio" && <Inicio />}
        {selectedSection === "sobre-nosotros" && <SobreNosotros />}
        {selectedSection === "contactar" && <Contactar />}
      </Content>
      <FooterBar />
    </Layout>
  );
};

export default App;
