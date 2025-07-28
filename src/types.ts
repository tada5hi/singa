export type Factory<T = any> = () => T;

export type SingaCreateContext<T> = {
    factory?: Factory<T>,
    name?: string
};
