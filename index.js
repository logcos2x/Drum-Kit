for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var btn=this.innerHTML;
    play(btn);
    buttonAnimation(btn);
  });
}
document.addEventListener("keydown", function(event){
    play(event.key);
    buttonAnimation(event.key);
})
function play(btn) {
  var audio;
  switch (btn) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}
function buttonAnimation(key) {
    var btn = document.querySelector("." + key);
    btn.classList.add("pressed");
    setTimeout(function(){
      btn.classList.remove("pressed");
    }, 100);
  }