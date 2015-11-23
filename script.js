var count=0;

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
  	maxResults: 3,
  	q: q,
  	channelId: "UC4a-Gbdw7vOaccHmFo40b9g"
  });

  results.execute(function(response){
  	var r = response.result;
  	if(count==1){
    	for(var i=0; i<r.items.length; i++){
    		var iframe = document.createElement('iframe');
    		iframe.src = 'https://www.youtube.com/embed/'+r.items[i].id.videoId;
     		document.body.appendChild(iframe);	
    	}
  }

  else {
      var iframes = document.getElementsByTagName('iframe');
      for (var i = 0; i < iframes.length; i++) {
        console.log(r.items[i].id.videoId);
          iframes[i].src = 'https://www.youtube.com/embed/'+r.items[i].id.videoId;
          console.log(iframes[i].src);
      }
  }

  })
  count++;
}



window.onload = function(){

	init();

var search = document.getElementById("searchButton");

 search.addEventListener('click', function() {
        searchByKeyword();
 });

}