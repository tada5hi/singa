/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { FactoryInstance, Fn, SingaBaseOptions } from './types';
import { DEFAULT_KEY } from './constants';

export class SingaBase<
    FACTORY extends Fn = Fn,
> {
    protected options: SingaBaseOptions<FACTORY>;

    protected instances: Map<string, FactoryInstance<FACTORY>>;

    // ----------------------------------------

    constructor(options: SingaBaseOptions<FACTORY>) {
        this.options = options;
        this.instances = new Map<string, FactoryInstance<FACTORY>>();
    }

    // ----------------------------------------

    /**
     * Set the singleton instance.
     *
     * @param instance
     * @param key (default)
     */
    set(instance: FactoryInstance<FACTORY>, key?: string) {
        this.instances.set(key || DEFAULT_KEY, instance);
    }

    /**
     * Check if the singleton instance is set.
     *
     * @param key
     */
    has(key?: string) {
        return this.instances.has(key || DEFAULT_KEY);
    }

    /**
     * Unset the singleton instance.
     */
    unset(key?: string) {
        this.instances.delete(key || DEFAULT_KEY);
    }

    // ----------------------------------------

    /**
     * Get factory fn for instance creation.
     */
    getFactory() {
        return this.options.factory;
    }

    /**
     * Set factory fn for instance creation.
     *
     * @param factory
     */
    setFactory(factory: FACTORY) {
        this.options.factory = factory;
    }

    /**
     * Get factory fn for instance creation.
     */
    hasFactory() {
        return typeof this.options.factory !== 'undefined';
    }

    /**
     * Unset the factory fn.
     */
    unsetFactory() {
        this.options.factory = undefined;
    }
}
