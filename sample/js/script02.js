$(function(){
  
  
  $("#button01").on("click",function(){
    $("#content").text("ペンギン可愛いよね");
  })

  $("#button02").on("click",function(){
    $("#content").html("<h2>htmlタグも使えるよ</h2>");
  })

  $("#button03").on("click",function(){
    $("#content").append("<p>繁殖</p>");
  })

  //ここからjavascriptの話

  let txt1 = "肩こりのお悩み相談室はこちら";
  let txt2 = "0120-xxxx-xxxx";
  let txt3 = "メールはこちらから";

  let num1 = 100;
  let num2 = 50;
  let num3 = "50";

  $("#button04").on("click",function(){
    $("#content").text(txt1 + txt2 + txt3);
  })

  $("#button05").on("click",function(){
    $("#content").text(num1 + num2 + num3);
  })
  

});