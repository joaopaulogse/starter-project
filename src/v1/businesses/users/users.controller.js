const { Users } = require("./users.model")
class UserController {
    constructor() {
        this.model = Users;
    }

    async store(req, res, next) {
        const response = await this.model.query().insert({
            first_name: 'test',
            last_name: 'aaa'
        })
        res.json(response);
    }

    async show(req, res, next) {
        const response = await this.model.query()
        res.json(response);
    }
}

module.exports = UserController;