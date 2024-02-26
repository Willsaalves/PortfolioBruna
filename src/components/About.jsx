import React from "react";
import { content } from "../Content";

const About = () => {
  const { About } = content;

  return (
    <section id="about" className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title mb-4" data-aos="fade-down">
          {About.title}
        </h2>

        <br />
        <div className="flex flex-col-reverse md:flex-row items-center mb-8">
          {/* Image div with responsive classes */}
          <img
            src={About.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-full md:max-w-sm md:w-80 object-cover mx-auto mb-5 md:mr-5 rounded"
          />

          {/* Information div */}
          <div
            className="bg-white p-10 mb-3 mx-auto shadow-sm rounded-xl w-full md:mb-8"
          >
            <h6 className="my-3 text-dark_primary">{About.subtitle}</h6>

            {/* Paragraphs */}
            {About.paragraphs.map((paragraph, index) => (
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

export default About;
