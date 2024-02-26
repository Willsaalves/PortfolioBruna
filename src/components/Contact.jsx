import React from "react";
import { createElement, useRef } from "react";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);

    // Envia o e-mail com os dados do formulário
    emailjs
      .sendForm(
        'GmailService',
        'template_nlt2fgf',
        e.target,
        'e0UpOMZ-2s4eYbku4'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Limpa todos os valores dos campos de input
          form.current.reset();
          // Mensagem de sucesso
          toast.success(
            "Email enviado com sucesso! Entrarei em contato em até uma hora!"
          );
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-white" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {Contact.title}
        </h2>

        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            id="myForm"
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="assunto"  // New field for the subject
              placeholder="Assunto"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="text"
              name="enviada_por_name"
              placeholder="Nome"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="email_usuario"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              style={{ borderColor: '#ccb6cc' }}
              className="btn self-start bg-white text-dark_primary"
              type="submit"
            >
              Enviar
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">
                  <a
                    className="hover-link"
                    href={content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {createElement(content.icon, { style: { color: '#e8e1e2' } })}
                  </a>
                </h4>
                <a
                  className="font-Poppins"
                  href={content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
