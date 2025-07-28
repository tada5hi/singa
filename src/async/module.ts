/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import { SingaBase } from '../base';
import type { FactoryAsync } from './types';

export class SingaAsync<T = any> extends SingaBase<FactoryAsync<T>> {
    async use() : Promise<T> {
        if (typeof this.instance !== 'undefined') {
            return this.instance;
        }

        if (typeof this.options.factory !== 'undefined') {
            this.instance = await this.options.factory();
            return this.instance!;
        }

        throw new Error(`The ${this.options.name || 'singleton'} instance is not defined.`);
    }
}
