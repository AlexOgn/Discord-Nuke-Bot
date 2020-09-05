module.exports = {
    name:"ban",
    description:"Ибе мамата на някой",
    aliases: "None",
    usage: "? ban @User",
    execute(message, args, Discord){
        if(message.member.hasPermission('BAN_MEMBERS')){
            let member = message.mentions.members.first();
            if(!args){
                msg = new Discord.MessageEmbed()
                .setTitle("?ban @User")
                .setColor("RED")
                return message.channel.send(msg);
            }
            if(!member){
                return message.channel.send("Кажи кой да банна")
            }else{
                if(member.id == message.author.id)return message.channel.send("Маняк, има за какво да се живее");
                member.ban().then((member) => {
                    let message1 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle("Тотално ебах")
                    .setDescription(`Напрао му ибах мамата на ${member.displayName}`)
                    message.channel.send(message1);
                    let msg = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle("Тотално те ебаха")
                    .setDescription(`Изебаха те от ${member.guild.name}`)
                    member.send(msg).catch(err => console.log(err + "\nkick"));
                }).catch((error) => {
                    message.channel.send("Нещо са наиба маняк");
                    console.log(error);
                })
            }
        }else{
            message.reply("НЯМАШ ПРАВА БЕ ПЕДАЛ");
        }
    }
}
module.exports.config = {
    
}