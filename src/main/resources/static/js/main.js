$(document).ready(function (){
    listeners();
    });

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
                "</td> <td><button type=\"button\" id='editBtn' class=\"btn btn-secondary\" onclick='editForm(" + element.id + ")'>Edit</button></td>" +
                "<td><button type=\"button\" class=\"btn btn-danger\" onclick='deleteProfile(" + element.id + ")'>Delete</button>" +
                "</td></tr>").appendTo('#profile-table');
});
})
}
let listeners = function () {
       if($('#editBtn') !== null) {
           addEventListener("click", () => window.location.href = '/edit');
       }
};
function editForm(id){
    console.log('Redirecting to edit page');
    fetch("http://localhost:8080/profileid/" + id)
        .then(response => response.json())
        .then(function(element){
                $("<tr><td>" + element.id + "</td>"+
                    "<td>" + element.name + "</td>" +
                    "<td>" + element.height + "</td>" +
                    "<td>" + element.weight + "</td>" +
                    "<td>" + element.age + "</td></tr>").appendTo('#editForm');
        });
}
function updateProfile(){
    const mapToObject = (obj) => {
        let mapped = {};
        obj.serializeArray().forEach((field) => {
            mapped[field.name] = field.value;
        });
        return mapped;
    };
    let str = $("#editForm");
    let mapped = mapToObject(str);
    console.log(mapped);
    $.ajax({
        url: 'http://localhost:8080/update',
        type: 'POST',
        data: JSON.stringify(mapped),
        contentType: 'application/json',
        dataType: 'json',
        success: console.log(JSON.stringify(mapped)),
        error: (function (xhr, textStatus, errorThrown){
            alert('Error! Status = ' + xhr.status);
        })
    });

}

function deleteProfile(id){
        let deleted = id;
    $.ajax({
        url: 'http://localhost:8080/delete/' + id,
        type: 'DELETE',
        contentType: 'application/json',
        dataType: 'json',
        success: function (){
            alert('Profile with id number ' + deleted + ' deleted');
            location.reload();
        }(),
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
        }
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

      let values = Object.values(mapped);

        if(values.includes('') || values.includes(NaN)){
            alert('Please fill in all the fields before saving a profile!');
        }else {
            $.ajax({
                url: 'http://localhost:8080/addProfile',
                type: 'POST',
                data: JSON.stringify(mapped),
                contentType: 'application/json',
                dataType: 'json',
                success: window.location.href = '/index',
                error: (function (xhr, textStatus, errorThrown) {
                    alert('Error! Status = ' + xhr.status);
                })
            });
        }
    }