import { createContainer, Lifetime } from "awilix";
import { scopePerRequest, loadControllers } from "awilix-koa";

export default function initContainer(app: any) {
  // 创建容器
  const container = createContainer();
  // 自动注册 services
  container.loadModules([`${process.cwd()}/src/services/*.ts`], {
    formatName: "camelCase",
    resolverOptions: {
      lifetime: Lifetime.SCOPED,
    },
  });
  // 注入
  app.use(scopePerRequest(container));
  // 加载路由
  app.use(loadControllers(`${process.cwd()}/src/controllers/*.ts`));
}
