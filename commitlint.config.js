module.exports = {
  extends: [
    /** prevent us from making commits that don't conform to the convention */
    "@commitlint/config-conventional",

    /** understand what lerna scopes are */
    "@commitlint/config-lerna-scopes",
  ],
};
