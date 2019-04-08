$(document).ready(function() {
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var username = $("#newUserEmail");
    var password = $("newUserPassword");

    $(document).on("submit", "newSignUp", handleUserSignUp);


    function handleUserSignUp(event) {
        event.preventDefault();
        
        if (!firstName.val().trim().trim()) {
          return;
        }
        upsertAuthor({
          name: nameInput
            .val()
            .trim()
        });
      }





})