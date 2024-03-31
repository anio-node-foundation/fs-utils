import type {CleanFunction} from "./fn/clean.d.ts"
import type {CopyFunction} from "./fn/copy.d.ts"
import type {GenerateTemporaryPathNameFunction} from "./fn/generateTemporaryPathName.d.ts"
import type {HashFileFunction} from "./fn/hashFile.d.ts"

declare var clean : CleanFunction
declare var copy : CopyFunction
declare var generateTemporaryPathName : GenerateTemporaryPathNameFunction
declare var hashFile : HashFileFunction

export {
	clean,
	copy,
	generateTemporaryPathName,
	hashFile
}
