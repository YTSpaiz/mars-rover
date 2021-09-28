canvas = document.getElementById("mycanvas");
color = "red";
ctx = canvas.getcontext("2d");
ctx.beginpath();
ctx.strokestyle=color;
ctx.linewidth= 2;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();
canvas.addeventlistener("mousedown" my_mousedown);
function my_mousedown(e);
{
    mouse_x = e.clientX - canvas.offsetleft;
    mouse_Y = e.clientY - canvas.offsettop;
    console.log("x =" + mouse_x + ",Y=" +mouse_Y);
    circle(mouse_x,mouse_Y);
    
}