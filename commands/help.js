module.exports = {
    name:"help",
    description:"Shows help menu",
    aliases: "None",
    usage: "?help",
    execute(message, args, Discord){ 
        let helpMessage = new Discord.MessageEmbed()
        .setTitle("Ot6elnik help menu")
        .setDescription("Всичките команди са тук")
        .setColor("RED")
        .addField("Help", "Показва тая простотия")
        .addField("Kick", "Ибе майката на някой")
        .addField("Ban", "Тотално ибе майката на някой")
        .addField("Whois", "Да се знае кой кой е")
        .addField("Purge", "Ако някой говори против властта")
        .addField("Meme", "Важното е да е fun")
        message.channel.send(helpMessage);
    }
}