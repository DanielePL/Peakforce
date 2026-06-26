# CLAUDE.md

## Git workflow — STRICT

- **NEVER create branches on GitHub. Work only on `main`.** Branches on the
  remote are strictly forbidden in this dev environment.
- Commit directly to `main` and push to `origin main`.
- Do not run `git push -u origin <feature-branch>`, do not open PRs, do not
  create remote branches under any circumstance.
- If work was done on a local branch, fast-forward/merge it into `main` and
  delete the branch (local and remote) before pushing.
