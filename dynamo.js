$(document).ready(function () {
    load();
});

function load (){
    $("#txtNoOfRec").focus();

    $("#btnCreate").click(function () {
        $("#AddControl").empty();   //restricts the number of rows to the indicated value
        var NoOfRec = $("#txtNoOfRec").val();

        if (NoOfRec > 0){
            createControl(NoOfRec);
        }
    });
    
}function createControl(NoOfRec) {
    var tbl = "";

    tbl = "<table class='table table-bordered table-hover'>"+
            "<tr>"+
                "<th>S.No</th>"+
                "<th>First Name</th>"+
                "<th>Last Name</th>"+
                "<th>Gender</th>"+
                "<th>City</th>"+
            "</tr>";

    for (i=1; i<=NoOfRec; i++){
        tbl += "<tr>"+ 
                    "<td>" + i + "</td>" +

                    "<td>"+
                        "<input type='text' id='txtFName' placeholder='First Name' autofocus>"+
                    "</td>"+

                    "<td>"+
                        "<input type='text' id='txtLName' placeholder='Last Name'>"+
                    "</td>"+

                    "<td>"+
                        "<input type='radio' name='Gender' value='M'>Male <br/>"+
                        "<input type='radio' name='Gender' value='F'>Female"+
                    "</td>"+

                    "<td>"+
                        "<select id='ddlCity'>"+
                            "<option value='0'> - Select City - </option>"+
                            "<option value='1'>Nairobi</option>"+
                            "<option value='2'>Kisumu</option>"+
                            "<option value='3'>Eldoret</option>"+
                            "<option value='4'>Nakuru</option>"+
                        "</select>"+
                    "</td>"+
             "</tr>";
    }
    tbl += "</table>";

    $("#AddControl").append(tbl); //displays the table
}