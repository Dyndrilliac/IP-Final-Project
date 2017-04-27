var m;

function getMuscles() {
    $.ajax({
            url: URLS.MUSCLE + "?ordering=id&language=2&limit=999&format=json",
            dataType: "json",
            success: (data) => {
                displayMuscleGroups(data);
                ds[0] = data;
            }
    });
}

function displayMuscleGroups(muscles) {
    $("#muscles").html("<form id=\"muscles-form\"></form>");

    for (var i = 1; i <= muscles.count; i++) {
        var muscleString = "<div class=\"checkbox\"><label><input type=\"checkbox\" id=\"muscle-" + i + "\">" + String(muscles.results[i-1].name) + "</label></div>";
        $("#muscles-form").append(muscleString);
    }
}

function getExercises() {
    m = new Array(ds[0].count);

    for (var i = 1; i <= ds[0].count; i++) {
        m[i-1] = $("#muscle-" + i).prop("checked");
    }

    $.ajax({
            url: URLS.EXERCISE + "?ordering=id&language=2&limit=999&format=json",
            dataType: "json",
            success: (data) => {
                displayExercises(data);
                ds[1] = data;
            }
    });
}

function displayExercises(exercises) {
    $("#exercises").html("<ol id=\"exercises-list\"></ol>");

    for (var i = 0; i < exercises.count; i++) {
        var exerciseString = "<li>" + String(exercises.results[i].name) + "</li>";
        $("#exercises-list").append(exerciseString);
    }
}

$(document).ready((e) => {
    getMuscles();
    $("#search-button").click(getExercises);
});
