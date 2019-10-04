$(document).ready(readyNow);

let numberMeetups = 3

function readyNow(){
    console.log('JQ');

   $('#meetup').on('click', addMeetup);
   $('.delete').on('click', deleteFunction);
   
    
}

function addMeetup(){
    console.log('click');
    console.log($('#group').val());
    console.log($('#date').val());
    $('table').append('<tr>' + '<td>' + ($('#group').val()) +'</td>' + '<td>' + ($('#date').val()) + '</td>' + '<td>' + "<button class = 'delete'> delete </button>" + '</td>' + '</tr>')
    numberMeetups = Number(numberMeetups) + 1;
    $('#number').text(numberMeetups);
}

function deleteFunction(){
    console.log('delete');
    
    $('tr').closest.remove;
}
