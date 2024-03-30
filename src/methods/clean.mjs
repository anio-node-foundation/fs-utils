import nodeFsScandir from "@anio-node-foundation/fs-scandir"
import nodeFsRemove from "@anio-node-foundation/fs-remove"

async function clean(directory) {
	await nodeFsScandir(directory, {
		async callback({absolute_path}) {
			await nodeFsRemove(absolute_path)
		},
		reverse: true
	})
}

clean.sync = function(directory) {
	nodeFsScandir.sync(directory, {
		callback({absolute_path}) {
			nodeFsRemove.sync(absolute_path)
		},
		reverse: true
	})
}

export default clean
