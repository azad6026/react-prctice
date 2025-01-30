module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          'tmdb-blue': '#01b4e4',
          'tmdb-green': '#90cea1',
        },
      },
    },
    plugins: [require('@tailwindcss/forms')],
  };