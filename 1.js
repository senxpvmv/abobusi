let trips = [
    {duration: "5 годин", stops: ["Київ", "Житомир", "Новоград", "Вінниця", "Броди", "Львів"], bus_name: "Еталон", seating: "28", horsepower: "130", bus_info: "Туристичний автобус малого класу. Призначений для використання на маршрутах середньої дальності. Володіє підвищеною пасажиромісткістю. В салоні – припіднята підлога, шторки, багажні полички, система гучного зв′язку.", imgsrc: 'http://www.autoconsulting.com.ua/pictures/BAZ/2015/BAZ_A079_01.jpg'},
    {duration: "7 годин", stops: ["Львів", "Умань", "Вінниця", "Хмельницький", "Тернопіль", "Одесса"], bus_name: "Sprinter", seating: "19", horsepower: "140", bus_info: "Туристичний автобус для перевезення пасажирів по міжміським та туристичним маршрутам. Кожне з місць оснащено зручним кріслом з настроюваної по куту нахилу спинкою, ременем безпеки і підлокітником з боку проходу.", imgsrc: 'https://www.interarmored.com/wp-content/uploads/2017/02/Mercedes-Benz-Sprinter-01.jpg'},
    {duration: "10 годин", stops: ["Харків", "Каховка", "Мелітополь", "Волноваха", "Бердянск", "Миколаїв"], bus_name: "Crafter", seating: "17",     horsepower: "145", bus_info: "Автобус Crafter по праву вважається одним з кращих автомобілів для обслуговування туристичних і екскурсійних груп. Довга колісна база і високий дах дозволяють розмістити пасажирів на 17 зручних сидіннях підвищеної комфортності, розташованих на спеціальному подіумі. Висока посадка сприяє зниженню стомлюваності пасажирів, одночасно забезпечуючи їм відмінний огляд з своїх місць.", imgsrc: 'https://www.gruzovik.com/img/Avtobus_Mikroavtobus_Volkswagen_Crafter_2_0TDI_120kw_BUS_19_1_klima_zwilling-xxl-2635/2635_1308031865201.jpg'},
]

let from = document.querySelector(".from")
let to = document.querySelector(".to")

from.onclick=(e) => {
    from.value=""
}
to.onclick=(e) => {
    to.value=""
}

function avtobus (arr) {
    for (let key of arr) {
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


function filter(e) {
    if(e.keyCode == 13 || e.button == 0) {
        let filtered = trips.filter((key) => key.stops.includes(to.value) && key.stops.includes(from.value))
        document.querySelector('.result').innerHTML = ""

        if (filtered.length == 1) {
            avtobus (filtered)
        }
        else {
            let fromIndex = filtered[0].stops.length - 1
            let toIndex = 0
            let objectIndex

            filtered.forEach((item, indx) =>{
                if (item.stops.indexOf(from.value)<fromIndex && item.stops.indexOf(to.value) > toIndex) {
                    fromIndex = item.stops.indexOf(from.value)
                    toIndex = item.stops.indexOf(to.value)
                    objectIndex = indx
                }
            })
            avtobus ([filtered[objectIndex]])
        }
    }
};


document.querySelector(".find").onclick=(e) => filter(e)
from.onkeydown=(e) => filter(e)
to.onkeydown=(e) => filter(e)


