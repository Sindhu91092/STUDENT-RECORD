$(document).ready( function(){

$.getJSON("StudentRecord.json", function(data){


$.each(data.student, function(){

$("ul").append("<li>SNo: "+this['SNo']+"</li><li>Stu_Name: "+ this['Stu_Name'] +"</li><li>Roll_Nmbr: "+ this['Roll_Nmbr'] +
	"</li><li>Semester: "+ this['Semester'] +"</li><li>MarksIn%: "+ this['MarksIn%'] +"</li><br />");

});

});


});