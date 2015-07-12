var myLink = document.getElementById("clicker");

var handleTheClick = function(event) {
  // var link = this;
  var req = new XMLHttpRequest();

  req.open("get", myLink.getAttribute("href"));
  // req.open("get", link.getAttribute("href"));

  req.addEventListener("load", function(){    
    myLink.innerText = this.response;
    // link.innerText = this.response;
  });

  req.send();
  
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

// When the link is clicked, run the above code.
myLink.addEventListener("click", handleTheClick);