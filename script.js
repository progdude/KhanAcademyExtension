function init(){
	gapi.client.setApiKey("AIzaSyBaeKarXNWMaibOcIqC-9pn5YZepNNoTG8")
	gapi.client.load("youtube", "v3", function(){
		console.log("whats up");
	});
}

function searchByKeyword() {
	var q=  document.getElementById("search").value;
  var results = gapi.client.youtube.search.list({
  	part:"snippet",
  	maxResults: 1,
  	channelId: "UC4a-Gbdw7vOaccHmFo40b9g"
  });

  results.execute(function(response){
  	var r = response.result;
  	console.log(r.items.length)
  	for(var i=0; i<r.items.length; i++){
  		console.log(r.items[i].id.videoId);
  		document.getElementById("video1").style.visibility = "visible";
  		document.getElementById("video1").style.visibility = "inline";
  		document.getElementById("video1").src = "https://www.youtube.com/embed/"+r.items[i].id.videoId;
  		
  	}
  })

/*  	document.getElementById("video1").style.visibility = "visible";
  	document.getElementById("video1").style.visibility = "inline";
  	document.getElementById("video1").src = "https://www.youtube.com/embed/"+item.id.videoId;*/

  
}

window.onload = function(){

	init();

var search = document.getElementById("searchButton");

 search.addEventListener('click', function() {
        searchByKeyword();
 });

}