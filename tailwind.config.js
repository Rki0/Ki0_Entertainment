module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  // calc를 사용할 수 있게 만들어준다.
  mode: "jit",
};

// module.exports = {
//   content: ["./src/**/*.{html,js,ts,tsx}", "./public/index.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
