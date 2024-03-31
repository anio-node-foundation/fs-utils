export interface HashFileFunction {
	/**
	 * @brief Asynchronously hash the contents of a file.
	 * @param file_path The file to hash.
	 * @param algo The algorithm used to hash the file.
	 * @param hash_encoding The encoding of the hash, defaults to "hex".
	 */
	(file_path : string, algo : string, hash_encoding?: string) : Promise<string>;

	/**
	 * @brief Synchronously hash the contents of a file.
	 * @param file_path The file to hash.
	 * @param algo The algorithm used to hash the file.
	 * @param hash_encoding The encoding of the hash, defaults to "hex".
	 */
	sync(file_path : string, algo : string, hash_encoding?: string) : string;
}
