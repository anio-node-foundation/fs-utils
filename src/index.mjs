import {randomUUID} from "node:crypto"
import path from "node:path"
import os from "node:os"

import nodeFsHashFileSync from "@anio-js-foundation/node-fs-hash-file-sync"
import nodeFsCopySync from "@anio-js-foundation/node-fs-copy-sync"
import nodeFsRemoveSync from "@anio-js-foundation/node-fs-remove-sync"
import fsGetPathTypeSync from "@anio-js-core-foundation/node-fs-get-path-type-sync"

export function hashFileSync(...args) {
	return nodeFsHashFileSync(...args)
}

export function copySync(src, dest) {
	return nodeFsCopySync(src, dest)
}

export function removeSync(path) {
	return nodeFsRemoveSync(path)
}

export function generateTemporaryPathNameSync() {
	return path.join(os.tmpdir(), randomUUID())
}

export function isFileSync(...args) {
	const path_type = fsGetPathTypeSync(...args)

	return (path_type === "file" || path_type === "link->file")
}

export function isRegularFileSync(...args) {
	const path_type = fsGetPathTypeSync(...args)

	return path_type === "file"
}

export function isDirectorySync(...args) {
	const path_type = fsGetPathTypeSync(...args)

	return (path_type === "dir" || path_type === "link->dir")
}

export function isRegularDirectorySync(...args) {
	const path_type = fsGetPathTypeSync(...args)

	return path_type === "dir"
}

export default {
	hashFileSync,

	copySync,
	removeSync,

	generateTemporaryPathNameSync,

	isFileSync,
	isRegularFileSync,
	isDirectorySync,
	isRegularDirectorySync
}
