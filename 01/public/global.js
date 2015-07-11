var req = new XMLHttpRequest();

// For 'Exercise 2', you will modify this line:
req.open("get", "/info1");

req.addEventListener("loadstart", function(){
  console.log("loadstart");
});

req.addEventListener("load", function(){
 
  if (this.response == "yes") {
    alert("yay!");
  } else {
    alert("aw, shucks");
  }
});

req.send();