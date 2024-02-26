import React from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  // Função para abrir o link do WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "+55 11 98773-2749"; // Substitua pelo seu número de telefone
    const message = "Olá! Estou interessado em seus serviços."; // Mensagem padrão
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute whiteSpace-nowrap top-[30%] right-[-15%] text-bg_pink_quart">
            {hero.firstName}{" "}
            <span className="text-dark_primary text-white">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h4 className="font-bold">{hero.title}</h4>
          <h5>{hero.subtitle}</h5>
          <br />
          <div className="flex justify-end">
            <button className="btn" onClick={openWhatsApp}>
              {hero.btnText}
            </button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
