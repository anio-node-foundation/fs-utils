# @anio-node-foundation/fs-utils

Various filesystem utilities, both async and sync.

```js
import nodeFsUtils from "@anio-node-foundation/fs-utils"

/*
{
  copy: [AsyncFunction: copy] { sync: [Function (anonymous)] },
  generateTemporaryPathName: [AsyncFunction: generateTemporaryPathName] {
    sync: [Function (anonymous)]
  },
  hashFile: [AsyncFunction: hashFile] { sync: [Function (anonymous)] },
  isDirectory: [AsyncFunction: isDirectory] { sync: [Function (anonymous)] },
  isFile: [AsyncFunction: isFile] { sync: [Function (anonymous)] },
  isRegularDirectory: [AsyncFunction: isRegularDirectory] { sync: [Function (anonymous)] },
  isRegularFile: [AsyncFunction: isRegularFile] { sync: [Function (anonymous)] },
  isSymbolicLink: [AsyncFunction: isSymbolicLink] { sync: [Function (anonymous)] },
  remove: [AsyncFunction: remove] { sync: [Function (anonymous)] }
}
*/
console.log(nodeFsUtils)

console.log(await nodeFsUtils.isFile("examples/example.mjs"))
console.log(nodeFsUtils.isFile.sync("examples/example.mjs"))
```
