import { content } from "../Content";
// ... (importações e código anterior)

import "../../src/index.css"; // Importe o seu arquivo de estilo

const Services = () => {
  const { services } = content;
  return (
    <section id="services" className="bg-white">
      <div className="md:container  px-5 py-14 ">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle " data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group ">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              style={{ borderColor: '#ccb6cc'}}
             
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-sm text-center bg-first_color p-6 flex-1 group-hover:drop-shadow-md hover:!drop-shadow-2xl">

              <img src={content.logo} alt="..." className="mx-auto" />
              <h6 className="my-3 text-dark_secondary  leading-5">{content.title}</h6>
              <p className="leading-5 ">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
