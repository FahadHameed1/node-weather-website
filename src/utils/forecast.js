const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=aa0e4121dac66ab11a39ba71c03c0dce&query='+ latitude + ',' + longitude + '&units=m'
    request( {url , json: true }, (error , {body}) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else {
            callback(undefined , body.current.weather_descriptions + '. It is curent temperature ' + body.current.temperature + ' degrees out. It feels Like ' + body.current.feelslike + ' degress out. Its humidity is ' + body.current.humidity + ' percent. And cloudcover is ' + body.current.cloudcover + ' percent. And Wind direction is ' + body.current.wind_dir + ' side. And Wind Speed is ' + body.current.wind_speed + ' Km/h')
        }

    } )
}


module.exports = forecast