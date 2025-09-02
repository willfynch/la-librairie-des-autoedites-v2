/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    '*.{html,js}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'books' : 'repeat(auto-fill, minmax(250px, 1fr))'
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [
      {me: {
        "primary": "#382208",
        "primary-content": "382208",
        "secondary": "#221505",
        "accent": "#9D9686",
        "neutral": "#CFC7B8",
        "base-100": "#FDF7EC",
        "info": "#ccd7c5",
        "success": "#15803d",
        "warning": "#fbbf24",
        "error": "#be123c",

        "--rounded-btn": "1.5rem"
      }
    }
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

