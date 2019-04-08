$(document).ready(function () {
  var first = $("#firstName");
  var last = $("#lastName");
  var user = $("#newUserEmail");
  var pass = $("#newUserPassword");

  // function test(event) {
  //   event.preventDefault()
  //   console.log(first.val().trim());
  //   console.log(last.val().trim());
  //   console.log(user.val().trim());
  //   console.log(pass.val().trim())
  // }

  $("#newSignUp").on("click", handleUserSignUp);

  function newWindow(event) {
    
    window.location.href = "company.html"
    sessionStorage.setItem("username", user.val().trim())
  }


  function handleUserSignUp(event) {
    event.preventDefault();

    if (!first.val().trim().trim()) {
      return;
    }
    generateUser({
      firstName: first.val().trim(),
      lastName: last.val().trim(),
      userName: user.val().trim(),
      password: pass.val().trim(),
    })

    
    
  }


  function generateUser(userData) {
    $.post("/api/users", userData).then(newWindow)
  }


})


