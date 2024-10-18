import type { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

interface CustomData {
    name: string;
}

export const handler: Handlers<CustomData> = {
    GET: (_req: Request, _ctx: FreshContext) => {
        return _ctx.render({
            name: "Mit",
        });
    },
};

const About = (props: PageProps<CustomData>) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1>Hello {props.data.name}</h1>
        </div>
    );
};

export default About;
