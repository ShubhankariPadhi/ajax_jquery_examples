$( "div" ).data( "test",{ first: 16, last: "pizza!" } );
$( "span" ).first().text( $( "#div_get_data" ).data( "test" ).first );
$( "span" ).last().text( $( "#div_get_data" ).data( "test" ).last );
//var v=document.getElementById("demo").val();
//alert("the data are moving");
/*$( "div" ).data( "test", "sb");
$( "span" ).text( $( "div" ).data( "test" ));*/