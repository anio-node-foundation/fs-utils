export interface CleanFunction {
	/**
	 * @brief Asynchronously clean a directory.
	 * @param path The path to the directory.
	 */
	(path : string) : Promise<void>;

	/**
	 * @brief Synchronously clean a directory.
	 * @param path The path to the directory.
	 */
	sync(path : string) : void;
}
