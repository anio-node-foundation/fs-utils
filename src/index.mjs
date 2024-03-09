/* warning: this file was automatically generated */
import copy_impl from "./methods/copy.mjs"
import generateTemporaryPathName_impl from "./methods/generateTemporaryPathName.mjs"
import hashFile_impl from "./methods/hashFile.mjs"
import isDirectory_impl from "./methods/isDirectory.mjs"
import isFile_impl from "./methods/isFile.mjs"
import isRegularDirectory_impl from "./methods/isRegularDirectory.mjs"
import isRegularFile_impl from "./methods/isRegularFile.mjs"
import isSymbolicLink_impl from "./methods/isSymbolicLink.mjs"
import remove_impl from "./methods/remove.mjs"
import writeAtomicFile_impl from "./methods/writeAtomicFile.mjs"

export const copy = copy_impl;
export const generateTemporaryPathName = generateTemporaryPathName_impl;
export const hashFile = hashFile_impl;
export const isDirectory = isDirectory_impl;
export const isFile = isFile_impl;
export const isRegularDirectory = isRegularDirectory_impl;
export const isRegularFile = isRegularFile_impl;
export const isSymbolicLink = isSymbolicLink_impl;
export const remove = remove_impl;
export const writeAtomicFile = writeAtomicFile_impl;

export default {
    copy,
    generateTemporaryPathName,
    hashFile,
    isDirectory,
    isFile,
    isRegularDirectory,
    isRegularFile,
    isSymbolicLink,
    remove,
    writeAtomicFile,
}
