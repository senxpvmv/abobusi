let trips = [
	{duration: "5 годин", stops: ["Київ", "Житомир", "Новоград", "Рівне", "Броди", "Львів"], bus_name: "Еталон", seating: "28", horsepower: "130", bus_info: "Туристичний автобус малого класу. Призначений для використання на маршрутах середньої дальності. Володіє підвищеною пасажиромісткістю. В салоні – припіднята підлога, шторки, багажні полички, система гучного зв′язку.", imgsrc: 'http://www.autoconsulting.com.ua/pictures/BAZ/2015/BAZ_A079_01.jpg'},
	{duration: "7 годин", stops: ["Львів", "Умань", "Вінниця", "Хмельницький", "Тернопіль", "Одесса"], bus_name: "Sprinter", seating: "19", horsepower: "140", bus_info: "Туристичний автобус для перевезення пасажирів по міжміським та туристичним маршрутам. Кожне з місць оснащено зручним кріслом з настроюваної по куту нахилу спинкою, ременем безпеки і підлокітником з боку проходу.", imgsrc: 'https://www.interarmored.com/wp-content/uploads/2017/02/Mercedes-Benz-Sprinter-01.jpg'},
	{duration: "10 годин", stops: ["Харків", "Каховка", "Мелітополь", "Волноваха", "Бердянск", "Миколаїв"]}
]

let from = document.querySelector(".from")
let to = document.querySelector(".to")

from.onclick=(e) => {
    from.value=""
}
to.onclick=(e) => {
    to.value=""
}

// document.querySelector("body").onclick=(e) => {
//     // if (e.target !== from) {
//     //     from.value = "Звідки?"
//     // } else {from = ""}
//     console.log(e.target)
// }

function filter(e) {
    if(e.keyCode == 13 || e.button == 0) {
        let filtered = trips.filter((key) => key.stops.includes(to.value) && key.stops.includes(from.value))
        document.querySelector('.result').innerHTML = ""
        for (let key of filtered) {
            document.querySelector('.result').innerHTML += 
            `<p>Тривалість поїздки: ${key.duration}
            <br> Зупинки: ${key.stops}
            <br> Кількість місць: ${key.seating}
            <br> Марка: ${key.bus_name}
            <br> Л.с.: ${key.horsepower}
            <br> Додаткова інформація: ${key.bus_info}
            </p>`
            document.querySelector('.img_result').src = key.imgsrc
        }
    }
};
document.querySelector(".find").onclick=(e) => filter(e)
from.onkeydown=(e) => filter(e)
to.onkeydown=(e) => filter(e)


// function contentTemplate(item) {
//     let template = `<div class="content-item m-1">
//         <div class="abobus-img">
//             <img src="${item.imgsrc}" />
//         </div>
//         <div class="content-info">
//          <h1 class="text-result><b>Тривалість поїздки</b>: ${item.duration}</h1>
//          <div class="text-result"><b>Зупинки</b>: ${item.stops}</div>
// 			<div class="text-result"><b>Кількість місць</b>: ${item.seating}</div>
//          <div class="text-result"><b>Марка</b>: ${item.bus_name}</div>
// 			<div class="text-result"><b>Л.с.</b>: ${item.bus_horsepower}</div>
// 			<div class="text-result"><b>Додаткова інформація</b>: ${item.bus_info}</div>
//         </div>
//     </div>`;

//     return template;
// };