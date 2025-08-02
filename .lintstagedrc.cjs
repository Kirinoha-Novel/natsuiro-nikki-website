// @ts-check

/** @type {Record<string, string[]>} */
module.exports = {
  '*.{js,mjs,cjs,ts,tsx,astro}': ['eslint', 'npx prettier --write'],
  '*.{md,html,json,yaml}': ['npx prettier --write'],
};
