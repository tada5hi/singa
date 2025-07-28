/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { Factory } from './types';
import { SingaBase } from '../base';
import { DEFAULT_KEY } from '../constants';

export class Singa<T = any> extends SingaBase<Factory<T>> {
    /**
     * Create or use existing singleton instance.
     */
    use(key?: string) : T {
        const keyNormalized = key || DEFAULT_KEY;
        let instance = this.instances.get(keyNormalized);

        if (typeof instance !== 'undefined') {
            return instance;
        }

        if (typeof this.options.factory !== 'undefined') {
            instance = this.options.factory();
            this.instances.set(keyNormalized, instance);

            return instance;
        }

        throw new Error(`The ${this.options.name || 'singleton'} instance is not defined.`);
    }
}
