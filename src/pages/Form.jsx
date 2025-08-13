import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, InfoCircleOutlined } from "@ant-design/icons";
import emailjs from "@emailjs/browser";

const Contactar = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async(values) => {
    setLoading(true);

    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      from_phone: values.phone,
      message: values.message,
    };

    await emailjs
      .send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        message.success("¡Mensaje enviado correctamente!");
        setLoading(false);
      })
      .catch((error) => {
        message.error("Oops... hubo un error al enviar el mensaje.");
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#fff3e0] to-[#fefae0] flex justify-center pt-24 pb-12 px-4">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-[-20px] left-[-60px] w-40 h-40 bg-[#FF710F] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-70px] right-[-70px] w-48 h-48 bg-[#0D2841] rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-[200px] right-[200px] w-48 h-48 bg-blue-800 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-[200px] left-[200px] w-48 h-48 bg-[#0000FF] rounded-full opacity-10 animate-pulse"></div>

      <div className="relative z-10 max-w-xl w-full bg-white rounded-xl shadow-xl border border-orange-300 p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-[#FF710F] mb-6 text-center select-none">
          Contáctanos
        </h2>

        <Form
          name="contact"
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          autoComplete="off"
          className="w-full"
        >
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
          >
            <Input
              prefix={<UserOutlined className="text-[#FF710F]" />}
              placeholder="Tu nombre completo"
              size="large"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[
              { required: true, message: "Por favor ingresa tu correo" },
              { type: "email", message: "Ingresa un correo válido" },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-[#FF710F]" />}
              placeholder="ejemplo@correo.com"
              size="large"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            label="Número de teléfono"
            name="phone"
            rules={[
              { required: true, message: "Por favor ingresa tu número de teléfono" },
              { pattern: /^\+?\d{7,15}$/, message: "Ingresa un número válido" },
            ]}
          >
            <Input
              prefix={<PhoneOutlined className="text-[#FF710F]" />}
              placeholder="+504 1234 5678"
              size="large"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item
            label="Mensaje"
            name="message"
            rules={[{ required: true, message: "Por favor escribe un mensaje" }]}
          >
            <Input.TextArea
              rows={5}
              placeholder="Escribe tu mensaje aquí..."
              size="large"
              className="rounded-md"
            />
          </Form.Item>

          <Form.Item className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="bg-[#FF710F] border-[#FF710F] hover:bg-[#e86c0b] hover:border-[#e86c0b] font-semibold shadow-lg transition-colors w-full sm:w-auto"
              size="large"
            >
              Enviar Mensaje
            </Button>
          </Form.Item>
        </Form>

        {/* Mensaje informativo */}
        <div className="mt-6 p-4 bg-[#fff3e0] border-l-4 border-[#FF710F] rounded-md text-[#7a4e00] flex items-center gap-3 select-text">
          <InfoCircleOutlined className="text-[#FF710F] text-xl" />
          <p className="m-0 text-sm sm:text-base">
            Tu mensaje será enviado directamente a la cuenta del propietario para que pueda atender tu solicitud.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactar;
