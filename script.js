function init(){
	gapi.client.setApiKey("AIzaSyBaeKarXNWMaibOcIqC-9pn5YZepNNoTG8")
	gapi.client.load("youtube", "v3", function(){
		
	});

}

var firstId="";
var secondId="";
var thirdId="";

var titles = [];

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
          titles[0] = r.items[i].snippet.title;
           document.getElementById("firstPic").addEventListener('click', function() {
            document.getElementById("vid").src="https://www.youtube.com/embed/"+firstId;
           });
        }
        else if(i==1){
          secondId = r.items[i].id.videoId;
          document.getElementById("secondPic").src="http://img.youtube.com/vi/"+secondId+"/3.jpg";
          titles[1] = r.items[i].snippet.title;
          document.getElementById("secondPic").addEventListener('click', function() {
            document.getElementById("vid").src="https://www.youtube.com/embed/"+secondId;
           });
        }
        else if(i==2){
          thirdId = r.items[i].id.videoId;
          document.getElementById("thirdPic").src="http://img.youtube.com/vi/"+thirdId+"/3.jpg";
          titles[2]=r.items[i].snippet.title;
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




document.getElementById("firstPic").addEventListener('mouseout', function(){
  document.getElementById("tool").innerHTML = "";
});

document.getElementById("secondPic").addEventListener('mouseout', function(){
  document.getElementById("tool").innerHTML = "";
});

document.getElementById("thirdPic").addEventListener('mouseout', function(){
  document.getElementById("tool").innerHTML = "";
});

 search.addEventListener('click', function() {
        searchByKeyword();
 });

}


document.getElementById("firstPic").addEventListener('mouseover', function(){
  document.getElementById("tool").innerHTML = titles[0];
});


document.getElementById("thirdPic").addEventListener('mouseover', function(){
  document.getElementById("tool").innerHTML = titles[2];
});


document.getElementById("secondPic").addEventListener('mouseover', function(){
  document.getElementById("tool").innerHTML = titles[1];
});