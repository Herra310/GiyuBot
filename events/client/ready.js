module.exports = (Discord, bot) => {
  console.log("Giyu esta en linea!");
  const status = [
    `Minecraft`,
    `League of Legends`,
    `Terraria`,
    `Ser feliz`,
    `Rocket League`,
    `que me quieren`
  ];
  let index = 0;
  bot.user.setActivity('Youtube', { type: "WATCHING"}).catch(console.error); 
  // este solo es el status cuando arranca el bot, este no vuelve a salir

  // cambia los estados con respecto a un intervalo 
  setInterval(()=>{
    if(index === status.length) index = 0;
    
    const s = status[index];
    bot.user.setActivity(s).catch(console.error);
    index++;
  }, 300000); //5 minutos en ms
};
