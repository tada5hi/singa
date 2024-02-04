export type Factory<T = any> = () => T;

export type SingletonCreateContext<T> = {
    factory?: Factory<T>,
    name?: string
};

export type Singleton<T> = {
    use: () => T,
    set: (instance: T) => void,
    setFactory: (factory: Factory<T>) => void,
    reset: () => void,
    has: () => boolean
};
