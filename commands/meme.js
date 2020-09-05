module.exports = {
    name:"meme",
    description:"Да са хилиш",
    aliases: "None",
    usage: "?meme",
    async execute(message, args, Discord, fetch){
        let msg = await message.channel.send("Скивай");
        fetch('https://meme-api.herokuapp.com/gimme')
        .then(res => res.json())
        .then(json => {
            let embed = new Discord.MessageEmbed()
            .setTitle(json.title)
            .setURL(json.postLink)
            .setImage(json.url)
            .setFooter(`Subreddit: ${json.subreddit}`)
                    
            msg.edit(embed)
        })
        .catch(err => message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Нещо си иба мамата")
            .setDescription(err)
            .setColor("RED")
        ));
    }
}
module.exports.config = {
    
}