import { RxAccessibility } from "@preact-icons/rx";
import { Signal } from "@preact/signals";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface IconsProps {
    X: Signal<number>;
    // addX: () => void;
}

const Icons = (props: IconsProps) => {
    const addX = () => {
        console.log("X is", props.X.value);
        props.X.value++;
    };

    return (
        <div>
            <button onClick={() => addX()} disabled={!IS_BROWSER}>Add X</button>
            <RxAccessibility />
        </div>
    );
};

export default Icons;
