export type Factory<T = any> = () => T;

export type SingaCreateContext<T> = {
    factory?: Factory<T>,
    name?: string
};

export type Singa<T> = {
    /**
     * Create or us existing singleton instance.
     */
    use: () => T,
    /**
     * Set the singleton instance.
     *
     * @param instance
     */
    set: (instance: T) => void,
    /**
     * Set factory fn for instance creation.
     *
     * @param factory
     */
    setFactory: (factory: Factory<T>) => void,
    /**
     * Reset the singleton instance.
     */
    reset: () => void,
    /**
     * Check if the singleton instance is set.
     */
    has: () => boolean,
    /**
     * Check if a factory fn is set.
     */
    hasFactory: () => boolean
};
