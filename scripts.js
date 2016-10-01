$.getJSON("https://raw.githubusercontent.com/GETHIP-Classroom/2017-hw2-Athletesrun/master/ben.json", function(data) {
    console.log(data);
    $("#profile-name").text(data.firstName + " " + data.lastName);
    $("#age").text(data.age);
    $("#profile-picture").attr("src", data.picture);
    $.each(data.activities.sports, function(key, value){
        console.log(value);
        $("#sports").append("<li>" + value + "</li>");
    });
    $.each(data.activities.technology, function(key, value) {
        $('#technology').append("<li>" + value + "</li>");
    });
});
