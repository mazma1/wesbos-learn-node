GIT_HOOK_DIR=".git/hooks"

if [ ! -d "$GIT_HOOK_DIR" ]; then
  exit 0
fi

if [ -d "$GIT_HOOK_DIR" ]; then
  npm run add-hook
fi