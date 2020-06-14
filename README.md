# actions-git
[![CI](https://github.com/peter-evans/actions-git/workflows/CI/badge.svg)](https://github.com/peter-evans/actions-git/actions?query=workflow%3ACI)

A git library for GitHub Actions.

This library extracts the git command internals of [actions/checkout](https://github.com/actions/checkout) into a module.
It has then been extended with additional git commands.

## Usage

```
npm install @peter-evans/actions-git
```

```typescript
import * as actionsGit from '@peter-evans/actions-git';
```

```typescript
const workingDirectory = '.'
const lfs = false
const git = await actionsGit.createGitCommandManager(workingDirectory, lfs)

await git.fetch('my-branch')
```
