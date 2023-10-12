import React from "react"
import { fondoClaro } from "../UI/variables";
import {Typography} from "@mui/material";
import { colorSecundario } from "../UI/variables";
import {Stack} from "@mui/material";
import { Fade } from "react-reveal";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import TitleText from "../TitleText/TitleText";


export default function About (){


      return ( <>

        <TitleText title="CAPAMET" description="Es un centro de entrenamiento especializado en la formación de paramédicos 
            dedicados al ámbito industrial y de Protección Civil. Nos dedicamos a proporcionar una educación de calidad en el campo de la atención médica de emergencia. 
            Con años de experiencia en la industria, nuestro equipo de instructores altamente capacitados está comprometido a brindar a 
            nuestros estudiantes las herramientas y habilidades necesarias para salvar vidas en situaciones críticas. 
            Ofrecemos una variedad de cursos diseñados para satisfacer las necesidades individuales de cada estudiante.

            ¡Únete a nuestra comunidad de aprendizaje hoy mismo y haz una diferencia en el mundo!"/>
        <ParallaxImage idImage={8}/>

        <TitleText title="Nosotros" description="CAPAMET es una empresa líder en Entrenamientos Paramédicos, Gestión Integral de Riesgo, Protección Civil 
            y Seguridad Industrial, dirigido a empresas y organizaciones chicas, medianas y grandes. 
            Nuestro equipo de instructores expertos, está dedicado a ayudar a minimizar riesgos y maximizar seguridad en los lugares de trabajo."/>
        <ParallaxImage idImage={6}/>
        
        <TitleText title="Visión" description="Ser una empresa líder y de excelencia brindando al cliente un servicio respetuoso, oportuno, 
            responsable, con calidad y calidez, trabajando arduamente para crecer y servir  con la misma honestidad 
             integridad que profesamos con la familia."/>
        <ParallaxImage idImage={5}/>

        <TitleText title="Misión" description="Seguir siendo una extensión de vida, poder difundir tanto a las empresas como a la población a 
            lo largo de todo el territorio nacional la cultura de la prevención de riesgo en materia de Seguridad 
            Industrial y Protección Civil para hacer mas placentera la estancia en nuestros hogares y centros de trabajo."/>



        </>
      );
    };