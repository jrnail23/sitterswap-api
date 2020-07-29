import cors from "@koa/cors";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import helmet from "koa-helmet";
import { unprotectedRouter } from "@App/unprotected-routes";

export const App = (): Koa => {
  const app = new Koa();

  app.use(helmet());

  app.use(cors());

  app.use(bodyParser());

  app.use(unprotectedRouter.routes()).use(unprotectedRouter.allowedMethods());

  return app;
};
