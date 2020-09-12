function showProfiles(){
    fetch("http://localhost:8080/profiles")
    .then(response => response.json())
    .then(function(data){
        data.forEach(element => {
            $("<tr><td>" + element.id + "</td>"+
    "<td>" + element.name + "</td>" + 
    "<td>" + element.height + "</td>" +
    "<td>" + element.weight + "</td>" +
    "<td>" + element.age +
                "</td> <td><button type=\"button\" class=\"btn btn-secondary\">Edit</button></td><td><button type=\"button\" class=\"btn btn-danger\">Delete</button></td></tr>").appendTo('#profile-table');
});
})
}

    function submitForm(){
        let str = $("#profileForm");

        const mapToObject = (obj) => {
            let mapped = {};
            obj.serializeArray().forEach((field) => {
                mapped[field.name] = field.value;
            });

            return mapped;
        };
        let mapped = mapToObject(str);

        $.ajax({
            url: 'http://localhost:8080/addProfile',
            type: 'POST',
            data: JSON.stringify(mapped),
            contentType: 'application/json',
            dataType: 'json',
            success: console.log(str) ,
            error: (function (xhr, textStatus, errorThrown){
                alert('Error! Status = ' + xhr.status);
            })
        });
    }