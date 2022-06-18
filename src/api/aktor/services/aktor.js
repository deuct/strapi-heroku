'use strict';

/**
 * aktor service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::aktor.aktor');
