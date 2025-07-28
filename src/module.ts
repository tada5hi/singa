/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import type { Factory, SingaCreateContext } from './types';

export class Singa<T = any> {
    protected options: SingaCreateContext<T>;

    protected instance: T | undefined;

    // ----------------------------------------

    constructor(options: SingaCreateContext<T>) {
        this.options = options;
    }

    // ----------------------------------------

    /**
     * Create or us existing singleton instance.
     */
    use() {
        if (typeof this.instance !== 'undefined') {
            return this.instance;
        }

        if (typeof this.options.factory !== 'undefined') {
            this.instance = this.options.factory();
            return this.instance;
        }

        throw new Error(`The ${this.options.name || 'singleton'} instance is not defined.`);
    }

    /**
     * Set the singleton instance.
     *
     * @param instance
     */
    set(instance: T) {
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
    setFactory(factory: Factory<T>) {
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
