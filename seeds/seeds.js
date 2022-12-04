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

const runSeeds = async () => {
    await sequelize.sync({ force: true})
    const users = await User.bulkCreate(users,
        {
            individualHooks: true,
            returning: true
        }
    )

    for(let seedPost of Posts) {
        await Post.create({
            ...seedPost,
            user_id: Users[Math.floor(Math.random()* Users.length)].id
        })
    }
    process.exit(0);
};

runSeeds();