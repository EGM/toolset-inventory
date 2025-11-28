import { Application } from "oak/mod.ts";
import { router } from "./routes/index.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const app = new Application();

app.use(oakCors()); // Enable CORS for APIs
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Toolset Inventory server listening on http://localhost:8000");
await app.listen({ port: 8000 });