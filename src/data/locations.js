export const locations = [
  {
    name: "Sede Principal",
    address: "8va. Calle 15-16 A Zona 3, Quetzaltenango", // ← CAMBIA AQUÍ
    phone: "+502 30404846", // ← CAMBIA AQUÍ
    hours: "Lunes a Viernes: 8:00 - 17:00",
    // ↓ PEGA AQUÍ la URL del iframe embed de Google Maps
    
    // Para obtenerla: Google Maps → tu ubicación → Compartir → Insertar mapa → copia solo la URL del src=""
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.0742262265131!2d-91.51888500779448!3d14.848037937226698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858ea30039b3783d%3A0x4b24b7e9a58d6e5!2sCorporacion%20Larisa.%20S.A.!5e0!3m2!1ses-419!2sgt!4v1778777305759!5m2!1ses-419!2sgt",
    // ↓ PEGA AQUÍ la URL directa de Google Maps (para el botón "Cómo llegar")
    mapUrl: "https://maps.app.goo.gl/4ckn1NyNHXCuVssg6",
    // ↓ IMÁGENES de la sede para el carrusel.
    // Coloca tus fotos en /public/images/galeria/ y referencia las rutas aquí.
    // Si el array está vacío o las imágenes no existen, se muestra un placeholder.
    images: [
      "/images/galeria/lugar1.png",
      "/images/galeria/Lugar2.png",
      "/images/galeria/lugar3.png",
    ],
  },
  // Puedes agregar más sucursales copiando el bloque de arriba:
  // {
  //   name: "Sucursal Norte",
  //   address: "...",
  //   phone: "...",
  //   hours: "...",
  //   embedUrl: "",
  //   mapUrl: "",
  // },
];
