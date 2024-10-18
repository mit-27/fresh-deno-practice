import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        return await ctx.render();
    },
    async POST(req, _ctx) {
        const form = await req.formData();
        const email = form.get("email")?.toString();

        // Add email to list.

        // Redirect user to thank you page.
        const headers = new Headers();
        headers.set("location", "/dashboard/special");
        return new Response(JSON.stringify({ email }), {
            status: 303, // See Other
            headers,
        });
    },
};

export default function Dashboard() {
    return (
        <div>
            <form method="post">
                <input
                    type="email"
                    name="email"
                    value=""
                    className="input"
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
}
