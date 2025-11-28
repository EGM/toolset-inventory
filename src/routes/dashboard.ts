import { Router } from "oak/mod.ts";

const dashboardRoutes = new Router();

dashboardRoutes.get("/", async (ctx) => {/*TODO: dashboard summary*/});
dashboardRoutes.get("/missing", async (ctx) => {/*TODO: missing tools*/});
dashboardRoutes.get("/requests", async (ctx) => {/*TODO: request queue*/});

export { dashboardRoutes };