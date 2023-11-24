import { Section } from '../models/Section.class'
import codigo from '../assets/img/codigo.png'
import blog from '../assets/img/blog.png'
import juegos from '../assets/img/seta2.png'
import porfolio from '../assets/img/porfolio.png'
import utilidades from '../assets/img/utilidades.png'
import contacto from '../assets/img/contacto.png'
import about from '../assets/img/about.png'

export const sectionList = Object.freeze({
  auth: {
    register: new Section('Registro', '/registro', codigo, 'Registro'),
    login: new Section(
      'Login',
      '/login',
      codigo,
      'Acreditate'
    ),
    forgotPassword: new Section(
      'Recuperar contraseña',
      '/forgot-password',
      codigo,
      'Te enviaremos un correo con las instrucciones para recuperar tu contraseña.'
    ),
    resetPassword: new Section(
      'Resetear contraseña',
      '/forgot-password',
      codigo,
      'Escribe una nueva contraseña.'
    ),
    emailReset: new Section(
      'Email enviado',
      '/email-reset',
      codigo,
      'Se ha enviado un email para resetear su password.'
    ),
    emailActivation: new Section(
      'Email enviado',
      '/email-activation',
      codigo,
      'Se ha enviado un email para activar su cuenta.'
    ),
    acountActivated: new Section(
      'Cuenta activada',
      '/activar-cuenta',
      codigo,
      'Se ha enviado un email para activar su cuenta.'
    )
  },
  nav: {
    home: new Section('Alenta Dev', '/home', codigo, 'Alenta Dev'),
    blog: new Section(
      'Blog',
      '/blog',
      blog,
      'Blog para amigos y familiares para que nos cuentes cualquier cosa. Registrate y cuelga lo que te apetezca.'
    ),
    games: new Section(
      'Juegos',
      '/juegos',
      juegos,
      'Juegos divertidos remasterizados de ejercicios de programación. Puedes practicar tu agilidad con el teclado.'
    ),
    utils: new Section(
      'Utilidades',
      '/utilidades',
      porfolio,
      'Utilidades sorprendentes para tu día a día. Tales como una lista de la compra, una calculadora, etc...'
    ),
    porfolio: new Section(
      'Porfolio',
      '/porfolio',
      utilidades,
      'Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundo tecnológico.'
    ),
    contact: new Section(
      'Contacto',
      '/contacto',
      contacto,
      'Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundo tecnológico.'
    ),
    about: new Section(
      'Sobre Nosotros',
      '/sobre-nosotros',
      about,
      'Mi porfolio para que conozcas mis trabajos y proyectos en este apasionante mundo tecnológico.'
    )
  },
  userPanel: {
    profile: new Section(
      'Perfil',
      '/usuario/perfil',
      about,
      'Perfil del usuario.'
    )
  }
})
