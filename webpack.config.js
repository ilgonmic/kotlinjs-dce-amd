var path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "build/kotlin-js-min/main/kotlinjs-dce.js"),
    output: {
        libraryTarget: "amd",
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    resolve: {
        alias: {
            kotlin: path.resolve(__dirname, "build/kotlin-js-min/main/kotlin.js")
        }
    }
};