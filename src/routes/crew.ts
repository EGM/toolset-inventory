import { Router } from "oak/mod.ts";

const crewRoutes = new Router();

crewRoutes.post("/invite", async (ctx) => {/*TODO: invite user*/});
crewRoutes.post("/accept", async (ctx) => {/*TODO: accept invite*/});
crewRoutes.post("/decline", async (ctx) => {/*TODO: decline invite*/});
crewRoutes.get("/results", async (ctx) => {/*TODO: view invite results*/});
crewRoutes.get("/", async (ctx) => {/*TODO: view crew*/});

export { crewRoutes };