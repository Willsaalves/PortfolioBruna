import React from "react";
import { content } from "../Content";

const AboutMarcela = () => {
  const { AboutMarcela } = content;

  return (
    <section id="aboutMarcela" className="bg-first_color">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {AboutMarcela.title}
        </h2>

        <br />
        <div className="flex flex-col-reverse md:flex-row items-center mb-8">
          {/* Image div with responsive classes */}
          <img
            src={AboutMarcela.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:w-80 object-cover mx-auto mb-5 md:mr-5 rounded-full max-w-full"
          />

          {/* Information div */}
          <div
            className="bg-bg_ligth_third p-10 mb-3 mx-auto shadow-sm rounded-xl w-full md:mb-8"
          >
            <h6 className="my-3 text-dark_primary">{AboutMarcela.subtitle}</h6>

            {/* Paragraphs */}
            {AboutMarcela.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-2 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMarcela;
