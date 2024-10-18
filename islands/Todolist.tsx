import { useContext } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { AppState } from "../routes/_app.tsx";
import { Button } from "../components/Button.tsx";

interface Todo {
    text: string;
    isCompleted: boolean;
}

const TodoList = () => {
    const { todos, completed } = useContext(AppState);

    const currentTodo = useSignal("");

    const addTodo = () => {
        todos.value = [...todos.value, {
            text: currentTodo.value,
            isCompleted: false,
        }];

        currentTodo.value = "";
    };

    const onComplete = (todo: Todo) => {
        todos.value = todos.value.map((t) =>
            t === todo ? { ...t, isCompleted: !t.isCompleted } : t
        );
    };

    const removeTodo = (todo: Todo) => {
        todos.value = todos.value.filter((t) => t !== todo);
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-center">
                <input
                    type="text"
                    value={currentTodo}
                    className="input input-bordered"
                    onInput={(e) => currentTodo.value = e.currentTarget.value}
                />

                <button
                    onClick={() => addTodo()}
                    className="btn btn-primary btn-outline"
                >
                    Add
                </button>
                <p>Completed Tasks : {completed}</p>
            </div>

            <ul className="flex flex-col gap-2">
                {todos.value.map((todo) => (
                    <li className="flex gap-2 items-center ">
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => onComplete(todo)}
                        />
                        <label>{todo.text}</label>
                        {/* <Button onClick={() => removeTodo(todo)}>Remove</Button> */}
                        <button
                            onClick={() => removeTodo(todo)}
                            className="btn btn-error btn-outline hover:text-white"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            {/* <h1>Todo List {JSON.stringify(todos)}</h1> */}
        </div>
    );
};

export default TodoList;
