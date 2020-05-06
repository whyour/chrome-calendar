const Koa = require("koa");
const app = new Koa();
const fetch = require("node-fetch");

async function route(url) {
  const urls = url.split("?");
  switch (urls[0]) {
    case "/calendar":
      return await fetch(`https://wannianrili.51240.com/ajax/?${urls[1]}`, {
        method: "get",
      }).then((res) => res.text());
    default:
      break;
  }
}

app.use(async (ctx) => {
  let url = ctx.request.url;
  let html = await route(url);
  ctx.body = html;
});

app.listen(3000);
console.log("[demo] route-simple is starting at port 3000");
