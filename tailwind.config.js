/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: 
      { primary: ["Poppins"] },
      backgroundImage: {
        'welcome': "url('/assets/wave.svg')",
        'services': "url('/assets/service.svg')",
        'contact': "url('/images/carousel/03.jpg')",
        'about': "url('/images/carousel/02.jpg')",
      }

  },
  },
  plugins: [],
}