// async function getWeather() {
//     const city = 'Mumbai';
//     const apiKey = '7cd6d55b022604052b3d4f8c1f6ad693';
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();

//         if (response.ok) {
//             const min = data.main.temp_min;
//             const max = data.main.temp_max;
//             const avg = data.main.temp;

//             console.log(`Weather in ${city}`);
//             console.log(`Min Temp: ${min}°C`);
//             console.log(`Max Temp: ${max}°C`);
//             console.log(`Avg Temp: ${avg}°C`);
//         } else {
//             console.error(`Error: ${data.message}`);
//         }
//     } catch (err) {
//         console.error("Error fetching weather data:", err);
//     }
// }
async function weather() {
    const apikey = "19976261ce9d4f276d91ff8f83525df3"; // Make sure this key is still valid
    const city = "london";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.main) {
            console.log("Min Temp:", data.main.temp_min);
            console.log("Max Temp:", data.main.temp_max);
            console.log("Avg Temp:", data.main.temp);
        } else {
            console.log("Error:", data.message || "Could not fetch weather data.");
        }
    } catch (err) {
        console.log("Fetch error:", err.message);
    }
}

weather();


// async function weather() {
//     const apikey = "19976261ce9d4f276d91ff8f83525df3"
//     const city = "london"
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
//     const res = await fetch(url)
//     const data = await res.json()
//     console.log(data.main.temp_min)
//     console.log(data.main.temp_max)
//     console.log(data.main.temp)
// }
// weather()
// getWeather();
