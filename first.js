var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var butts_algos=document.querySelectorAll(".algos button");


var divs=[];
var div_sizes=[];
var margin_size;
var cont=document.getElementById("array_container");

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);
function generate_array()
{
cont.innerHTML="";
for(var i=0;i<array_size;i++)
{

 div_sizes[i]=Math.floor(Math.random() * 450 ) + 10;
 divs[i]=document.createElement("div");
 cont.appendChild(divs[i]);
 margin_size=0.5;
 divs[i].style.width=700/(array_size-(2*margin_size))+"px";
 divs[i].style.height=div_sizes[i]+"px";
 divs[i].style.margin=margin_size+"px";
 divs[i].style.backgroundColor="#03a1fc";

}
}
function update_array_size()
{
array_size=inp_as.value;
generate_array();
}
window.onload=update_array_size();

for(var i=0;i<butts_algos.length;i++)
{
butts_algos[i].addEventListener("click",runalgo);
}
function disable_buttons()
{
for(var i=0;i<butts_algos.length;i++)
{
 butts_algos[i].classList=[];
 butts_algos[i].classList.add("butt_locked");

 butts_algos[i].disabled=true;
 inp_as.disabled=true;
 inp_gen.disabled=true;
 inp_aspeed.disabled=true;

}
return true;
}

function runalgo()
{
if(disable_buttons())
{
console.log("disabled");
}
this.classList.add("butt_selected");
switch(this.innerHTML)
{
 case "Bubble":Bubble();
                 break;
 case "Selection":Selection_sort();
                 break;
 case "Insertion":Insertion();
                 break;
 case "Merge":Merge();
                 break;
 case "Quick":Quick();
                 break;
 case "Heap":Heap();
                 break;
}
}
var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
var array_speed=inp_aspeed.value;
switch(parseInt(array_speed))
{
 case 1: speed=1;
         break;
 case 2: speed=50;
         break;
 case 3: speed=100;
         break;
 case 4: speed=1000;
         break;
 case 5: speed=10000;
         break;
}

delay_time=10000/(Math.floor(array_size/10)*speed);
}

var c_delay=0;
var delay_time=10000/(Math.floor(array_size/10)*speed);
function div_update(cont,height,color)
{

window.setTimeout(function(){
cont.style.width=750/(array_size-(2*margin_size))+"px";
cont.style.height=height+"px";
cont.style.backgroundColor=color+"";
cont.style.margin=margin_size+"px";
},c_delay+=delay_time);

}


function enable_buttons()
{

 window.setTimeout(function(){


   for(var i=0;i<butts_algos.length;i++)
 {
   butts_algos[i].disabled=false;
 }
     inp_as.disabled=false;
     inp_gen.disabled=false;
     inp_aspeed.disabled=false;
},c_delay+=delay_time);

}
