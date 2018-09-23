document.body.children[1].style.background ='red';

// var table= document.body.children[1];
//
// // table.rows[0].cells[0].style.background ='blue';
// //
// // alert(table.rows.length);
//
// for (var i=0;i<table.rows.length; i++){
//     table.rows[i].cells[i].style.background ='#'+ Math.round((Math.random()*1000000));
// }


function getColor() {
    function getRGBitem() {
        var getItemColor= Math.round(0.255 * Math.round((Math.random()*1000)));
        return getItemColor;
    }
    cellsColor='rgb('+getRGBitem()+', '+getRGBitem()+', '+getRGBitem()+')';
    console.log(cellsColor, typeof cellsColor);
    return cellsColor;
}



var table=document.getElementById('tab');

function changeColor() {
    for (j=0; j<table.rows.length; j++){
        for (var i=0;i<table.rows.length; i++){
            table.rows[j].cells[i].style.background =getColor();
        }
    }
}
