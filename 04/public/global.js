var myLink = document.getElementById("clicker");

var handleTheClick = function(event){
  var thisLink = this;
  var typed = document.getElementById("word").value
  
  var req = new XMLHttpRequest();

  req.open("get", "/" + typed);

  req.addEventListener("load", function(){    
    thisLink.innerText = this.response;
  });

  req.send();
  
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

// When the link is clicked, run the above code.
myLink.addEventListener("click", handleTheClick);