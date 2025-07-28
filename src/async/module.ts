/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import { SingaBase } from '../base';
import type { FactoryAsync } from './types';
import { DEFAULT_KEY } from '../constants';

export class SingaAsync<T = any> extends SingaBase<FactoryAsync<T>> {
    /**
     * Create or use existing singleton instance.
     *
     * @param key
     */
    async use(key?: string) : Promise<T> {
        const keyNormalized = key || DEFAULT_KEY;

        let instance = this.instances.get(keyNormalized);
        if (typeof instance !== 'undefined') {
            return instance;
        }

        if (typeof this.options.factory !== 'undefined') {
            instance = await this.options.factory();
            this.instances.set(keyNormalized, instance);

            return instance!;
        }

        throw new Error(`The ${this.options.name || 'singleton'} instance is not defined.`);
    }
}
