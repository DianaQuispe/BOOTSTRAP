
$(document).ready(function() {
    $('#send').click(function(){
        if($('#name') != "" && $('#name') != 0) {
                alert('escribiste tu nombre bien');
        }else {alert("Escribe un verdadero nombre")}
        if ($('#phone').length <10) {
                alert('escribiste tu phone bien');
        }else {alert("Escribe un verdadero phone")}
    })

})
$('#name');
$('#email');
$('#phone');
