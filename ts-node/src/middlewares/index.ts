import * as bodyParse from "koa-bodyparser";
import * as serve from "koa-static";
import * as path from "path";
import catchError from "./exception";

export default function useMiddlewares(app: any) {
  // 错误中间件在最前面
  app.use(catchError);

  // 加载服务器静态资源
  app.use(serve(path.join(__dirname, "./static")));

  app.use(bodyParse());
}
