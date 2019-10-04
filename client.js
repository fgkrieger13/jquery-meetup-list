$(document).ready(readyNow);

let numberMeetups = 3

function readyNow(){
    console.log('JQ');

   $('#meetup').on('click', addMeetup);
   $('tbody').on('click', '.delete', deleteFunction);
}

function addMeetup(){
    console.log('click');
    const groupName = ($('#group').val());
    const dateNum = ($('#date').val());
    console.log($('#group').val());
    console.log($('#date').val());
    $('table').append(
        '<tr>' +
         '<td>' + (groupName) +
    '</td>' + '<td>' + (dateNum) + '</td>' + 
    '<td>' + "<button class = 'delete'> delete </button>" + '</td>' 
    + '</tr>'
        )
    numberMeetups = Number(numberMeetups) + 1;
    $('#number').text(numberMeetups);
}

function deleteFunction(){
    console.log('delete');
    
    $(this).closest('tr').remove();
    
numberMeetups = Number(numberMeetups) - 1;
$('#number').text(numberMeetups);
}
