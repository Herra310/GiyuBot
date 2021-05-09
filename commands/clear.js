module.exports = {
  name: "clear",
  description: "Borra los mensajes",
  async execute(message, args, cmd, client, Discord) {
    if (!args[0])
      return message.reply(
        "Porfavor dime una cantidad de mensajes para borrar :woozy_face: (puede ser de 1 a 20) "
      );
    else if (isNaN(args[0]))
      return message.reply(
        "Tienes que escribirme un numero, no se admiten otros caracteres! :no_entry_sign: "
      );
    if (args[0] > 20 || args[0] < 1)
      return message.reply("tiene que ser entre 1 y 20 krnal >:(");

    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  }
};
