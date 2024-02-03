# singa 🏛️

[![npm version][npm-version-src]][npm-version-href]
[![npm version][codecov-src]][codecov-href]
[![Master Workflow][workflow-src]][workflow-href]
[![Known Vulnerabilities][snyk-src]][snyk-href]
[![Conventional Commits][conventional-src]][conventional-href]

This is a package to create and manage singleton instances.

**Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install singa --save
```

## Usage

```typescript
class Foo {

}

const singleton = createSingleton({
    create() {
        return new Foo();
    },
});

const instance = singleton.use();
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
