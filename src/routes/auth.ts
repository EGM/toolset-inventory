import { Router } from "oak/mod.ts";

const authRoutes = new Router();

authRoutes.post("/login", async (ctx) => {/*TODO: password+biometric*/});
authRoutes.post("/register", async (ctx) => {/*TODO: new account*/});
authRoutes.post("/biometric", async (ctx) => {/*TODO: device-prompt*/});

export { authRoutes };