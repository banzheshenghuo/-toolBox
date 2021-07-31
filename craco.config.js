console.log("process.env=>", process.env);

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: {
      output: {
        publicPath: process.env.NODE_ENV === "development" ? "./" : "/toolBox/",
      },
    },
  },
};
