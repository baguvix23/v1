/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        "Montserrat",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      handwriting: [
        "Architects Daughter",
        "Montserrat",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      fontSize: {
        12: "1.2rem", // 12px
        14: "1.4rem", // 14px
        16: "1.6rem", // 16px
        18: "1.8rem", // 18px
        20: "2.0rem", // 20px
        24: "2.4rem", // 24px
        32: "3.2rem", // 32px
        48: "4.8rem", // 48px
        56: "5.6rem", // 56px
        64: "6.4rem", // 64px
      },
    },
    extend: {
      backgroundImage: {
        noise: "url('/src/assets/patterns/noise.svg')",
      },
    },
  },
  plugins: [],
};
