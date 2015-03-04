global.$ = $;

var fs = require('fs');
var Q = require('q');
var gi = require('google-images');

var fs_readdir = Q.denodeify(fs.readdir);
var musicpath = '/Users/user/Downloads/WAV/';
var promise = fs_readdir(musicpath);

/*fs.readdir(musicpath, function(err, files) {
  tracks = files;
});*/

var gsearch = Q.denodeify(gi.search);
//var text = 'All Or Nothing feat Little Nikki Original Mix';

function searchImages(name) {
  console.log(name);
  gsearch(name).then(
    function(data) {
      $('<img/>',{
        'class':'preview',
        src: data[0].url
      }).appendTo('.images');
    }, function() {
      console.log('error');
    }
  );
}


promise.then(function(data) {
  $.each(data, function(i, trackname) {
    trackname = trackname.slice(trackname.indexOf('_')+1);
    var request = trackname.replace(/_/g,' ').split('.wav')[0];
    searchImages(request);
  });
  $('.files').html(data.join(' \n'));
},console.error);

$(function() {


});
