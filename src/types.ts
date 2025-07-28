/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

export type Fn = (...args: any) => any | Promise<any>;

export type UnPromisify<T> = T extends Promise<infer U> ? U : T;

export type FactoryInstance<T extends Fn> = ReturnType<UnPromisify<T>>;

export type SingaBaseOptions<F extends Fn = Fn> = {
    name?: string
    factory?: F
};
