import * as Koa from "koa";

import { Success } from "./core/httpException";
import useMiddlewares from "./middlewares";
import initContainer from "./core/init";
const app = new Koa();

useMiddlewares(app);

initContainer(app);

app.use((ctx: any) => {
  throw new Success("Hello Koa", "fff");
});

app.listen("8088", () => {
  console.log("启动在8088 🍺");
});
