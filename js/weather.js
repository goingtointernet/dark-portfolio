/*==========weather api================*/
/* i used weather api by api ninjas*/

/* pasting the fetch js code of api ninjas*/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d2a0233b7msh97b5c338ca0f9bap18f0b6jsn4603ceadd6cd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

/* city get by user default is Ottawa */
const getWeather = (city)=>{

/* html_id_name.addThisHTMLInnerThisDiv = City_Put_By_user*/
    city_name.innerHTML = city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {

        /* this api give some data of Wather, I used Some data of this api which i given below*/

        /*My_HTML_ID_Name.Put_This_HTML_Here = Get Data of temprature From Api*/
        temp.innerHTML = response.temp
        /*My_HTML_ID_Name.Put_This_HTML_Here = Get Data of feel temp From Api*/
        feels_like.innerHTML = response.feels_like
        /*My_HTML_ID_Name.Put_This_HTML_Here = Get Data of humidity From Api*/
        humidity.innerHTML = response.humidity
        /*My_HTML_ID_Name.Put_This_HTML_Here = Get Data of max temprature From Api*/
        max_temp.innerHTML = response.max_temp
        /*My_HTML_ID_Name.Put_This_HTML_Here = Get Data of Min Temprature From Api*/
        min_temp.innerHTML = response.min_temp
        /*My_HTML_ID_Name.Put_This_HTML_Here = Get Data of Wind Speed From Api*/
        wind_speed.innerHTML = response.wind_speed
    })
    /*Show error in console (Some time The Api Not Work due to overload, beacuse this is free api)*/
	.catch(err => console.error(err));
}

/*==search weather (collect the city name which put by user and pas it in to getWeather() function==*/
weather_search.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

/* call weather function with default value Ottawa*/
getWeather("Ottawa")

