// Carrusel de imágenes del Hero.
// Agrega tus imágenes en /public/images/hero/ y referencia aquí.
// Si una imagen no existe, se muestra el logo como fallback.

export const heroSlides = [
  {
    image: "/images/hero/slide-1.png",
    title: "Equipos de diagnóstico",
    subtitle: "Tecnología de vanguardia",
  },
  {
    image: "/images/hero/slide-2.png",
    title: "Insumos médicos",
    subtitle: "Calidad certificada",
  },
  {
    image: "/images/hero/slide-3.png",
    title: "Soporte especializado",
    subtitle: "Acompañamiento continuo",
  },
  {
    image: "/images/hero/slide-4.png",
    title: "Equipamiento hospitalario",
    subtitle: "Soluciones integrales",
  },
];

// Tiempo entre cada slide (en milisegundos)
export const heroSlideInterval = 4000;
