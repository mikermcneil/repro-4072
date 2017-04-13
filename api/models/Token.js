/**
 * Token.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  primaryKey: '_id',

  attributes: {

    _id: {
      type: 'string',
      // columnName: '_id',  //<< with or without this
    },

    objectId: {
      type: 'string',
    },

  },

};
