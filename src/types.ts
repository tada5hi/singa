export type SingletonCreateContext<T> = {
    create?: () => T,
    name?: string
};

export type Singleton<T> = {
    use: () => T,
    set: (instance: T) => void,
    reset: () => void,
    isSet: () => boolean
};
