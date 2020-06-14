import {createCommandManager, IGitCommandManager} from './git-command-manager'
export {IGitCommandManager} from './git-command-manager'

export async function createGitCommandManager(
  workingDirectory: string,
  lfs: boolean
): Promise<IGitCommandManager> {
  return await createCommandManager(workingDirectory, lfs)
}
