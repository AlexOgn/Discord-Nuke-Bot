module.exports = {
    name:"kick",
    description:"Ибе мамата на някой",
    aliases: "None",
    usage: "? kick @User",
    execute(message, args, Discord){
        if(message.member.hasPermission('KICK_MEMBERS')){
            let member = message.mentions.members.first();
            if(!args){
                msg = new Discord.MessageEmbed()
                .setTitle("?kick @User")
                .setColor("RED")
                return message.channel.send(msg);
            }
            if(!member){
                return message.channel.send("Кажи кой да кикна")
            }else{
                if(member.id == message.author.id)return message.channel.send("Маняк не може");
                member.kick().then((member) => {
                    let message1 = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle("Kicked")
                    .setDescription(`Напрао му ибах мамата на ${member.displayName}`)
                    message.channel.send(message1);
                    let msg = new Discord.MessageEmbed()
                    .setColor("RED")
                    .setTitle("Kicked")
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