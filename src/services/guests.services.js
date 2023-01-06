const {Guests} = require('../models')

class GuestsServices {
    static async create(newGuest){
        try {
            const result = await Guests.create(newGuest)
            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = GuestsServices