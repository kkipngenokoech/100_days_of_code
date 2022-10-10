A deeper visualization of what happens under the hood of `git command`

## COMMIT ONLY SPECIFIC FILES:
`git add name-of-file && git commit -m 'commiting individual files'`

## CHANGING HISTORY
#### changing the last commit:
`git commit --ammend` that is if in your previous commit there's a file you forgot to commit and it was supposed to be part of the previous commit.

you add the file then you git ammend

For git amend never amend commits that have been pushed to remote repositories.

#### changing multiple commits:

`rebase -i` - is a command which allows us to interactively stop after each commit we’re trying to modify, and then make whatever changes we wish. We do have to tell this command which is the last commit we want to edit. For example, git rebase -i HEAD~2 allows us to edit the last two commits.

For git rebase never rebase a repository that others may work off of.

#### squashing commits
#### splitting commits

## WORKING WITH REMOTES
#### git push --force
this command is used when the remote repository contains files that your local environment doesn't, it overides the remote repo and destroys the files that are not present in your local directory but present in the remote repository.

git push --force is a very dangerous command, and it should be used with caution when collaborating with others.

#### git revert!
this undos the latest commit we just made.

###### N/B HEAD stands for the current commit

#### git push --force-with-lease
it’s a fail-safe! It checks if the branch you’re attempting to push to has been updated and sends you an error if it has.

For git push --force only use it when appropriate, use it with caution, and preferably default to using git push --force-with-lease.

#### Git reset
For git reset never reset commits that have been pushed to remote repositories.


`git rebase -i HEAD~2` - HEAD means our current commit, 2 means we can edit the last two commits.