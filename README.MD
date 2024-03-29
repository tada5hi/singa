# singa 🏛️

[![npm version][npm-version-src]][npm-version-href]
[![npm version][codecov-src]][codecov-href]
[![Master Workflow][workflow-src]][workflow-href]
[![Known Vulnerabilities][snyk-src]][snyk-href]
[![Conventional Commits][conventional-src]][conventional-href]

This is a tiny library to create and manage singleton instances.

**Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
- [Types](#types)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install singa --save
```

## Usage

The **singa** function returns an object of type [Singa](#singa),
with all input parameters, including name and factory, being entirely optional.

```typescript
import { singa } from 'singa';

class Foo {

}

const singleton = singa({
    name: 'singleton',
    factory() {
        return new Foo();
    },
});

const instance = singleton.use();
```

## Types

### Singa
```typescript
declare type Singa<T> = {
    /**
     * Create or us existing singleton instance.
     */
    use: () => T,
    /**
     * Set the singleton instance.
     *
     * @param instance
     */
    set: (instance: T) => void,
    /**
     * Set factory fn for instance creation.
     *
     * @param factory
     */
    setFactory: (factory: Factory<T>) => void,
    /**
     * Reset the singleton instance.
     */
    reset: () => void,
    /**
     * Check if the singleton instance is set.
     */
    has: () => boolean,
    /**
     * Check if a factory fn is set.
     */
    hasFactory: () => boolean
};
```

## Contributing

Before starting to work on a pull request, it is important to review the guidelines for
[contributing](./CONTRIBUTING.md) and the [code of conduct](./CODE_OF_CONDUCT.md).
These guidelines will help to ensure that contributions are made effectively and are accepted.

## License

Made with 💚

Published under [MIT License](./LICENSE).

[npm-version-src]: https://badge.fury.io/js/singa.svg
[npm-version-href]: https://npmjs.com/package/singa
[codecov-src]: https://codecov.io/gh/Tada5hi/singa/branch/master/graph/badge.svg?token=4KNSG8L13V
[codecov-href]: https://codecov.io/gh/Tada5hi/singa
[workflow-src]: https://github.com/Tada5hi/singa/workflows/CI/badge.svg
[workflow-href]: https://github.com/Tada5hi/singa
[snyk-src]: https://snyk.io/test/github/Tada5hi/singa/badge.svg?targetFile=package.json
[snyk-href]: https://snyk.io/test/github/Tada5hi/singa?targetFile=package.json
[conventional-src]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white
[conventional-href]: https://conventionalcommits.org
