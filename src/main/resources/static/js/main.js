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
                "</td> <td><button type=\"button\" class=\"btn btn-secondary\" onclick='window.location.href = \"/edit\"'>Edit</button></td>" +
                "<td><button type=\"button\" class=\"btn btn-danger\" onclick='deleteProfile(" + element.id + ")'>Delete</button>" +
                "</td></tr>").appendTo('#profile-table');
});
})
}

function updateProfile(){



}

function deleteProfile(id){
        console.log(id);
    $.ajax({
        url: 'http://localhost:8080/delete/' + id,
        type: 'DELETE',
        contentType: 'application/json',
        dataType: 'json',
        success: window.location.href = '/index',
        error: (function (xhr, textStatus, errorThrown){
            alert('Error! Status = ' + xhr.status);
        })
    });

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

        document.getElementById('profileForm').required = true;

        $.ajax({
            url: 'http://localhost:8080/addProfile',
            type: 'POST',
            data: JSON.stringify(mapped),
            contentType: 'application/json',
            dataType: 'json',
            success: window.location.href = '/index',
            error: (function (xhr, textStatus, errorThrown){
                alert('Error! Status = ' + xhr.status);
            })
        });
    }