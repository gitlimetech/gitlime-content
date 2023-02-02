'use strict';

/**
 * website-menu service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-menu.website-menu');
