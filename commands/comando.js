module.exports = {
  name: "comando",
  execute(message, args, cmd, client, Discord) {
    let newEmbed = new Discord.MessageEmbed()
      .setColor("#304181")
      .setTitle("Lista de comandos")
      .setDescription("Esta es la lista de mis comandos")
      .addFields(
        { name: "!ping", value: "Digo pong" },
        { name: "!clear #", value: "Borro mensajes del canal" },
        { name: "!comando", value: "mando la lista de mis comandos" },
        { name: "!postura", value: "Les saco pico" },
        { name: "!pl", value: "Con un link de Youtube reproduzco una cancion" },
        { name: "!sk", value: "Skip a la cancion" },
        { name: "!st", value: "Detengo la cancion" }
      )
      .setImage(
        'https://tlgrm.es/_/stickers/27e/927/27e9276f-09d3-365d-b95c-1c3ea157f807/3.jpg'
      )
      .setFooter("Sujeto a cambios por el Warzone muñeño");

    message.channel.send(newEmbed);
  },
};
