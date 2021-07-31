import {Server, FlatFile } from "boardgame.io/server";
import { customAlphabet } from "nanoid";
import path from "path";
import serve from "koa-static";
import { Coup } from "../client/src/game/gameMechanic";

const letterAndNumbersStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const server = Server({
	games: [Coup],
	db: new FlatFile({ 
		dir: "db",
		logging: false,
		ttl: 1000 * 60 * 60
	})
})
const PORT = process.env.PORT || 8000;

server.app.use(serve(path.resolve(__dirname, "./../client/build")));
server.run({ port: PORT, callback: () => {
	server.app.use(
		async (ctx, next) => await serve(path.resolve(__dirname, "./../client/build"))(Object.assign(ctx, {
			path: "index.html"
		}), next)
	);
}, lobbyConfig: {
	uuid: customAlphabet(letterAndNumbersStr, 6)
}})