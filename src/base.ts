/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { FactoryInstance, Fn, SingaBaseOptions } from './types';

export class SingaBase<
    FACTORY extends Fn = Fn,
> {
    protected options: SingaBaseOptions<FACTORY>;

    protected instance: FactoryInstance<FACTORY> | undefined;

    // ----------------------------------------

    constructor(options: SingaBaseOptions<FACTORY>) {
        this.options = options;
    }

    // ----------------------------------------

    /**
     * Set the singleton instance.
     *
     * @param instance
     */
    set(instance: FactoryInstance<FACTORY>) {
        this.instance = instance;
    }

    /**
     * Check if the singleton instance is set.
     */
    has() {
        return typeof this.instance !== 'undefined';
    }

    /**
     * Unset the singleton instance.
     */
    unset() {
        this.instance = undefined;
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
