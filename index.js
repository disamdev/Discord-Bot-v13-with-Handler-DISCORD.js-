const Discord = require("discord.js") // Definimos el package de discord.js

const intents = new Discord.Intents(numero) // Aquí ponemos los intents del bot, para obtenerlos ve a /ziad87.net/intents/ y agarra los intents que tu quieras y agarra el número que hay abajo y ponlo, si quieres seleccionar todos ya te doy la opción, pon entre esos () el número 32767

const client = new Discord.Client({ intents }) // Nombramos a lo que definimos arriba, los intents

const fs = require('fs') // Definimos al npm fs // Tendréis que instalarlo poniendo npm install fs

//Handler//

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js')); // Definimos que en la carpeta de comandos los archivos que terminen en .js los ejecute

for (const file of commandFiles) { // Definimos que en la carpeta comandos ejecute los comandos que haya
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

const { readdirSync } = require('fs') /*Definimos el npm fs*/

for(const file of readdirSync('./eventos')){
    if(file.endsWith('.js')){
        let fileName = file.substring(0, file.length - 3)
        
        let fileContents = require(`./eventos/${file}`)
        
        client.on(fileName, fileContents.bind(null, client))
    }
}

client.login("TOKEN") // Aquí debes poner tu token || Si estás en replit pon client.login(process.env.TOKEN) en esta línea si tienes guardado el token en los secrets, pero donde dice process.env.TOKEN, donde pone token pon el nombre que le tengas a tu secret, si es TOKEN, dejálo así

//PD: Si tienen algún error o problema contáctenme por Discord: ⚡Disam⚡#4234
