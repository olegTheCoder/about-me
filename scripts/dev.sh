#!/usr/bin/env bash
# Запуск dev-сервера с корректным PATH для Node (nvm не загружается в неинтерактивном shell Cursor)
NODE_ROOT="${HOME}/.nvm/versions/node/v22.15.0"
if [[ ! -x "${NODE_ROOT}/bin/node" ]]; then
  # fallback: любая установленная версия
  for v in v25.1.0 v24.11.0 v18.12.0; do
    if [[ -x "${HOME}/.nvm/versions/node/${v}/bin/node" ]]; then
      NODE_ROOT="${HOME}/.nvm/versions/node/${v}"
      break
    fi
  done
fi
export PATH="${NODE_ROOT}/bin:${PATH}"
cd "$(dirname "$0")/.." && npm run dev
