<p align="center"><img src=".github/assets/logo.svg" width="144" height="144" alt="singa logo" /></p>
<h1 align="center">singa</h1>
<p align="center"><strong>Create and manage keyed synchronous and asynchronous singletons.</strong></p>
<p align="center">Keep lazy creation, explicit replacement and cache invalidation in one instance holder.</p>
<p align="center">
  <a href="https://www.npmjs.com/package/singa"><img src="https://img.shields.io/npm/v/singa" alt="npm version" /></a>
  <a href="https://github.com/tada5hi/singa/actions"><img src="https://img.shields.io/github/actions/workflow/status/tada5hi/singa/main.yml" alt="CI status" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/singa" alt="License" /></a>
</p>
<p align="center"><a href="#installation">Installation</a> · <a href="#usage">Usage</a> · <a href="#api">API</a> · <a href="#notes">Notes</a></p>

---

## Why singa?

Keep lazy creation, explicit replacement and cache invalidation in one instance holder.

| Concern | Without it | With it |
|---|---|---|
| Lazy creation | Repeat a cached-value check | Call use() to reuse or create an instance |
| Separate instances | Maintain your own keyed map | Pass a key to use, set, has and unset |
| Test isolation | Reach into a module-level variable | Set an instance or unset one key explicitly |

Singa use returns a defined cached instance; on a miss it calls the factory and stores the result. SingaAsync stores only after the factory resolves, so concurrent misses are not deduplicated.

<img src=".github/assets/mechanism.svg" width="960" alt="Singa use returns a defined cached instance; on a miss it calls the factory and stores the result. SingaAsync stores only after the factory resolves, so concurrent misses are not deduplicated." />

## Installation

```bash
npm install singa
```

Requires Node `>=18.0.0`. ESM, CommonJS and TypeScript declarations are included. Import the documented package entrypoint rather than undeclared `dist/` paths.

## Usage

```typescript
import { singa, singaAsync } from 'singa';

const local = singa({ factory: () => ({ count: 0 }) });
console.log(local.use() === local.use()); // true
local.unset();
console.log(local.has()); // false

const remote = singaAsync({ factory: async () => ({ connected: true }) });
const first = await remote.use('primary');
console.log(first === await remote.use('primary')); // true
```

## Lifecycle

Both holders accept optional `{ name, factory }`. `name` supplies the label in the missing-instance error; it does not partition the cache. Each holder has its own map.

| Method | Behavior |
|---|---|
| `use(key?)` | Reuse a defined cached value, otherwise call the factory; throw/reject if neither exists |
| `set(instance, key?)` | Replace the cached value for one key |
| `has(key?)` | Check whether the map contains that key |
| `unset(key?)` | Delete one cached entry |
| `getFactory()` / `hasFactory()` | Inspect the configured factory |
| `setFactory(factory)` / `unsetFactory()` | Change future creation; existing instances remain |

`Singa.use()` returns the instance synchronously. `SingaAsync.use()` returns a promise and stores the resolved instance after the factory completes.

## API

All names below are exported from `singa`. Types have no runtime value.

| Export | Kind | Purpose |
|---|---|---|
| `singaAsync` | function | Construct an asynchronous singleton holder |
| `SingaAsync` | class | Asynchronous keyed instance holder |
| `FactoryAsync` | type | Type contract for factory async |
| `SingaAsyncOptions` | type | Type contract for singa async options |
| `DEFAULT_KEY` | constant | Default cache key: "default" |
| `singa` | function | Construct a synchronous singleton holder |
| `Singa` | class | Synchronous keyed instance holder |
| `Factory` | type | Type contract for factory |
| `SingaOptions` | type | Type contract for singa options |
| `Fn` | type | Type contract for fn |
| `UnPromisify` | type | Type contract for un promisify |
| `FactoryInstance` | type | Type contract for factory instance |
| `SingaBaseOptions` | type | Type contract for singa base options |

## Notes

- **Async creation is not single-flight.** Concurrent `use(key)` calls can each invoke the factory before an instance is stored. Serialize initialization yourself when duplicate creation is unsafe.
- **No cleanup hook.** `unset` removes the reference; it does not close sockets, dispose resources or call a destructor.
- **Undefined is not reusable.** A factory or explicit `set` storing `undefined` leaves `has()` true, but `use()` treats it as missing and tries the factory again.
- **Factories take no key.** All keys share the configured zero-argument factory. An empty key selects `DEFAULT_KEY`, which is `"default"`.
- **Failures are not cached.** A thrown or rejected factory call stores no result; a later `use()` attempts creation again.

## Contributing

Read the [contribution guidelines](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md).

## License

Made with 💚

Published under the [MIT License](LICENSE).
