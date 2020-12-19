var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var ZomAPIKey = "19770ef1d81d900e465460e5b29f22bb";
var SpoonAPIKey = "a959c343de664ef3ba09e64931c18881";

function takeout() {
    let input = $("#input").val()
    var queryUrl = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=" + input + "&radius=8046.72M&sort=cost&order=desc";
    console.log(input)
    console.log(queryUrl)
    $.ajax({
        url: queryUrl,
        method: "GET",
        headers:{"user_key":ZomAPIKey}
    })
    .then(function(response){
        console.log(response)

        var resContainer = $("#input-container");
        
        var resNameUrl = response.restaurants[0].restaurant.name;
        console.log(resNameUrl)
        var resName = $("#restaurant-name").text(resNameUrl);
        resContainer.append(resName);

        function restaurantInfo (){
            var queryUrl2 = "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=" + input + "&radius=8046.72M&sort=cost&order=desc";
            $.ajax({
                url: queryUrl2,
                method: "GET",
                headers:{"user_key":ZomAPIKey}
            })
            .then(function(response){
                console.log(response)

                var resInfo = $("#input-info");
        
                var resLocationUrl = response.restaurants[0].restaurant.location.address;
                console.log(resLocationUrl)
                var resLocation = $("#Location").text(resLocationUrl);
                resInfo.append(resLocation);

                var resPhoneUrl = response.restaurants[0].restaurant.phone_numbers;
                console.log(resPhoneUrl)
                var resPhone = $("#Phone").text(resPhoneUrl);
                resInfo.append(resPhone);

                // var resPicUrl = response.restaurants[0].restaurant.photos_url;
                // console.log(resPicUrl)
                // var resPic = $("<img>").attr(resPicUrl);
                // resInfo.append(resPic);

                var resTimeUrl = response.restaurants[0].restaurant.timings;
                console.log(resTimeUrl)
                var resTime = $("#Time").text(resTimeUrl);
                resInfo.append(resTime);

            })

        }$("#restaurant-name").on("click", restaurantInfo)

        // for (var i = 0; i < response.restaurants.length; i++){
        //     console.log(response.restaurants.length)
        // }

    })
    

} $("#search").on("click", takeout)
