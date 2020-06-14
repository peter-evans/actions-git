import * as actionsGit from '../lib/actions-git'

describe('actions-git tests', () => {
  it('creates a GitCommandManager instance', async () => {
    const workingDirectory = '.'
    const lfs = false
    const git = await actionsGit.createGitCommandManager(workingDirectory, lfs)
    expect(git).toBeTruthy()
  })
})
