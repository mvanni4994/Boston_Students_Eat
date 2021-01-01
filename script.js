var ZomAPIKey = "19770ef1d81d900e465460e5b29f22bb";
var SpoonAPIKey = "9baea515a18f0180bd3d0bdb1d4a4cfc";
var Queryurl = "https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/complexSearch?query=pasta"


$(document).ready(function() {
    $("#search-recipe").on("click", function(event) {
        event.preventDefault()
        console.log("hello")
        var typeOfFood = $("#type-of-food").val().trim()
        test(typeOfFood)
    })

    function test(search) {
        var edamanUrl = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + search + "&app_id=566ccbc5&app_key=d5a7bcf8eae7b83123232dbd9a2d1b4f"

        $.ajax({
            url: edamanUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response.hits)
            var Responsearray = response.hits
            for (var i = 0; i < Responsearray.length; i++) {
                console.log(Responsearray[i].recipe.image)
                var image = $("<img>")
                image.attr("src", Responsearray[i].recipe.image)
                console.log(image)
                $("#cardcontainer").append(image)
            }
        })
    }

});


//function typeFood() {
//let foodImput = $("")
//}
>>>>>>> 2193c5786b04a86a3754c5ebd6762c7a3ce2a8bb
