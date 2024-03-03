import nodeFsHashFile from "@anio-node-foundation/fs-hash-file"

async function hashFile(...args) {
	return await nodeFsHashFile(...args)
}

hashFile.sync = function(...args) {
	return nodeFsHashFile.sync(...args)
}

export default hashFile
