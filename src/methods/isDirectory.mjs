import nodeFsGetPathType from "@anio-node-foundation/fs-get-path-type"

function processResult(result) {
	return result === "dir" || result === "link->dir"
}

async function isDirectory(...args) {
	return processResult(await nodeFsGetPathType(...args))
}

isDirectory.sync = function(...args) {
	return processResult(nodeFsGetPathType.sync(...args))
}

export default isDirectory
