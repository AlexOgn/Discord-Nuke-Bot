const Discord = require('discord.js');
const client = new Discord.Client();
const Canvas = require('canvas');
const moment = require('moment');
const fetch = require('node-fetch');
const {token, prefix} = require('./config.json');

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', ()=>{
    console.log("Ti si shefe");
});

client.on('guildMemberAdd', async member => {
	if(member.guild){
		autoRole = undefined;
	}
	if(!autoRole) autoRole="▬Malki otshelnici▬";
    var role = member.guild.roles.cache.find(role => role.name === autoRole);
    if(role != null){
        member.roles.add(role).catch(err => console.log(err));
    }
    
	client.commands.get('greeting').execute(member, Canvas, Discord);
});

client.on("message", message => {
    if(message.author.bot)return;
    if(!message.content.startsWith(prefix))return;
    const args = message.content.trim().substr(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    
    switch(command){
        case "help":client.commands.get('help').execute(message, args, Discord); break;
        case "kick":client.commands.get('kick').execute(message, args, Discord); break;
        case "ban":client.commands.get('ban').execute(message, args, Discord); break;
        case "mute":client.commands.get('mute').execute(message, args, Discord); break;
        case "whois":client.commands.get('whois').execute(message, args, Discord, moment); break;
        case "purge":client.commands.get('purge').execute(message, args);break;
        case "meme":client.commands.get('meme').execute(message, args, Discord, fetch);break;
        case "nuke":client.commands.get('nuke').execute(message, args, Discord);break;
    }

});
client.login(token);
