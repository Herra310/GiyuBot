module.exports = {
  name: "postura",
  description: "Si",
  execute(message, args, cmd, client, Discord) {
    
    let listaPostura = [
      {
        name: "Cuarta Postura", value: "Golpe de marea", img: "https://media1.tenor.com/images/8b75b306e596831ef68786aeed4157e0/tenor.gif"
      },
      {
        name: "Primera Postura", value: "Corte de superficie", img: "https://media1.tenor.com/images/b87d1518e70ca444e5bba705789be74f/tenor.gif?itemid=14697054"
      },
      {
        name: "Undecima Postura", value: "Calma", img: "https://i.pinimg.com/originals/53/cb/86/53cb865f01cd3447306171ad941d3e11.gif"
      },
      {
        name: "Postura Secreta", value: "Nalgada con mano mojada", img: "https://media1.tenor.com/images/20a169b205f43ee4debdce8e871e54e2/tenor.gif?itemid=15506680"
      },
    ];

    let r = Math.floor(Math.random()*(listaPostura.length));

    let pos = listaPostura[r];

    let newEmbed = new Discord.MessageEmbed()
      .setColor("#304181")
      .setTitle("Respiracion de Agua")
      .addFields(
        { name: pos.name, value: pos.value },
      )
      .setImage(
        pos.img
      )
    message.channel.send(newEmbed);
  },
};