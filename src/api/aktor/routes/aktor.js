'use strict';

/**
 * aktor router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::aktor.aktor');
