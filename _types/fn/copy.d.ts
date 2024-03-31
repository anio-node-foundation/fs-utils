export interface CopyFunction {
	/**
	 * @brief Asynchronously copy a directory.
	 * @param src Source path (directory to be copied).
	 * @param dst Destination path.
	 */
	(src : string, dst : string) : Promise<void>;

	/**
	 * @brief Synchronously copy a directory.
	 * @param src Source path (directory to be copied).
	 * @param dst Destination path.
	 */
	sync(src : string, dst : string) : void;
}
