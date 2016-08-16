$(function() {

    'use strict';

    $("#new-profile").click(function() {
        $.ajax({
            // where the data live
            url: 'https://myexpressapi.herokuapp.com/users/anu',
            type: 'GET',
            // data: {cat: 'movies'},
            dataType: 'json',
            // beforeSend: function(xhr) {
            //   xhr.setRequestHeader("X-Mashape-Authorization", "it4o1uG5pxmshtMBdkNgvx66OWJYp1pdLGxjsndxwVOLShk5Oe");
            // }
          }).done(successFunction)
            .fail(failFunction);
      });


      //success function
      function successFunction(data, dataType, status) {
        $("#name").text(data.name);
        $("#age").text(data.age);
        $("#email").text(data.email);
        // $("#image").text(data.image);
        $(".detailimage").attr( "src", data.image);
        $("#quote").text(data.quote);
      };


      // fail function
      function failFunction(request, textStatus, errorThrown) {
          alert('An error occurred during your request: ' + request.status + ' ' + textStatus + ' ' + errorThrown);
      };
    });
