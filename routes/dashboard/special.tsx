import type { LayoutConfig, PageProps } from "$fresh/server.ts";

export const config: LayoutConfig = {
    skipInheritedLayouts: true,
};

const SpecialPage = (props: PageProps) => {
    console.log(JSON.stringify(props.state));

    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1>Special Page {JSON.stringify(props.data)}</h1>
        </div>
    );
};

export default SpecialPage;
