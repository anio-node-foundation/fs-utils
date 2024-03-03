import nodeFsGetPathType from "@anio-node-foundation/fs-get-path-type"

function processResult(result) {
	return result === "dir"
}

async function isRegularDirectory(...args) {
	return processResult(await nodeFsGetPathType(...args))
}

isRegularDirectory.sync = function(...args) {
	return processResult(nodeFsGetPathType.sync(...args))
}

export default isRegularDirectory
