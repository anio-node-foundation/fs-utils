import nodeFsGetPathType from "@anio-node-foundation/fs-get-path-type"

function processResult(result) {
	return result === "file"
}

async function isRegularFile(...args) {
	return processResult(await nodeFsGetPathType(...args))
}

isRegularFile.sync = function(...args) {
	return processResult(nodeFsGetPathType.sync(...args))
}

export default isRegularFile
