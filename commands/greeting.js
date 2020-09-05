const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 50;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};
module.exports = {
    name: 'greeting',
    description: "Айде да сме живи и здрави",
    async execute(member, Canvas, Discord){
		const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
		if (!channel) return;
		
		const canvas = Canvas.createCanvas(500, 250);
		const ctx = canvas.getContext('2d');

        let bg = Math.floor(Math.random()*10);
        var background;
        if(bg > 5){
            background = await Canvas.loadImage('./images/bobar_kola.png');
        }else{
            background = await Canvas.loadImage('./images/bobar_safari.png');
        }
        

		
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

		ctx.strokeStyle = '#74037b';
		ctx.strokeRect(0, 0, canvas.width, canvas.height);

		ctx.font = '28px sans-serif';
		ctx.fillStyle = '#ff0000';
		ctx.fillText('Задара', (canvas.width / 2.5) + 100, canvas.height / 3.5);

		ctx.font = applyText(canvas, `${member.username}!`);
		ctx.fillStyle = '#ff0000';
		ctx.fillText(`${member.displayName}!`, (canvas.width / 2.5) + 100, canvas.height / 1.8);
		
		ctx.beginPath();
		ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.clip();

		const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
		ctx.drawImage(avatar, 25, 25, 200, 200);

		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

		channel.send(`Задара ${member}!`, attachment);
	}
}