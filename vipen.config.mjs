import generateIndexFile from "./generateIndexFile.mjs"

export default {
	realm: "js",
	type: "package",

	preprocessing: [
		generateIndexFile()
	]
}
