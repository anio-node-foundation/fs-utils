import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

async function generateTemporaryPathName() {
	return path.join(os.tmpdir(), randomUUID())
}

generateTemporaryPathName.sync = function() {
	return generateTemporaryPathName()
}

export default generateTemporaryPathName
