function responsiveTopNavigation(){
  var x = document.getElementById("topNav");
  if(x.className == "navClass" ){
    x.className += " responsive";
  }else{
    x.className = "navClass"
  }
}