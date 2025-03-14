import type { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
		regularWhite: '#FFFFFF',
      },
	  backgroundImage: {
		'custom-bg': "url('/images/bg-main.png')",
		'custom-footer-bg':"url('/images/footer-bg.jpg')",

	  },
    },
  },
  plugins: [],
} satisfies Config;
