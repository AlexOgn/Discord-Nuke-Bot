module.exports = {
    name: "purge",
    description: "Маха съобщения против властта",
    usage: "?purge n",
    aliases: "none",
    execute(message, args){
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send("НЯМАШ ПРАВА БЕ ПЕДАЛ");
    
        let deleteAmount;

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Кажи колко сакаш') }

        if (parseInt(args[0]) > 100) {
            return message.reply('Ай сиктир не може повече от 100')
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        message.reply(`Наебах ***${deleteAmount}*** съобщения.`);
        
    }
}