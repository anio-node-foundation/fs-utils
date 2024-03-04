import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

function generateTemporaryPathNameSync() {
	return path.join(os.tmpdir(), randomUUID())
}

async function generateTemporaryPathName() {
	return generateTemporaryPathNameSync()
}

generateTemporaryPathName.sync = function() {
	return generateTemporaryPathNameSync()
}

export default generateTemporaryPathName
