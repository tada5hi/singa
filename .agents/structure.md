# Project Structure

| Source | Responsibility |
|---|---|
| `src/base.ts` | Shared singleton lifecycle |
| `src/sync` | Synchronous singleton behavior |
| `src/async` | Asynchronous singleton behavior |
| `src/types.ts` | Shared public type declarations |
| `src/index.ts` | Public package exports |
| `.github/assets` | README logo and mechanism diagram |
| `tsdown.config.mts` | JavaScript build configuration |

The package exports map declares the package root, `./package.json`. Use these declared entrypoints under exports-aware resolution; undeclared `dist/` paths are not additional public exports. Preserve the declared output paths. `types.ts` files own shared type declarations; filesystem declaration paths and facades provide legacy compatibility only where the resolver supports them.

The build runs tsdown and refreshes declarations through `build:types` after successful JavaScript builds. Generated `dist/` files are build artifacts.
