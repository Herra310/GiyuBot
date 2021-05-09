module.exports = {
    name: "ping",
    description: "Respondo con un ping!",
    execute(client, message, args) {
        message.channel.send('pong!');
    }
}