module.exports = {
    mode: 'development',
    entry: ["./global.js", "./app.js"],
    output: {
      filename: "bundle.js"
    },
    watch: true
  }