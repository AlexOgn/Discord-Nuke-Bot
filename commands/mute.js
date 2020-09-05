module.exports = {
    name:"mute",
    description:"Да не диша",
    aliases: "None",
    usage: "?mute @User",
    execute(message, args, Discord){
        var naebalise = false;
        let member = message.mentions.members.first();
        const muteRole = member.guild.roles.cache.find(role => role.name === "Muted");
        if(!muteRole)return message.channel.send("Айде направи роля Muted");
        member.roles.add(muteRole).catch(err => {
            console.log(err);
            message.channel.send("Нещо си иба мамата");
            naebalise = true;
        });
        if(!naebalise){
            let msg = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(member.displayName + " няма да говори против властта повече")
            message.channel.send(msg);    
        }
        
    }
}