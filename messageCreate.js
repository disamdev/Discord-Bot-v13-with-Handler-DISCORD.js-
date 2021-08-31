/*Este código es el evento message de la v12 pero en la v13, pero lo crearemos en un archivo a parte*/
/*Tienes que crear una carpeta llamada eventos, todo así en minúscula y con esas letras exactas y dentro crear un archivo llamado messageCreate.js en el cual pondrás el código que hay a continuación*/

const { MessageEmbed } = require('discord.js'); /* Definimos el npm discord.js*/

module.exports = async (client, message) => { /*Empezamos aquí el código*/
    
    let prefix = '' /*Pon aquí el prefijo de tu bot entre las ''*/

    if(message.channel.type === 'dm') return; /* Ponemos que si el comando nos lo manda al md no haga nada */
    if(message.author.bot) return; /*Hacemos que si el comando lo pone otro bot no haga nada*/
    if(!message.content.startsWith(prefix)) return; /* Y qué si el comando no empieza por el prefix del bot no haga nada */

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase()

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command)); /*Hacemos que busque el nombre del comando al ponerlo*/
    if(cmd){ /*Si el comando que puso el usuario existe lo envía*/
    cmd.execute(client, message, args)
    }
    if(!cmd){ /*Si el comando que puso no existe hará y mandará este embed*/
        const embed = new MessageEmbed()
        
        .setAuthor(client.user.tag, client.user.displayAvatarURL())
        .setDescription(`:x: | Ese comando no existe, usa \`${prefix}help\` para ver los comandos.`)
        .setColor("RED")
        
        message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } 
        })
    }
  
}
