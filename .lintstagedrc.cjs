// @ts-check

/** @type {Record<string, string[]>} */
module.exports = {
  '*.{js,mjs,cjs,ts,tsx,astro}': ['eslint', 'prettier --write'],
  '*.{css,md,html,json,jsonc,yaml,yml}': ['prettier --write'],
};
