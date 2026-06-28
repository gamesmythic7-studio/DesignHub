import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import pinoHttp from "pino-http";
import { logger } from "./logger.js";
import { tasksRouter } from "./routes/tasks.js";

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(
  cors({
    origin: process.env.VITE_DEV_SERVER_URL ?? "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use(pinoHttp({ logger }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/tasks", tasksRouter);

app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    logger.error(err);
    const message =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ error: { message } });
  },
);

app.listen(PORT, () => {
  logger.info(`API server running on port ${PORT}`);
});
