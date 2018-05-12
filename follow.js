var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

var params = {
	q: '#witcher3',
  	count: 20,
  	result_type: 'recent',
  	lang: 'en'
}

T.get('search/tweets', params, function(err, data, response) {
  if(!err){
    for(let i = 0; i < data.statuses.length; i++){
      let id = { id: data.statuses[i].id_str }
      let screen_name = data.statuses[i].user.screen_name;
      T.post('friendships/create', {screen_name}, function(err, res){
        if(err){
          console.log(err);
       } else {
        console.log(screen_name, ': **FOLLOWED**');
      }
    });
    }
  } else {
    console.log(err);
  }
});