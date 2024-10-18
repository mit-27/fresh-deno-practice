import type { PageProps } from "$fresh/server.ts";

const DashboardLayout = ({ Component }: PageProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-200">
            <Component />
        </div>
    );
};

export default DashboardLayout;
