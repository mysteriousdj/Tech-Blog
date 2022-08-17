const { User } = require('../models');

const userData = [
    {
        username: "mysteriousdj",
        twitter: "mysteriousdj7",
        github: "mysteriousdj",
        email: "mysteriousdj@gmail.com",
        password: "password1"
    },
    {
        username: "yikes",
        twitter: "yikesunlucky",
        github: "yikes",
        email: "yikes@gmail.com",
        password: "password2"
    },
    {
        username: "richieboi198",
        twitter: "richieboi",
        github: "richieboi",
        email: "richie@gmail.com",
        password: "password3"
    },
    {
        username: "ssshockz",
        twitter: "ssshockz",
        github: "ssshockz",
        email: "dylan@gmail.com",
        password: "password4"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;