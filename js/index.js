$cont = $('#hi');
parts = $.map($cont.text().split(''), function(v){
    return $('<span />', {text:v});
});
$cont.empty().append(parts);

$cont = $('#name');
parts = $.map($cont.text().split(''), function(v){
    return $('<span />', {text:v});
});
$cont.empty().append(parts);

$cont = $('#web');
parts = $.map($cont.text().split(''), function(v){
    return $('<span />', {text:v});
});
$cont.empty().append(parts);

// function changecolor(){
//  var btn =  document.getElementById('btn');
//  btn.style.backgroundColor='#6DFDFF';
// }
