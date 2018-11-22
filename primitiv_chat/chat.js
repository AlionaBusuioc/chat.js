function sendMessage(){
  //alert(); 1)find input
  var input = document.querySelector('.message-form input');
  console.log(input);
  //2)read value
  var text = input.value;
  //3) find div.messages
  var div = document.querySelector('.messages');
  //3.a) process messages
  text = text.replace(";)","<img src='images/Emoji-Blushing-icon.png'");
  text = text.replace(":(","<img src='images/Emotes-face-sad-icon.png'");
  text = text.replace(":)","<img src='images/Emotes-face-smile-icon.png'");
  //4) add text to div
  div.innerHTML +=
  "<p>" +
  text +
  "</p>";
//  console.log(div);
//5)delete text from input
input.value = "";

}
// setTimeout(f(),period)
//setInterval(f(),period) - lucreaza ca ciclu
//clearTimeout(f(),period)
//clearInterval(f(),period)
function typing(){
  //1)find div
  var div = document.querySelector('.typing');
  //2)put image
  div.innerHTML = "<img src='images/loading.gif'>";
  //3)remove animation after 3 seconds
  setTimeout(stoppedTyping, 3000);//se masoara in milisecunde
  //console.log("...")
}
function stoppedTyping(){
  //1)find div
  var div = document.querySelector('.typing');
  //2) put image
  div.innerHTML="";
}
function stat(){
st = document.getElementById('st');
input = document.querySelector('.message-form input');
st.textContent = 99 - input.value.length;
if(input.value.length == 99){
  alert('buy premium for 4.99$');
}
}
