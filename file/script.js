

// screensize 938 x 755


var borderBarx = 500;
var borderBary = 600;
var pageHeight = 1400;
var pageWidth = 2600;

var canvas = document.getElementById('creativeCoding');
var ctx = canvas.getContext('2d');
dpi = window.devicePixelRatio;


function fix_dpi() {
    let style = {
      height() {
        return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
      },
      width() {
        return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
      }
    }
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}


function draw() {
  var canvas = document.getElementById('creativeCoding');
  if (canvas.getContext) {
   
    fix_dpi(); 
    var ctx = canvas.getContext('2d');
    // Black
    ctx.fillStyle = 'rgb(0, 0, 0)'; 
    ctx.fillRect(1500, 10, 60, 1200);
    ctx.fillRect(borderBarx, 0, 60, pageHeight);
    ctx.fillRect(1240, 10, 60, 1200);
    ctx.fillRect( 0 , borderBary, pageWidth, 50 );
    ctx.fillRect(0, 200 , borderBary, 80); 
    // Red
    ctx.fillStyle = 'rgb(255, 0, 0)'; 
    ctx.fillRect(borderBarx+60, 0, pageWidth - borderBarx, borderBary);
    // Blue
    ctx.fillStyle = 'rgb(0, 0, 255)'; 
    ctx.fillRect( 0 ,  borderBary+50, borderBarx, borderBary + pageHeight );
    
     ctx.fillStyle = 'rgb(0, 0, 0)'; 
     ctx.fillRect(1800, borderBary, 60, borderBary + pageHeight );
     // Black
     ctx.fillStyle = 'rgb(0, 0, 0)'; 
     ctx.fillRect(1800, borderBary + 300, pageWidth-borderBary, 60 );
    // Yellow
    // https://www.rapidtables.com/web/color/RGB_Color.html
    ctx.fillStyle = 'rgb(255, 255, 0)'; 
    ctx.fillRect( 1860 ,  borderBary + 360, borderBarx + 200, borderBary + pageHeight );
    // Brown
    // https://www.rapidtables.com/web/color/RGB_Color.html
    ctx.fillStyle = 'rgb(255, 155, 0)'; 
    ctx.fillRect( 1300 ,  borderBary + 50, borderBarx, borderBary + pageHeight );


    }
  }











