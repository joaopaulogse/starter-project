const { Model } = require("objection");


class Users extends Model {

    static get tableName() {
        return 'users';
      }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['first_name', 'last_name'],
            
            properties: {
              id: { type: 'integer' },
              first_name: { type: 'string', minLength: 1, maxLength: 255 },
              last_name: { type: 'string', minLength: 1, maxLength: 255 },
            }
          };
    }
}

module.exports = {Users};