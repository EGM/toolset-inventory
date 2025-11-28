import { Router } from "oak/mod.ts";
import { authRoutes } from "./auth.ts";
import { toolsetRoutes } from "./toolset.ts";
import { dashboardRoutes } from "./dashboard.ts";
import { settingsRoutes } from "./settings.ts";
import { crewRoutes } from "./crew.ts";

const router = new Router();

router.prefix("/api"); // All endpoint routes
router.use(authRoutes.routes(), authRoutes.allowedMethods());
router.use(toolsetRoutes.routes(), toolsetRoutes.allowedMethods());
router.use(dashboardRoutes.routes(), dashboardRoutes.allowedMethods());
router.use(settingsRoutes.routes(), settingsRoutes.allowedMethods());
router.use(crewRoutes.routes(), crewRoutes.allowedMethods());

export { router };