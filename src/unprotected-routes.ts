import Router from "@koa/router";
import { BaseContext } from "koa";

const home = (ctx: BaseContext) => {
  ctx.body = "Hello World!";
};

export const unprotectedRouter = new Router().get("/", home);
