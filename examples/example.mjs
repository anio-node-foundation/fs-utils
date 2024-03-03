import nodeFsUtils from "../src/index.mjs"

console.log(nodeFsUtils)

console.log(await nodeFsUtils.isFile("examples/example.mjs"))
console.log(nodeFsUtils.isFile.sync("examples/example.mjs"))
