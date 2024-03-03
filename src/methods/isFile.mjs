import nodeFsGetPathType from "@anio-node-foundation/fs-get-path-type"

function processResult(result) {
	return result === "file" || result === "link->file"
}

async function isFile(...args) {
	return processResult(await nodeFsGetPathType(...args))
}

isFile.sync = function(...args) {
	return processResult(nodeFsGetPathType.sync(...args))
}

export default isFile
