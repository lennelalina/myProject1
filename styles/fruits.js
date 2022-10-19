document.getElementsByName('select')[0].onchange = function(){
    document.getElementsByClassName('fr')[0].src = 'styles/img/' + document.getElementsByName('select')[0].value + '.png'
}