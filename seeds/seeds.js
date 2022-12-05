const sequelize = require("../config/connection");
const { Comment, Post, User } = require("../models");

let Users = [
    {
        username: "JohnHammy",
        email: "johnhammy@gmail.com",
        password: "Dogsdogs1" 
    },
    {
        username: "EvanPeters45",
        email: "evanpeters@gmail.com",
        password: "Catscats4" 
    },
    {
        username: "LocoMotive55",
        email: "Choochoo@gmail.com",
        password: "iliketrains" 
    }
];

let Posts = [
    {
        title: "Why is my application not deploying?",
        content: "So I'm having an issue, I can't deploy to Heroku? Someone please help!"
    },
    {
        title: "Check out my website!",
        content: "Hey guys I just made this website, check it out at this url!"
    },
    {
        title: "Did Elon Musk really buy Twitter?",
        content: "I've been quarrantining since December 2019, I missed every world event since then. What did I miss?"
    }
];

let Comments = [
    {
        content: "Wow good work!"
    },
    {
        content: "No way!"
    },
    {
        content: "That's crazy."
    },
    {
        content: "I sent you a message!"
    },
    {
        content: "Please remove this post."
    },
    {
        content: "I'm impressed!"
    },
];

const runSeeds = async () => {
    await sequelize.sync({ force: true})
    const users = await User.bulkCreate(Users,
        {
            individualHooks: true,
            returning: true
        }
    )
    for(let seedPost of Posts) {
        await Post.create({
            ...seedPost,
            user_id: users[Math.floor(Math.random()* users.length)].id
        })
    }

    for(let seedComment of Comments) {
        let posts = await Post.findAll();
        await Comment.create({
            ...seedComment,
            post_id: posts[Math.floor(Math.random()* posts.length)].id,
            user_id: users[Math.floor(Math.random()* users.length)].id
        })
    }


    process.exit(0);
};

runSeeds();