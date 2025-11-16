const corsOptions = {
  origin: "*", // Indicamos que nuestro servidor acepte peticiones de cualquier origen
  // origin: "http://localhost:3000", // Indicamos que nuestro servidor acepte peticiones de la URL indicada
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Indicamos que nuestros servidores acepten las siguientes metodos de HTTP
  // preflightContinue: false, // Indicamos que las peticiones OPTIONS no sean tratadas como peticiones de preflight
}

// Opción 2: Habilitar CORS solo para un origen específico
// const corsOptions = {
//   origin: 'http://localhost:3001' // Reemplaza con tu dominio de frontend
// };

// Opción 3: Habilitar CORS para múltiples orígenes
// const corsOptions = {
//   origin: ['http://localhost:3000', 'http://localhost:8080']
// };

export default corsOptions
