// JavaScript Document

var mbNum;

$(document).ready(function(){
	
	$("#spanSearch").click(function(){
	    mbNum = $("#txtSearch").val();
	    console.log(mbNum);
	    getAccount(mbNum)
    });
	
	
});

function getAccount(accountNum) {
    $.ajax({

        url:'http://192.168.25.53/securities.php',
        type : 'POST',
        data:{'account':accountNum},
        encode: true,
        dataType:'HTML'


    })
        .done(function(data){
           // $("#resultsTable").html(data);
            console.log(data);

            var stuff =  data.substring(data.lastIndexOf("{"));

             var stuff1 = JSON.parse(stuff);

             $("#spanFname").html(stuff1.firstName);
            $("#spanLname").html(stuff1.lastName);
            $("#spanAddr1").html(stuff1.addr1);
            $("#spanAddr2").html(stuff1.addr2);
            $("#spanHome").html("H:" + stuff1.homePhone);
            $("#spanCell").html("C:" + stuff1.cell);
            $("#spanWork").html("W:" + stuff1.workPhone);
            $("#spanEmail").html(stuff1.email);

             console.log(stuff1.email);

        });
}

function getSharetecData()
{
    $.ajax({

        url:'http://192.168.25.53/securities.php',
        type : 'POST',
        data:{'account':accountNum},
        encode: true,
        dataType:'HTML'


    })
        .done(function(data){
            // $("#resultsTable").html(data);
            //  console.log(data);

            var stuff =  data.substring(data.lastIndexOf("{"));

            var stuff1 = JSON.parse(stuff);

            $("#spanFname").html(stuff1.firstName);
            $("#spanLname").html(stuff1.lastName);
            $("#spanAddr1").html(stuff1.addr1);
            $("#spanAddr2").html(stuff1.addr2);
            $("#spanHome").html("H:" + stuff1.homePhone);
            $("#spanCell").html("C:" + stuff1.cell);
            $("#spanWork").html("W:" + stuff1.workPhone);
            $("#spanEmail").html(stuff1.email);

            console.log(stuff1.email);

        });



}