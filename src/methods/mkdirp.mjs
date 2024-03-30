import fs from "node:fs"

async function mkdirp(directory) {
	await fs.promises.mkdir(directory, {recursive: true})
}

mkdirp.sync = function(directory) {
	fs.mkdirSync(directory, {recursive: true})
}

export default mkdirp
