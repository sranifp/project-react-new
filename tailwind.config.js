// Untuk input plug in plug ini dan untuk mengoknesikan file mana saja yg ingin dikasih styling tailwind

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  // digunakan jika ada fungsionalitas yg pakai plugin
  plugins: [require("daisyui")],
}

