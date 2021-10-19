let trips = [
	{duration: "5 годин", stops: ["Київ", "Житомир", "Новоград", "Рівне", "Броди", "Львів"], bus_name: "Еталон", bus_enginetype: "Дизельний", seating: "28", bus_horsepower: "130", bus_info: "Туристичний автобус малого класу. Призначений для використання на маршрутах середньої дальності. Володіє підвищеною пасажиромісткістю. В салоні – припіднята підлога, шторки, багажні полички, система гучного зв′язку.", imgsrc: 'http://www.autoconsulting.com.ua/pictures/BAZ/2015/BAZ_A079_01.jpg'},
	{duration: "7 годин", stops: ["Львів", "Умань", "Вінниця", "Хмельницький", "Тернопіль", "Одесса"], bus_name: "Sprinter", bus_enginetype: "Дизельний", seating: "19", bus_horsepower: "140", info: "Туристичний автобус для перевезення пасажирів по міжміським та туристичним маршрутам. Кожне з місць оснащено зручним кріслом з настроюваної по куту нахилу спинкою, ременем безпеки і підлокітником з боку проходу.", imgsrc: 'https://lh3.googleusercontent.com/proxy/_o34zRaTNcz_d-YvbuN63CXwYtKDBEsBrnv-oM3nYvTREgnRhCFWF97CpcEA96h2VBZbAeDw_66FJ0lvfmjAqlZvLH4toGemcLxXGdehaGsJgCzfc_5yo4E7nkFAjMJb3mHI7A1seFJm'},
	{duration: "10 годин", stops: ["Харків", "Каховка", "Мелітополь", "Волноваха", "Бердянск", "Миколаїв"]}
]

let buses = [
	
	{},
]

let to = document.querySelector(".to")
let filtered = trips.filter((key) => key.stops.includes(to.value))

to.onkeydown = (e) => {
	if(e.keyCode == 13) {
		// document.querySelector(".result").innerHTML = trips.filter((a) => a.stops.includes(to.value))
		document.querySelector('.result').innerHTML = `<p>Duration ${filtered.duration}, Stops: ${filtered.stops}</p>`
	};
};

function contentTemplate(item) {
    let template = `<div class="content-item m-1">
        <div class="abobus-img">
            <img src="${item.imgsrc}" />
        </div>
        <div class="content-info">
            <h1 class="text-result><b>Тривалість поїздки</b>: ${item.duration}</h1>
            <div class="text-result"><b>Зупинки</b>: ${item.stops}</div>
			<div class="text-result"><b>Кількість місць</b>: ${item.seating}</div>
            <div class="text-result"><b>Марка</b>: ${item.bus_name}</div>
            <div class="text-result"><b>Тип двигуна</b>: ${item.bus_enginetype}</div>
			<div class="text-result"><b>Л.с.</b>: ${item.bus_horsepower}</div>
			<div class="text-result"><b>Додаткова інформація</b>: ${item.bus_info}</div>
        </div>
    </div>`;

    return template;
};