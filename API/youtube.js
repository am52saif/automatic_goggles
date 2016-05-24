var config = require('../config');
var Youtube = require('youtube-node');
var youTube = new Youtube();
youTube.setKey(config.youtube);
youTube.addParam('relevanceLanguage', 'en');

var vids = [];

var videos = function(searchTerm,callback){
  youTube.search(searchTerm,5,function(error, result) {
    if (error) {
      console.log(error);
      }
      else {
        for(var i=0;i<result["items"].length;i++){
          vids.push({
            video_id: result["items"][i].id.videoId,
            date: result["items"][i].snippet.publishedAt,
            title: result["items"][i].snippet.title,
            description: result["items"][i].snippet.description
          });
        }
        callback(vids);
      }
  });
};

module.exports = videos;
