console.log("hello")

function createRecipes() {
    var responsearray = JSON.parse(localStorage.getItem("recipes"))

    // for (var i = 0; i < recipearray.length; i++) {
    //     console.log(recipearray[i].recipe)
    //     var heading = $("h1")
    //     heading.text(recipearray[i].recipe.label)
    //     $(".savedrecipe").append()
    // }
    for (var i = 0; i < responsearray.length; i++) {
        console.log(responsearray[i].recipe.image)
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

        responsearray[i].recipe.ingredientLines.forEach((item) => {
            ingredients += '<li>' + item + '</li>' + '\n'
        })

        var card = `<div class="tile is-3">
                <div class="tile">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                            <p class="title">${responsearray[i].recipe.label}</p>
                            <figure class="image is-4by3">
                                <img src="${responsearray[i].recipe.image}">
                            </figure>
                            <p class="subtitle mt-2">The Ingridents</p>
                            <ul>
                            ${ingredients}
                            </ul>
                            <button id="${responsearray[i].recipe.label}" class="button save-recipe">Save Recipe</button>

                        </article>
                    </div>
                    
                </div>
            </div>`
        $("#cardcontainer").append(card)
    }
}
createRecipes()