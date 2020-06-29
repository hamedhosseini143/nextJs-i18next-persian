/*
  Do not copy/paste this code. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig

const localeSubpathVariations = {
  none: {},
  foreign: {
    fa: 'fa',
  },
  all: {
    en: 'en',
    fa: 'fa',
  },
}

module.exports = new NextI18Next({
  otherLanguages: ['fa'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
})