#!/usr/bin/env bash

echo "--------📚 API docs: extracting api surface... ----------"
yarn clean
yarn tsc -b packages

# building api docs without providing --local to make sure that the build fails
# unless everything is upto date
yarn lerna run api-report

echo "------- 📋 API docs: Generating Markdown Docs.... -------"
GH_PAGES_CFG_EXISTS=$(test -f docs/_config.yml)

if [ $GH_PAGES_CFG_EXISTS ]
then
  echo "Github pages config file DETECTED"
  echo "Copying the Github pages config file for use later"
  cp docs/_config.yml .
  echo "Finished copying the Githubc pages config file"
fi

yarn api-documenter markdown -i temp -o docs

if [ $GH_PAGES_CFG_EXISTS ]
then
  echo "Adding the Github pages config file after building the docs"
  cp _config.yml docs/_config.yml
  echo "Successfully added the Github pages config file after building the docs"
fi