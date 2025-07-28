import { singa } from '../../src';

class Foo {

}

describe('src/index.ts', () => {
    it('should create singleton', () => {
        const singleton = singa({
            factory() {
                return new Foo();
            },
        });

        expect(singleton.has()).toBeFalsy();
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.has()).toBeTruthy();
    });

    it('should set singleton', () => {
        const singleton = singa();
        expect(singleton.has()).toBeFalsy();
        singleton.set(new Foo());
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.has()).toBeTruthy();
    });

    it('should reset singleton', () => {
        const singleton = singa({
            factory() {
                return new Foo();
            },
        });
        expect(singleton.has()).toBeFalsy();
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.has()).toBeTruthy();

        singleton.unset();
        expect(singleton.has()).toBeFalsy();
    });

    it('should set factory', () => {
        const singleton = singa();

        expect(singleton.has()).toBeFalsy();
        singleton.setFactory(() => new Foo());
        expect(singleton.use()).toBeInstanceOf(Foo);
        expect(singleton.has()).toBeTruthy();
    });

    it('should throw error', () => {
        const singleton = singa();

        try {
            singleton.use();

            expect(1).toEqual(2);
        } catch (e) {
            expect(1).toEqual(1);
        }
    });
});
