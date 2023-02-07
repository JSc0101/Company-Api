import express from "express";
import router from "./routes/index.routes";
const app = express();

app.set("port", process.env.PORT || 3000);
app.use(router);

app.listen(app.get("port"));
console.log(`Listen in the port ${app.get("port")}`);
