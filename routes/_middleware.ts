import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
    if (ctx.destination === "route") {
        // console.log("route");
        // console.log(req.url);
        // ctx.state = { name: "Mit Suthar" };
        const resp = await ctx.next();
        return resp;
    }
    return ctx.next();
}

export type DestinationKind = "internal" | "static" | "route" | "notFound";
