const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
let query = require("./db/index");
const router = require("koa-router")(); //处理路由
let app = new Koa();
app.use(static(path.join(process.cwd(), "./publish/")));
app.use(router.routes());
app.use(router.allowedMethods());
router.get("/datalist", async (ctx, next) => {
  let data = await query();
  console.log(data);
  ctx.body = {
    code: 1,
    data
  };
});
app.listen(3000, () => {
  console.log("服务已启动");
});
