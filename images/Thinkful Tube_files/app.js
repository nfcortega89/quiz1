$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyA0AkXc5LXvVAxPyBIOcLqpboV5JUW5ixA',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    console.log(data);
    showResults(data);
  });
}

function showResults(results){
  var html = "";
$.each(results, function(index, value){
  html += "<p>" + results.items[index].snippet.channelTitle + "</p>";
  console.log(html);
  $('#search-results').append(html);
});
}