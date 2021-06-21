const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("./config.json");

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
});

client.on("message", async (message) => {
  const isInvite = async (guild, code) => {
    return await new Promise((resolve) => {
      guild.fetchInvites().then((invites) => {
        for (const invite of invites) {
          if (code === invite[0]) {
            resolve(true);
            return;
          }
        }
        resolve(false);
      });
    });
  };

  const { guild, member, content } = message;

  if (content.includes("discord.gg/")) {
    const code = content.split("discord.gg/")[1];

    const servernvite = await isInvite(guild, code);
    if (serverInvite) {
      message.delete();
      message.channel.send(`${message.author}, advertising here isn't allowed!`);
    }
  }
});

client.login(token);
