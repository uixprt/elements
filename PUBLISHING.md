# Publishing @uixprt/elements to npm

This guide explains how to publish the web components package to npm registry or a private artifactory.

## Prerequisites

- npm account (create at https://www.npmjs.com/signup)
- Logged in via `npm login`
- Package name `@uixprt/elements` must be available or you need to use a scope you own

## Publishing to npm Registry

### 1. Update Package Name (if needed)

If `@uixprt/elements` is taken, update the scope in `package.json`:

```json
{
  "name": "@your-username/elements",
  ...
}
```

### 2. Ensure Package is Ready

```bash
cd /mnt/shared/projects/A/elements

# Build the package
npm run build

# Verify package contents
npm pack --dry-run
```

### 3. Login to npm

```bash
npm login
```

### 4. Publish

```bash
# Publish as public package (free)
npm publish --access public

# Or publish as private package (requires paid plan)
npm publish
```

### 5. Version Updates

For future updates:

```bash
# Patch version (0.1.0 -> 0.1.1)
npm version patch

# Minor version (0.1.0 -> 0.2.0)
npm version minor

# Major version (0.1.0 -> 1.0.0)
npm version major

# Then publish
npm publish --access public
```

## Publishing to Private Registry/Artifactory

### 1. Configure Registry

Add to `.npmrc` in your project or home directory:

```
@a:registry=https://your-registry.com/repository/npm-hosted/
//your-registry.com/repository/npm-hosted/:_authToken=${NPM_TOKEN}
```

Or configure globally:

```bash
npm config set @a:registry https://your-registry.com/repository/npm-hosted/
npm config set //your-registry.com/repository/npm-hosted/:_authToken YOUR_TOKEN
```

### 2. Publish to Private Registry

```bash
npm publish --registry https://your-registry.com/repository/npm-hosted/
```

## Updating Starterkit to Use Published Package

Once published, update the starterkit dependencies:

### 1. Update package.json files

Replace the file reference with the published version:

**packages/design-system/package.json:**
```json
{
  "dependencies": {
    "@uixprt/elements": "^0.1.0"  // Instead of "file:../../../elements"
  }
}
```

### 2. Reinstall Dependencies

```bash
cd /mnt/shared/projects/A/starterkit
npm install
# or
pnpm install
```

### 3. Update Imports

No code changes needed! The imports remain the same:
```typescript
import '@uixprt/elements';
```

## Benefits of Publishing

1. **Version Control** - Semantic versioning for better dependency management
2. **Distribution** - Easy to share with other projects
3. **CI/CD Integration** - Automated builds can pull from registry
4. **Private Packages** - Keep internal components secure with private registry
5. **Dependency Management** - npm/pnpm handle updates automatically

## Package Information

Current package details from `elements/package.json`:
- **Name:** @uixprt/elements
- **Version:** 0.1.0
- **License:** MIT
- **Type:** Module (ESM + CommonJS)
- **Exports:**
  - Main: `./dist/index.js`
  - SVG Icon: `./dist/svg-icon.js`
  - Button: `./dist/button.js`

## Automation with GitHub Actions

Create `.github/workflows/publish.yml` in elements repo:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Then publish by creating a GitHub release:
```bash
git tag v0.1.0
git push origin v0.1.0
# Create release on GitHub
```
