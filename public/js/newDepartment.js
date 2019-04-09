$(document).ready(function () {
    var session = sessionStorage.getItem("username")
    console.log(session)
    var deptNo = [];
    console.log(deptNo)
    getUserInfo();

    function getUserInfo() {
        $.get("/api/users", getInfo)
    }

    function getInfo(data) {
        // console.log(session)
        // console.log(data)
        var found = false;
        var departmentNo;
        for (var i = 0; i < data.length; i++) {
            if (data[i].userName == session) {
                var departmentNo = data[i].Companies[0].depts;
                // console.log(departmentNo)
                found = true;
                break;
            }
        }
        deptNo.push(departmentNo);
        var number = deptNo[0];
        
        for (var i = 0; i < number; i++) {
            
        }





    }
















})