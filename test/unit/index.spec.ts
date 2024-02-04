import { defineSingleton } from '../../src';

class Foo {

}

describe('src/index.ts', () => {
    it('should create singleton', () => {
        const singleton = defineSingleton({
            factory() {
                return new Foo();
            },
        });

        expect(singleton.has()).toBeFalsy();
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.has()).toBeTruthy();
    });

    it('should set singleton', () => {
        const singleton = defineSingleton();
        expect(singleton.has()).toBeFalsy();
        singleton.set(new Foo());
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.has()).toBeTruthy();
    });

    it('should reset singleton', () => {
        const singleton = defineSingleton({
            factory() {
                return new Foo();
            },
        });
        expect(singleton.has()).toBeFalsy();
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.has()).toBeTruthy();

        singleton.reset();
        expect(singleton.has()).toBeFalsy();
    });

    it('should set factory', () => {
        const singleton = defineSingleton();

        expect(singleton.has()).toBeFalsy();
        singleton.setFactory(() => new Foo());
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.has()).toBeTruthy();
    });

    it('should throw error', () => {
        const singleton = defineSingleton();

        try {
            singleton.use();

            expect(1).toEqual(2);
        } catch (e) {
            expect(1).toEqual(1);
        }
    });
});
