function init(){
	gapi.client.setApiKey("AIzaSyBaeKarXNWMaibOcIqC-9pn5YZepNNoTG8")
	gapi.client.load("youtube", "v3", function(){
	});
}

function searchByKeyword() {
	var q=  document.getElementById("search").value;
  var results = YouTube.Search.list('snippet', {q: q, maxResults:1});
  for(var i in results.items) {
  	document.getElementById("video1").style.visibility = "visible";
  	document.getElementById("video1").style.visibility = "inline";
  	document.getElementById("video1").src = "https://www.youtube.com/embed/"+item.id.videoId;

  }
}

var search = document.getElementById("search");

 search.addEventListener('click', function() {
        searchByKeyword();
 });