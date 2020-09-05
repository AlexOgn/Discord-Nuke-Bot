module.exports = {
    name:"whois",
    description:"Да се знае кой кой е",
    aliases: "None",
    usage: "?whois @User",
    execute(message, args, Discord, moment){
        const member = message.mentions.members.first();

        // Member variables
        const joined = member.joinedAt;
        let roli = [];
        let rr = "";
        const roles = member.roles.cache
            .filter(r => r.id !== message.guild.id)
            .map(r => roli.push("<@&" + r.id + "> "));
        for(let i=0;i<roli.length;i++){
            rr += roli[i];
        }
        // User variables
        const created = member.user.createdAt;
        const embed = new Discord.MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor("RED")
            .addField('Име', `\`\`\` ${member.displayName}\`\`\``, true)
            .addField('Таг', `\`\`\` ${member.user.tag}\`\`\``, true)
            .addField('Кога е станал бобар', `\`\`\` ${joined}\`\`\``)
            .addField(`Роли [${roli.length}]`, rr)
            .addField('Направен', `\`\`\` ${created}\`\`\``)
            .setTimestamp()
        message.channel.send(embed);
        
    }
}