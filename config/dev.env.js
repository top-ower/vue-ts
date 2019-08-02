'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '""',
  BASE_APP_NAME: '"/tcloud-app-back"',
  BASE_PARJECT_NAME: '"/tcloud-back"',
  PARJECT_PATH: '""'
})