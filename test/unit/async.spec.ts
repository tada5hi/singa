/*
 * Copyright (c) 2025.
 *  Author Peter Placzek (tada5hi)
 *  For the full copyright and license information,
 *  view the LICENSE file that was distributed with this source code.
 */

import { singaAsync } from '../../src';

class Foo {

}

describe('src/async', () => {
    it('should create singleton', async () => {
        const singleton = singaAsync({
            async factory() {
                await Promise.resolve();

                return new Foo();
            },
        });

        expect(singleton.has()).toBeFalsy();

        const instance = await singleton.use();
        expect(instance).toBeInstanceOf(Foo);

        const instanceB = await singleton.use();
        expect(instance).toEqual(instanceB);

        expect(singleton.has()).toBeTruthy();
    });

    it('should throw error', async () => {
        const singleton = singaAsync();

        await expect(singleton.use()).rejects.toThrow();
    });
});
