# kavia-design-system

Reusable React component library and Storybook workspace for Kavia UI.

## Development

Install dependencies:

```bash
npm ci
```

Run the local Vite workspace:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

## Library builds

Build the publishable library bundle and type declarations:

```bash
npm run build:lib
```

Build Storybook for validation or static docs output:

```bash
npm run build:storybook
```

Preview the package tarball contents before release:

```bash
npm pack --dry-run
```

## GitHub Actions release workflow

The repository includes `.github/workflows/library-release.yml` to support CI validation and package publishing for `kavia-design-system`.

### Validation behavior

The workflow:

1. Installs dependencies with `npm ci`
2. Builds the library with `npm run build:lib`
3. Verifies publish contents with `npm pack --dry-run`
4. Builds Storybook on pull requests, main-branch pushes, and manual runs unless disabled

### Publish behavior

Publishing is enabled when either of the following happens:

- A tag matching `kavia-design-system-v*` is pushed
- The workflow is run manually with the `publish` input set to `true`

The publish job uses `npm publish --access public`, so maintainers must configure the following repository secret before releasing:

- `NPM_TOKEN`: npm automation token with permission to publish the package version

### Recommended release flow

1. Update `package.json` with the new semantic version.
2. Push changes to `main` and confirm the validation job succeeds.
3. Create and push a tag such as `kavia-design-system-v0.1.1`.
4. Confirm the publish job completes successfully.

## Package consumption

Consumers should install the package from the configured registry and import from the package root:

```ts
import { Button } from "kavia-design-system";
import "kavia-design-system/styles.css";
```
