/**
 * Cards.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    image: {
      type: 'string',
      required: true,
    },
    name:{
      type: 'string',
      required: true,
    },
    cardNumber: {
      type: 'string',
      required: true,
    },
    collection:{
      type: 'string',
      required: true,
    },
    series: {
      type: 'string',
      required: true,
    },
    releaseDate:{
      type: 'ref',
      columnType: 'datetime',
    },

  },

};

