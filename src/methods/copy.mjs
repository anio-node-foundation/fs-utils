import nodeFsCopy from "@anio-node-foundation/fs-copy"

async function copy(...args) {
	return await copy(...args)
}

copy.sync = function(...args) {
	return copy.sync(...args)
}

export default copy
