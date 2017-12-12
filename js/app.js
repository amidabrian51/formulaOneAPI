$(document).ready(function(){
  $('#submitYear').click(function(){
    let year = $("#year").val();
    if(year != ''){
      //Get the Ajax request
      $.ajax({
        url:"http://ergast.com/api/f1/" + year + "/circuits.json?callback=",
        type: "GET",
        dataType: "json",
        success: function(data){
          let widget = show(data);

          $("#show").html(widget);

          $("#year").val('');
        }
      });
    }else {
      $("#error").html('Field cannot be empty');
    }

  });

});

function show(data) {
  let circuitHtml = '<ul>';
  $.each(data.MRData.CircuitTable.Circuits, function(i, place){
      circuitHtml += '<li> name: '+ place.circuitName + '</li>';
      circuitHtml += '<li> country: '+ place.Location.country + '</li>';
  });
  circuitHtml += '</ul>';
  return circuitHtml;
}
