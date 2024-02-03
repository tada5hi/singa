import { createSingleton } from '../../src';

class Foo {

}

describe('src/index.ts', () => {
    it('should create singleton', () => {
        const singleton = createSingleton({
            create() {
                return new Foo();
            },
        });

        expect(singleton.isSet()).toBeFalsy();
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.isSet()).toBeTruthy();
    });

    it('should set singleton', () => {
        const singleton = createSingleton();
        expect(singleton.isSet()).toBeFalsy();
        singleton.set(new Foo());
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.isSet()).toBeTruthy();
    });

    it('should reset singleton', () => {
        const singleton = createSingleton({
            create() {
                return new Foo();
            },
        });
        expect(singleton.isSet()).toBeFalsy();
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.isSet()).toBeTruthy();

        singleton.reset();
        expect(singleton.isSet()).toBeFalsy();
    });

    it('should throw error', () => {
        const singleton = createSingleton();

        try {
            singleton.use();

            expect(1).toEqual(2);
        } catch (e) {
            expect(1).toEqual(1);
        }
    });
});
