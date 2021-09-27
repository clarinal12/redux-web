#!/bin/bash

set -e

npx vercel . \
  -t "${VERCEL_TOKEN}" \
  -A redux-web/vercel.json \
  -m "githubDeployment=1" \
  -m "githubOrg=HighOutputVentures" \
  -m "githubRepo=$(basename "$(git rev-parse --show-toplevel)")" \
  -m "githubCommitSha=$(git log --pretty=format:'%H' -n 1)" \
  -m "githubCommitMessage=$(git show -s --format=%s)" \
  -m "githubCommitAuthorName=kugtong33" \
  -m "githubCommitAuthorLogin=kugtong33" \
  -m "githubCommitOrg=HighOutputVentures" \
  -m "githubCommitRepo=$(basename "$(git rev-parse --show-toplevel)")" \
  -m "githubCommitRef=$(git branch --show-current)" \
  -c -f --prod
