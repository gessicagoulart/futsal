$(document).ready(function(){
    showProfiles();
});

function showProfiles(){

    fetch("http://localhost:8080/profiles")
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        data.forEach(element => {
            $("<tr><td>" + element.id + "</td>"+
    "<td>" + element.name + "</td>" + 
    "<td>" + element.height + "</td>" +
    "<td>" + element.weight + "</td>" +
    "<td>" + element.age + "</td></tr>").appendTo('#profile-table');
});
})

    var form = document.getElementById("save");


    document.getElementById("your-id").addEventListener("click", function () {
        form.submit();
    });

}