import express, { Request, Response } from "express";
import { Punto } from "./interfaces/Punto";
import cors from "cors";

const app = express();
const PORT = 3000;

// Configurar CORS
app.use(cors());

// Datos hardcodeados
const puntosRecomendados: Punto[] = [
  {
    latitude: -34.6037,
    longitude: -58.3816,
  },
  {
    latitude: -34.6038,
    longitude: -58.3817,
  },
  {
    latitude: -34.6039,
    longitude: -58.3818,
  },
];

// Endpoint
app.get("/puntos-recomendados", (req: Request, res: Response) => {
  res.json(puntosRecomendados);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
