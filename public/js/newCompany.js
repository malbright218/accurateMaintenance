$(document).ready(function() {

    var session = sessionStorage.getItem("username")
    console.log(session)

    var cName = $("#companyName");
    var cStreet = $("#companyStreet");
    var cCity = $("#companyCity");
    var cState = $("#companyState");
    var cZip = $("#companyZIP");
    var departments = $("#companyDepartments");

//     function test(event) {
//     event.preventDefault()
//     console.log(cName.val().trim());
//     console.log(cStreet.val().trim());
//     console.log(cCity.val().trim());
//     console.log(cState.val().trim());
//     console.log(cZip.val().trim());
//     console.log(depts.val().trim());
//   }

  $("#companyNext").on("click", handleCompanyNew);

  function newWindow(event) {
    
    window.location.href = "department.html"
    
  }


  function handleCompanyNew(event) {
    event.preventDefault();
    if (!cName.val().trim().trim()) {
      return;
    }
    generateCompany({
        name: cName.val().trim(),
        address: cStreet.val().trim(),
        city: cCity.val().trim(),
        state: cState.val().trim(),
        zip: cZip.val().trim(),
        depts: departments.val().trim()
    })   
  }

  function generateCompany(companyData) {
    $.post("/api/company", companyData).then(newWindow)
  }





})