var ZomAPIKey = "19770ef1d81d900e465460e5b29f22bb";
var SpoonAPIKey = "9baea515a18f0180bd3d0bdb1d4a4cfc";
var Queryurl = "https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/complexSearch?query=pasta"

var recipes = []
    //this array comes from the api

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
        var edamanUrl = "https://api.edamam.com/search?q=" + search + "&app_id=95e78154&app_key=6671e89d67282cf297bf570a1f27f204"

        $.ajax({
            url: edamanUrl,
            method: "GET"
        }).then(function(response) {
            console.log(response.hits)
            var Responsearray = response.hits
                // Saving the recipe array from the api to the global array api recipes so it can be used everywhere in the file
            apiRecipes = Responsearray

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
                                    <p class="subtitle mt-2">Ingredients</p>
                                    <ul>
                                    ${ingredients}
                                    </ul>
                                    <button id="${Responsearray[i].recipe.label}" class="button save-recipe">Save Recipe</button>

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
// Adding a click event to our dynamically created saved recipe buttons in our recipe cards
$(document).on("click", ".save-recipe", function() {
        // Looping thru all of the recipes from the api and finding the one with a label that matches the recipe label that we saved
        for (var i = 0; i < apiRecipes.length; i++) {
            console.log(apiRecipes)
                // Finding the recipe that has the same label as the one we clicked on and then pushing it to the recipe array  for later access 
            if (apiRecipes[i].recipe.label === $(this).attr("id")) {
                recipes.push(apiRecipes[i])
                    // saving the updated recipe array in local storage permantly 
                localStorage.setItem("recipes", JSON.stringify(recipes))
            }
        }
        console.log(JSON.parse(localStorage.getItem("recipes")))

    })
    // in case the user refreshes the page before they do another search we will set the global recipe array to the permant saved recipe array in local storage, if an array does not exist then the function will end

function getStorage() {
    if (localStorage.getItem("recipes")) {
        recipes = JSON.parse(localStorage.getItem("recipes"))
    } else {
        return
    }
}
getStorage()

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
