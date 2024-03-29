import "./config";
import express from "express";
import { router } from "./routes";
import { log } from "./middlewares/logger";

export function bootstrap() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(router);
  app.listen(process.env.SERVER_PORT, () => {
    log.info(`Listening on port ${process.env.SERVER_PORT}!`);
  });

  return app;
}
