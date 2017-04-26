const BASE_URL = "proxy/api/v2/"
const URLS = {
    ENDPOINTS:              BASE_URL,
    DAYSOFWEEK:             BASE_URL + "daysofweek/",
    EQUIPMENT:              BASE_URL + "equipment/",
    EXERCISE:               BASE_URL + "exercise/",
    EXERCISEINFO:           BASE_URL + "exerciseinfo/",
    EXERCISECATEGORY:       BASE_URL + "exercisecategory/",
    EXERCISECOMMENT:        BASE_URL + "exercisecomment/",
    EXERCISEIMAGE:          BASE_URL + "exerciseimage/",
    INGREDIENT:             BASE_URL + "ingredient/",
    INGREDIENTWEIGHTUNIT:   BASE_URL + "ingredientweightunit/",
    LANGUAGE:               BASE_URL + "language/",
    LICENSE:                BASE_URL + "license/",
    MUSCLE:                 BASE_URL + "muscle/",
    WEIGHTUNIT:             BASE_URL + "weightunit/",
    SETTING_REPETITIONUNIT: BASE_URL + "setting-repetitionunit/",
    SETTING_WEIGHTUNIT:     BASE_URL + "setting-weightunit/",
};

var endpoints;
var daysofweek;
var equipment;
var exercise;
var exerciseinfo;
var exercisecategory;
var exercisecomment;
var exerciseimage;
var ingredient;
var ingredientweightunit;
var language;
var license;
var muscle;
var weightunit;
var setting_repetitionunit;
var setting_weightunit;

function getMuscles() {
    $.ajax({
            url: URLS.MUSCLE + "?format=json&limit=999",
            dataType: "json",
            success: (data) => {
                displayMuscleGroups(data);
                muscle = data;
            }
    });
}

function displayMuscleGroups(muscles) {
    $("#muscles").html("<form id=\"muscles-form\"></form>");

    for (var i = 0; i < muscles.count; i++) {
        var muscleString = "<div class=\"checkbox\"><label><input type=\"checkbox\">" + String(muscles.results[i].name) + "</label></div>";
        $("#muscles-form").append(muscleString);
    }
}

function getExercises() {
    $.ajax({
            url: URLS.EXERCISE + "?format=json&limit=999",
            dataType: "json",
            success: (data) => {
                displayExercises(data);
                exercise = data;
            }
    });
}

function displayExercises(exercises) {
    $("#exercises").html("<ol id=\"exercises-list\"></ol>");

    for (var i = 0; i < exercises.count; i++) {
        var exerciseString = "<div class=\"checkbox\"><label><input type=\"checkbox\">" + String(exercises.results[i].name) + "</label></div>";
        $("#exercises-list").append(exerciseString);
    }
}

$(document).ready((e) => {
    getMuscles();
	getExercises();
});