#!/usr/bin/env bash

echo "---- Linting workspace: eslint src --ext ts,js,tsx,jsx-----"

yarn eslint src --ext ts,js,tsx,jsx
