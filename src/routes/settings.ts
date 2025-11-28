import { Router } from "oak/mod.ts";

const settingsRoutes = new Router();

settingsRoutes.put("/profile", async (ctx) => {/*TODO: change name, password*/});
settingsRoutes.put("/preferences", async (ctx) => {/*TODO: change modes, font*/});

export { settingsRoutes };