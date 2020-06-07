# actions-git
[![CI](https://github.com/peter-evans/actions-git/workflows/CI/badge.svg)](https://github.com/peter-evans/actions-git/actions?query=workflow%3ACI)

A git library for GitHub Actions.

This library extracts the git command internals of [actions/checkout](https://github.com/actions/checkout) into a module.
It has then been extended with additional git commands.

## Usage

Import the package
```javascript
// javascript
const actionsGit = require('actions-git');

// typescript
import * as actionsGit from 'actions-git';
```

Execute git commands
```javascript
// javascript

// typescript
const workingDirectory = '.'
const lfs = false
const git = await actionsGit.createCommandManager(workingDirectory, lfs)
```
