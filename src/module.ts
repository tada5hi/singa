import type { Factory, Singa, SingaCreateContext } from './types';

export function singa<T = any>(context: SingaCreateContext<T> = {}) : Singa<T> {
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
        hasFactory: () => typeof factory !== 'undefined',
        reset: () => {
            instance = undefined;
        },
    };
}
