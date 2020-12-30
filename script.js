var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var ZomAPIKey = "371d0b3b78605932eec94283b3ce1f93";
var SpoonAPIKey = "a959c343de664ef3ba09e64931c18881";

// function loadResults() {

//     $("#results").empty();
//     showPage();
//     // Adds loading image animation
//     function showPage() {
//         $("#myDiv").html("<h3> Working on it!</h3>").show();
//         var img = $("<img>");
//         img.attr("src", "https://i.pinimg.com/originals/50/7e/92/507e92e1d92210aac1a7130c8757a0dd.gif");
//         $("#myDiv").append(img);
//     }
// }



function takeout() {
    let input = $("#input").val()
    var queryUrl = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id=289&entity_type=city&q=" + input + "&radius=1609.34M&sort=cost&order=desc";
    console.log(input)
    console.log(queryUrl)
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers:{"user_key":ZomAPIKey}
    })
    .then(function(response){
        console.log(response)
    

        function restaurantInfo (){
            var queryUrl2 = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id=289&entity_type=city&q=" + input + "&radius=1609.34M&sort=cost&order=desc";
            console.log(queryUrl2);
        
            $.ajax({
                url: queryUrl2,
                method: "GET",
                headers:{"user_key":ZomAPIKey}
            })
            .then(function(response){
                console.log(response)
              
             

                for (var i = 0; i < response.restaurants.length; i++) {
                    console.log(response.restaurants[i].name);

                    console.log(response);

                var card = $("<div>").addClass("card");
                $("#cardcontainer").append(card)
                card.html("")

       
        
                var resNameUrl = response.restaurants[i].restaurant.name;
                console.log(resNameUrl)
                var resName = $("<h2>").text(resNameUrl);
                card.append(resName);

                var resLocationUrl = response.restaurants[i].restaurant.location.address;
                console.log(resLocationUrl)
                var resLocation = $("<p>").text("Address: " + resLocationUrl);
                card.append(resLocation);

                var resPhoneUrl = response.restaurants[i].restaurant.phone_numbers;
                console.log(resPhoneUrl)
                var resPhone = $("<p>").text("Restaurant Phone Number: " + resPhoneUrl);
                card.append(resPhone);

                var ratingUrl = response.restaurants[i].restaurant.user_rating.aggregate_rating;
                console.log(ratingUrl)
                var ratingNum = $("<p>").text("Restaurant Rating: " + ratingUrl + "/10");
                card.append(ratingNum);


                var menuUrl = response.restaurants[i].restaurant.menu_url;
                console.log(menuUrl)
                var menuLink = ($("<a>").attr("href", menuUrl).text("Click here for more info on the restaurant!"));
                card.append(menuLink); 
                
                
            
            
            }

            })

        }restaurantInfo();

    })
    

} $("#search").on("click", takeout)
