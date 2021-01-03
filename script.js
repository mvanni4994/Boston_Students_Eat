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

    var newHtml = `<div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
            <div class="tile">
                <div class="tile is-parent">
                    <article class="tile is-child notification is-info">
                        <p class="title">Middle tile</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/640x480.png">
                        </figure>
                    </article>
                </div>
            </div>
        </div>
    </div>`

    function test(search) {
        $("#cardcontainer").empty()
        var edamanUrl = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + search + "&app_id=566ccbc5&app_key=d5a7bcf8eae7b83123232dbd9a2d1b4f"

        $.ajax({
            url: edamanUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response.hits)
            var Responsearray = response.hits
            for (var i = 0; i < Responsearray.length; i++) {
                console.log(Responsearray[i].recipe.image)
                    // var card = $("<div>").addClass("card")
                    // var cardImage = $('<div>').addClass("card-image")
                    // var cardFigure = $("<figure>").addClass("image  is-128x128")
                    // var recipeImage = $("<img>").attr("src", Responsearray[i].recipe.image)
                    // cardFigure.append(recipeImage)
                    // cardImage.append(cardFigure)
                    // card.append(cardImage)
                    // var cardContainer = $("<div>").addClass("tile")
                    // cardContainer.append(card)

                let ingredients = '';

                Responsearray[i].recipe.ingredientLines.forEach((item) => {
                    ingredients += '<li>' + item + '</li>' + '\n'
                })

                var card = `<div class="tile is-3">
                        <div class="tile">
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-info">
                                    <p class="title">${Responsearray[i].recipe.label}</p>
                                    <figure class="image is-4by3">
                                        <img src="${Responsearray[i].recipe.image}">
                                    </figure>
                                    <p class="subtitle mt-2">The Ingridents</p>
                                    <ul>
                                    ${ingredients}
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>`
                $("#cardcontainer").append(card)
                    // var url = Responsearray[i].recipe.url
                    // var image = $("<img>")
                    // image.attr("src", Responsearray[i].recipe.image)
                    // console.log(image)
                    // $("#cardcontainer").append(image)
            }
        })
    }

});


//function typeFood() {
//let foodImput = $("")
// <<<<<<< HEAD
// //}
// >>>>>>> 2193c5786b04a86a3754c5ebd6762c7a3ce2a8bb
// =======
// //}unction typeFood() {
// //let foodImput = $("")
// //}
// >>>>>>> origin/nicholas
