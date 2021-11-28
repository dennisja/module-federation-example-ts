#!/usr/bin/env bash

echo "---- Linting package: eslint src --ext ts,js,tsx,jsx-----"

yarn lerna run lint --stream --concurrency 1