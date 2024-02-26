// import images
import Hero_person from "./assets/images/Hero/person.png";
import Hero_person2 from "./assets/images/Hero/person2.png";

import insigths1 from "./assets/images/Skills/Insigths1.jpeg";
import insigths2 from "./assets/images/Skills/Insigths2.jpeg";
import insigths3 from "./assets/images/Skills/Insigths3.jpeg";
import insigths4 from "./assets/images/Skills/Insigths4.jpeg";
import insigths5 from "./assets/images/Skills/Insigths5.jpeg";
import insigths6 from "./assets/images/Skills/Insigths6.jpeg";
import insigths7 from "./assets/images/Skills/Insigths7.jpeg";
import insigths8 from "./assets/images/Skills/Insigths8.jpeg";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo4 from "./assets/images/Services/logo4.png";


import project1 from "./assets/images/Projects/img1.png";

import person_baby from "./assets/images/Projects/person.png"
import person_us from "./assets/images/Projects/nos.jpeg";




// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import {  BiUser, BiUserCircle, BiWorld } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
 
    {
      link: "#about",
      icon: BiUser,
    },
    {
      link: "#aboutMarcela",
      icon: BiUserCircle,
    },
    {
      link: "#insights",
      icon: BiWorld,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Microinfluenciadora",
    subtitle:"UGC Creator Maternidade",
    firstName: "Bruna",
    LastName: "Galozzi",
    btnText: "Contrate",
    image: Hero_person,
    hero_content: [
      {
        count: "",
        text: "",
      },
      {
        count: "",
        text: "",
      },
    ],
  },
  Insights: {
    title: "Insights",
    subtitle: "Meus Resultados",
    insights_content: [
      {
      
        logo: insigths1,
      },
      {
       
        
        logo: insigths2,
      },
      {
      
        
        logo: insigths3,
      },
      {
      
     
        logo: insigths4,
      },
      {
        
       
        logo: insigths5,
      },
      {
   
       
        logo: insigths6,
      },
      {

  
        logo: insigths7,
      },
      {
    
      
        logo: insigths8,
      },
    ],
    icon: MdArrowForward,
  },
  services: { 
    title: "Serviços",
    subtitle: "O que eu ofereço",
    service_content: [
      {
        title: "Criação de Conteúdo Personalizado:",
        para: "Desenvolver conteúdo exclusivo, como artigos, posts em blogs, e-books ou vídeos, que destaquem os produtos e serviços da loja de maneira informativa e envolvente",
        logo: services_logo1,
      },
      {
        title: "Promoção nas Redes Sociais",
        para: "Divulgar os produtos da loja em suas redes sociais, com destaque para fotos, vídeos ou histórias autênticas que gerem engajamento e interesse por parte da audiência",
        logo: services_logo2,
      },
    
      {
        title: "Descontos e Promoções Exclusivas",
        para: "Negociar descontos exclusivos para sua audiência, incentivando-os a comprar os produtos da loja utilizando códigos promocionais ou links específicos",
        logo: services_logo3,
      },
      {
        title: "Resenhas e Avaliações",
        para: "Oferecer resenhas e avaliações honestas sobre os produtos da loja, destacando os benefícios e experiências pessoais, o que pode ajudar a construir a confiança dos consumidores",
        logo: services_logo4,
      },

    ],
  },
  Projects: {
    title: "Parceiros",
    subtitle: "Nossos Parceiros",
    image: person_us,
    project_content: [
      {
        title: "Área do bebê",
        image: project1,
      },
    // {
    //     title: "Social Media web",
    //     image: project1,
    //   },
    //   {
    //     title: "Creative Website",
    //     image: project1,
    //   },
    ],
  },
  About: {
    title: "Sobre mim",
    subtitle: "Oi, eu sou a Bru! Como vai?",
    image1: Hero_person2,
    paragraphs: [
      `Sou publicitária, designer gráfico, social media, gravo, narro e edito os meus próprios vídeos. (Ah, e também fiz essa apresentação). Bastante coisa, né? Mas a verdade é que aos 23 anos eu conheci uma nova paixão: a maternidade.`,
      `Fiquei encantada pelo universo das descobertas maternas e transformei essa fase linda da minha vida em uma jornada de compartilhamento e aprendizado. Foi compartilhando o meu dia a dia que pude me conectar com pessoas reais, vivendo suas 'vidas reais, assim como eu! E foi então que eu me tornei uma UGC Creator. UGC significa conteúdo gerado pelo usuário.`,
      `Hoje em dia, as pessoas estão atrás de soluções reais para os seus problemas. Cada dia mais procuram autenticidade! Pessoas que sejam originais e envolventes. Isso significa que as estratégias de marketing utilizadas por grandes marcas, ou indicadas por influenciadores com milhões de seguidores não possuem mais o mesmo efeito. As pessoas sabem que esses influencidores estão sendo pagos em milhares de reais para dar uma resenha positiva, então preferem experiências reais.`,
    ],
  },
  
  AboutMarcela: {
    title: "Essa é a Marcela!",
    subtitle: "Mas você pode chamá-la de Mamá!",
    image1: person_baby,
    paragraphs: [
      `Uma bebezinha de 4 meses cheia de personalidade! Desde que a Mamá nasceu, juntas compartilhamos nossas descobertas sobre a vida.`,
      `Afinal, quando nos tornamos mães, não é mais sobre ensinar alguém sobre o mundo, mas sim sobre aprender a 'viver nele de uma forma nova.`,
      `E ela me ensina muito.`,
      `
      Juntas, prometemos compartilhar experiências reais para os clientes da sua marca.
      Razões para Considerar uma Parceria:
      Autenticidade e Credibilidade: Minha abordagem cria uma conexão autêntica com os seguidores, proporcionando uma base sólida para qualquer mensagem que compartilho.`,
    ],
  },
 

  Contact: {
    title: "Entre em contato",
    social_media: [
      {
        text: "brunagalozzip@gmail.com",
        icon: GrMail,
        link: "mailto:brunagalozzip@gmail.com",
      },
      {
        text: "+5511987732749",
        icon: BsWhatsapp,
        link: "https://wa.me/5511987732749",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/bgalozzi/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
