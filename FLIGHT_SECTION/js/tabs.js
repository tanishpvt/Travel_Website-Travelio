  // show / hide the return date depend on the active tab
  $(function() {
    $("#return-date").hide();
    $("#one-way-tab").click(function(){
      $("#return-date").hide();
    });

    $("#return-tab").click(function(){
      $("#return-date").show();
    });
  });