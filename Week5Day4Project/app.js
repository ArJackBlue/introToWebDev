$("#nav").css("background-color", "#145")
$('.navItem').css("color", "white")


$('#myInput').attr("placeholder", "Alissa Jackson")

let list = $(contentContainer).children()[3];
console.log(list)
let even = $(list).children('li:nth-child(odd)');
$(even).css("background-color", "#ccc")


let odd = $(list).children('li:nth-child(even)');
$(odd).css("background-color", "#aaa")



