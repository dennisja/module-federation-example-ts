#!/usr/bin/env bash

echo "---- Running workspace tests ------"

yarn lerna run test --stream --concurrency 1