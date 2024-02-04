import type { Factory, Singleton, SingletonCreateContext } from './types';

export function defineSingleton<T = any>(context: SingletonCreateContext<T> = {}) : Singleton<T> {
    let instance : T | undefined;

    let factory : Factory<T> | undefined;
    if (context.factory) {
        factory = context.factory;
    }

    return {
        use: () => {
            if (typeof instance !== 'undefined') {
                return instance;
            }

            if (typeof factory !== 'undefined') {
                instance = factory();
                return instance;
            }

            throw new Error(`The ${context.name || 'singleton'} instance is not defined.`);
        },
        set: (input: T) => {
            instance = input;
        },
        setFactory: (input: Factory<T>) => {
            factory = input;
        },
        has: () => typeof instance !== 'undefined',
        reset: () => {
            instance = undefined;
        },
    };
}
