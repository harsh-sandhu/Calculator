$(document).ready(()=>{
  var display="0";
  var clr=false;
  $("#C").click(()=>{
    display="0"
    clr=false;
    $("#screen").val(display);
  })
  $("#1").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="1";
    }else{
    display+="1";
  }
    $("#screen").val(display);
  })
  $("#2").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="2";
    }else{
    display+="2";
  }
    $("#screen").val(display);
  })
  $("#3").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="3";
    }else{
    display+="3";
  }
    $("#screen").val(display);
  })
  $("#4").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="4";
    }else{
    display+="4";
  }
    $("#screen").val(display);
  })
  $("#5").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="5";
    }else{
    display+="5";
  }
    $("#screen").val(display);
  })
  $("#6").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="6";
    }else{
    display+="6";
  }
    $("#screen").val(display);
  })
  $("#7").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="7";
    }else{
    display+="7";
  }
    $("#screen").val(display);
  })
  $("#8").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="8";
    }else{
    display+="8";
  }
    $("#screen").val(display);
  })
  $("#9").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="9";
    }else{
    display+="9";
  }
    $("#screen").val(display);
  })
  $("#0").click(()=>{
    if(clr){
      display="0"
      clr=false;
    }
    if(display=="0"){
      display="0";
    }else{
    display+="0";
  }
    $("#screen").val(display);
  })
  $("#plus").click(()=>{
    clr=false;
    if(display==="0"){
      display="0";
    }else{
    display+="+";
  }
    $("#screen").val(display);
  })
  $("#minus").click(()=>{
    clr=false;
    if(display==="0"){
      display="0";
    }else{
    display+="-";
  }
    $("#screen").val(display);
  })
  $("#multi").click(()=>{
    if(display==="0"){
      display="0";
    }else{
    display+="*";
  }
    $("#screen").val(display);
  })
  $("#divide").click(()=>{
    if(display==="0"){
      display="0";
    }else{
    display+="/";
  }
    $("#screen").val(display);
  })
  $("#equal").click(()=>{
    if(display=="0"){
      display="0";
    }else{
      console.log(eval(display));
      var cal=eval(display)
      display=cal.toString();
  }
  $("#screen").val(display);
  })
  $("#dot").click(()=>{
    if(parseInt(display[display.length-1])>=0&&parseInt(display[display.length-1])<10){
      display+="."
    }else{
    display+="0.";
  }
    $("#screen").val(display);
  })
})
