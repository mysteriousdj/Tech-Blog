const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: "yes! i totally agree with you!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "yes yes yes!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "wow! thats cool"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;