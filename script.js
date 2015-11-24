function init(){
	gapi.client.setApiKey("AIzaSyBaeKarXNWMaibOcIqC-9pn5YZepNNoTG8")
	gapi.client.load("youtube", "v3", function(){
		console.log("whats up");
	});

}

var firstId="";
var secondId="";
var thirdId="";

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
    
    	for(var i=0; i<r.items.length; i++){
        if(i==0){
          firstId=r.items[i].id.videoId;
          document.getElementById("firstPic").src="http://img.youtube.com/vi/"+firstId+"/3.jpg";
           document.getElementById("firstPic").addEventListener('click', function() {
            document.getElementById("vid").src="https://www.youtube.com/embed/"+firstId;
           });
        }
        else if(i==1){
          secondId = r.items[i].id.videoId;
          document.getElementById("secondPic").src="http://img.youtube.com/vi/"+secondId+"/3.jpg";
          document.getElementById("secondPic").addEventListener('click', function() {
            document.getElementById("vid").src="https://www.youtube.com/embed/"+secondId;
           });
        }
        else if(i==2){
          thirdId = r.items[i].id.videoId;
          document.getElementById("thirdPic").src="http://img.youtube.com/vi/"+thirdId+"/3.jpg";
          document.getElementById("thirdPic").addEventListener('click', function() {
            document.getElementById("vid").src="https://www.youtube.com/embed/"+thirdId;
           });
        }
    	}
  });
 
}




window.onload = function(){

	init();

var search = document.getElementById("searchButton");

 search.addEventListener('click', function() {
        searchByKeyword();
 });

}