import daisyui from "daisyui";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light"],
  },
};
