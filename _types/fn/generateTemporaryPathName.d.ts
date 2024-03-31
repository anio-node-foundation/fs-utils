export interface GenerateTemporaryPathNameFunction {
	/**
	 * @brief Generate a path that can be used to store a temporary object.
	 */
	() : Promise<string>;

	/**
	 * @brief Generate a path that can be used to store a temporary object.
	 */
	sync() : string;
}
