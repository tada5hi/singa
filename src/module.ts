import type { Singleton, SingletonCreateContext } from './types';

export function createSingleton<T = any>(context: SingletonCreateContext<T> = {}) : Singleton<T> {
    let instance : T | undefined;

    return {
        use: () => {
            if (typeof instance !== 'undefined') {
                return instance;
            }

            if (typeof context.create !== 'undefined') {
                instance = context.create();
                return instance;
            }

            throw new Error(`The ${context.name || 'singleton'} instance is not defined.`);
        },
        set: (input: T) => {
            instance = input;
        },
        isSet: () => typeof instance !== 'undefined',
        reset: () => {
            instance = undefined;
        },
    };
}
