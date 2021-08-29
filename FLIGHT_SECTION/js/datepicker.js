// datepicker to pick data range

$(document).ready(function(){

  $( "#date-picker-from" ).datepicker({
    defaultDate: "+1w",
    dateFormat: 'dd/mm/yy',
    minDate: 0,
    changeMonth: false,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#date-picker-to" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#date-picker-to" ).datepicker({
    defaultDate: "+1w",
    dateFormat: 'dd/mm/yy',
    changeMonth: false,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#date-picker-from" ).datepicker( "option", "maxDate", selectedDate );
    }
  });
});
