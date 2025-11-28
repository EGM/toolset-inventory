import { Router } from "oak/mod.ts";

const toolsetRoutes = new Router();

toolsetRoutes.get("/", async (ctx) => {/*TODO: list toolsets*/});
toolsetRoutes.post("/", async (ctx) => {/*TODO: create*/});
toolsetRoutes.put("/:id", async (ctx) => {/*TODO: update*/});
toolsetRoutes.delete("/:id", async (ctx) => {/*TODO: delete*/});
toolsetRoutes.get("/categories", async (ctx) => {/*TODO: get all categories*/});
toolsetRoutes.post("/categories", async (ctx) => {/*TODO: add category*/});
toolsetRoutes.get("/qrcode/:id", async (ctx) => {/*TODO: generate QR*/});
toolsetRoutes.post("/scan", async (ctx) => {/*TODO: check in/out with QR*/});

export { toolsetRoutes };