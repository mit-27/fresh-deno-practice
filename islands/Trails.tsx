import { Button } from "../components/shadcn-button.tsx";
import { RxAccessibility, RxArrowRight, RxReload } from "@preact-icons/rx";

const Trails = () => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <Button disabled>
                <RxReload className="mr-2 h-4 w-4 animate-spin" />
                Please wait...
            </Button>
            <Button
                variant="smooth-bounce"
                size={"lg"}
                onClick={() => alert("Rainbow called")}
            >
                Rainbow button
            </Button>
        </div>
    );
};

export default Trails;
