$(document).ready(function () {

    var session = sessionStorage.getItem("username")
    // console.log(session)
    $.get("api/users", getCompanyInfo)
    renderAddDept();
    renderAddDept();

    function renderAddDept() {


        var newbutton = $("<button></button>");
        newbutton.addClass("btn-floating btn-medium pulse");
        var icon = $("<i></i>");
        icon.addClass("fas fa-plus")
        newbutton.append(icon);
        $(".container").append(newbutton)
    }


    function getCompanyInfo(data) {
        console.log(data)
        var found = false;
        var userID;
        for (var i = 0; i < data.length; i++) {
          if (data[i].userName == session) {
            var userID = data[i].Companies;
            console.log(userID)
            found = true;
            break;
          }
        }
        // console.log(userID[0].name)
        
        var blankcard = $("<div></div");
        blankcard.addClass("card");

        var cardheader = $("<div></div>");
        cardheader.addClass("card-header");
        cardheader.attr("id", "companyName")
        cardheader.append(userID[0].name)
        blankcard.append(cardheader);

        var cardbody = $("<div></div>");
        cardbody.addClass("card-body");
        var address = $("<p></p>");
        address.append(userID[0].address);
        var city = $("<p></p>");
        city.append(userID[0].city + ", " + userID[0].state + " " + userID[0].zip)
        cardbody.append(address, city);

        blankcard.append(cardbody);        

        $(".container").append(blankcard)
      }



})