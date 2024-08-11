/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "todo-20": "#ffffff",
        "todo-50": "#f3f2ff",
        "todo-100": "#e9e8ff",
        "todo-200": "#d7d4ff",
        "todo-300": "#b8b2ff",
        "todo-400": "#9586ff",
        "todo-500": "#7355fd",
        "todo-600": "#6232f5",
        "todo-700": "#5320e1",
        "todo-800": "#451abd",
        "todo-900": "#3a179b",
        "todo-950": "#210c69",
      },
    },
  },
  plugins: [],
};
