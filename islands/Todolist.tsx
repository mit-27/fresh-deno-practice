import { useContext } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { AppState } from "../routes/_app.tsx";

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

    const removeTodo = (todo: Todo) => {
        todos.value = todos.value.filter((t) => t !== todo);
    };

    return (
        <div>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={currentTodo}
                    onInput={(e) => currentTodo.value = e.currentTarget.value}
                />

                <button onClick={() => addTodo()}>Add</button>
            </div>

            <ul>
                {todos.value.map((todo) => (
                    <li className="flex gap-2">
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => removeTodo(todo)}
                        />
                        <label>{todo.text}</label>
                    </li>
                ))}
            </ul>
            {/* <h1>Todo List {JSON.stringify(todos)}</h1> */}
        </div>
    );
};

export default TodoList;
