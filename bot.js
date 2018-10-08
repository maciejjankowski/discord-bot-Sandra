var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');


console.log("It actually worked");

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';


var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {


        switch(message) {

            case 'Sandra, are you ready?':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hell yeah, dawg'
                });
            break;

            case '!ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
        
            case 'error':
                bot.sendMessage({
                    to: channelID,
                    message: 'U mnie działa'
                });
            break;

            case 'Is this the real life?':
                bot.sendMessage({
                    to: channelID,
                    message: 'Is this just fantasy?'
                });
            break;

            case 'I don\'t get it':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://www.bing.com'
                });
            break;

            case 'All wings check in':
                bot.sendMessage({
                    to: channelID,
                    message: 'Red 3 standing by!'
                });
            break;

            case 'ADAM':

                setTimeout(function(){
                bot.sendMessage({
                    to: channelID,
                    message: 'ADAM!'
                });
                }, 2000);

                setTimeout(function(){
                bot.sendMessage({
                    to: channelID,
                    message: 'ADAM!'
                });
                }, 1000);
                
                bot.sendMessage({
                    to: channelID,
                    message: 'ADAM!'
                });
            break;

            case ('Avada Kedavra!' || 'Avada Kedavra'):
                bot.sendMessage({
                    to: channelID,
                    message: 'Expelliarmus!'
                });
            break;

            case 'XD':
                bot.sendMessage({
                    to: channelID,
                    message: 'XDDDDD'
                });
            break;

        }
    });

