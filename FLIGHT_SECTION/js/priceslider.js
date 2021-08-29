//price range slider
  $(function() {
    $( "#price-slider" ).slider({
      range: true,
      min: 0,
      max: 600,
      values: [ 0, 600 ],
      slide: function( event, ui ) {
         $( "#amount-min" ).val( "\u00A3 " + ui.values[ 0 ]);
         $( "#amount-max" ).val( "\u00A3 " + ui.values[ 1 ] );
      }
    });
    $( "#amount-min" ).val( "\u00A3 " + $( "#price-slider" ).slider( "values", 0 ));
    $( "#amount-max" ).val( "\u00A3 " + $( "#price-slider" ).slider( "values", 1 ));
  });