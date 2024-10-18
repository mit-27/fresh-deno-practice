import { type PageProps } from "$fresh/server.ts";
import { computed, signal } from "@preact/signals";
import { createContext } from "preact";

const createAppState = () => {
  const todos = signal<{ text: string; isCompleted: boolean }[]>([]);

  const completed = computed(() => {
    return todos.value.filter((todo) => todo.isCompleted).length;
  });

  return { todos, completed };
};

export const AppState = createContext(createAppState());

export default function App({ Component }: PageProps) {
  return (
    <html data-theme="light">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-deno-practice</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        {/* <AppState.Provider value={createAppState()}> */}
        <Component />
        {/* </AppState.Provider> */}
      </body>
    </html>
  );
}
