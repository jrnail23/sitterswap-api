import { default as request } from "supertest";
import { App } from "@App/app";
import Koa from "koa";

describe("/", () => {
  let app: Koa;

  beforeEach(() => {
    app = App();
  });

  describe("GET", () => {
    it("should return Hello World!", () => {
      return request(app.callback())
        .get("/")
        .set({ Accept: "text/plain" })
        .expect(200)
        .expect("Hello World!");
    });
  });
});
