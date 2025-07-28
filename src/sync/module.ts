/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { Factory } from './types';
import { SingaBase } from '../base';

export class Singa<T = any> extends SingaBase<Factory<T>> {
    /**
     * Create or us existing singleton instance.
     */
    use() : T {
        if (typeof this.instance !== 'undefined') {
            return this.instance;
        }

        if (typeof this.options.factory !== 'undefined') {
            this.instance = this.options.factory();
            return this.instance!;
        }

        throw new Error(`The ${this.options.name || 'singleton'} instance is not defined.`);
    }
}
