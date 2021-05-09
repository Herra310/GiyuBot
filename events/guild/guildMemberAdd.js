module.exports = (Discord, client, member) => {
    var welcomeMsg = [
      `Bienvenido <@${member.user.id}> al servidor!`,
      `No mames es el mismisimo <@${member.user.id}> bienvenido al servidor!`,
      `Que hongo <@${member.user.id}> pasala bien!`
    ];
    var rls= [ 'Chad', '699086372136550420'];
    var cls= [ 'lobby', 'bienvenida'];

    let welcomeRole = member.guild.roles.cache.find((role) => rls.includes(role.name));
    let channel= member.guild.channels.cache.find((ch) => cls.includes(ch.name));
    console.log(channel);
    console.log(welcomeRole);
    member.roles.add(welcomeRole);
    let num = Math.floor(Math.random() * welcomeMsg.length);
    channel.send(welcomeMsg[num]);
  
}
