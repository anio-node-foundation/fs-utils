import nodeFsRemove from "@anio-node-foundation/fs-remove"

async function remove(...args) {
	return await nodeFsRemove(...args)
}

remove.sync = function(...args) {
	return nodeFsRemove.sync(...args)
}

export default remove
