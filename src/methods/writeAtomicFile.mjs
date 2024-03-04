import nodeFsWriteAtomicFile from "@anio-node-foundation/fs-write-atomic-file"

async function writeAtomicFile(...args) {
	return await nodeFsWriteAtomicFile(...args)
}

writeAtomicFile.sync = function(...args) {
	return nodeFsWriteAtomicFile.sync(...args)
}

export default writeAtomicFile
