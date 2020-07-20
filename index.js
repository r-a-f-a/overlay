const tmi = require('tmi.js');

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true
  },
  channels: ['saintrafix']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  
  // // if(tags.badges.moderator){
    console.log('channel', channel)
    console.log('tags', tags)
    console.log('message', message)
    console.log('self', self)
  //   console.log(`${tags['display-name']}: ${message}`);
  // // }
  
});


