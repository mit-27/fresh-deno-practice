import { RxAccessibility } from "@preact-icons/rx";

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center gap-5 min-h-screen">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
      </div>
      <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
      <h1 class="text-xl font-bold">Todo List Demo (with Global State)</h1>
    </div>
  );
}
