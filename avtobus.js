let data = [
	{ title: "Stasis Sounds For Long-Distance Space Travel", performer: "36 & zakè", genre: "Ambient, Drone", year: 2020, price: "750 грн.", img: "https://f4.bcbits.com/img/a2921184695_10.jpg" },
	{ title: "Invisible Cities", performer: "A Winged Victory For The Sullen", genre: "Modern Classical", year: 2021, price: "1090 грн.", img: "https://az721511.vo.msecnd.net/images/Bullmoose/34899970.JPG" }, 
	{ title: "Bring Backs", performer: "Alfa Mist", genre: "Nu Jazz", year: 2021, price: "1090 грн.", img: "https://f4.bcbits.com/img/a2378651824_16.jpg" }, 
	{ title: "Frank", performer: "Amy Winehouse", genre: "Soul", year: 2015, price: "1150 грн.", img: "https://jam-media.com.ua/content/images/11/480x480l50nn0/46355095183467.jpeg" }, 
	{ title: "Aretha’s Greatest Hits", performer: "Aretha Franklin", genre: "Soul", year: "2016", price: "765 грн.", img: "https://cdn.shopify.com/s/files/1/0647/6399/products/081227943516_1200x1200.jpg?v=1569267125" },
	{ title: "Greatest Hits", performer: "Fleetwood Mac", genre: "Blues", year: 2006, price: "1250 грн.", img: "https://images-na.ssl-images-amazon.com/images/I/91DhFf7TORL._SX425_.jpg"},
	{ title: "Strange Fruit", performer: "Billie Holiday", genre: "Jazz", year: 2017, price: "765 грн.", img: "https://img.discogs.com/cnBWiwq85Hcxt0r68zCFXQ_drnc=/fit-in/600x584/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-10519430-1499105839-8015.jpeg.jpg" },
	{ title: "#throwback", performer: "BMBU", genre: "Lo-Fi Hip-Hop", year: 2019, price: "550 грн.", img: "https://img.discogs.com/bpX1xh8RVfs4hkuSvwwKqftsZdY=/fit-in/450x450/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13464756-1554718095-7834.jpeg.jpg" },
	{ title: "Rausch", performer: "GAS", genre: "Ambient Techno", year: 2018, price: "1350 грн.", img: "https://f4.bcbits.com/img/a1577193323_10.jpg"},
	{ title: "Silver Eye", performer: "Goldfrapp", genre: "Electronic", year: 2017, price: "850 грн.", img: "https://www.prodj.com.ua/img/img1b/2018/03/20180321122204.jpg" },
	{ title: "GUNSHIP", performer: "GUNSHIP", genre: "Synthwave", year: 2017, price: "1250 грн.", img: "https://vinyla.com/files/products/gunship-gunship.1280x1280.jpg?a4da47986212cd164a96da59b7eb16b2" },
	{ title: "Still Life", performer: "Igor Yalivec", genre: "Modular", year: 2021, price: "990 грн.", img: "https://f4.bcbits.com/img/0024394115_10.jpg"},
	{ title: "KARMA", performer: "KAZKA", genre: "Pop", year: 2019, price: "1090 грн.", img: "https://besplatka.ua/aws/746x-/81/66/61/50/kazka-kazka-karma-2018-lp-12-vinyl-plastinka-moon-records-photo-cdd3.JPG" },
	{ title: "Mordechai", performer: "Khruangbin", genre: "Rock", year: 2020, price: "1090 грн.", img:"https://legatomusic.ru/nas/img/cdimg2/00/27/99/87.jpg"},
	{ title: "Home Again", performer: "Michael Kiwanuka", genre: "Soul", year: 2016, price: "950 грн.", img: "https://img.discogs.com/CqMu-fQnoD73DssT9_-ELxlrsto=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-3461309-1331289911.jpeg.jpg" },
	{ title: "Felt", performer: "Nils Frahm", genre: "Modern Classical", year: 2014, price: "850 грн.", img: "https://vinyla.com/files/products/3_55.800x800.png?46453c0a938582729eb3c3867ef1030b" },
	{ title: "Abbey Road Anniversary", performer: "Beatles", genre: "Rock", year: 1969, price: "600 грн", img: "https://images-na.ssl-images-amazon.com/images/I/81dUVKQDBEL._SX425_.jpg"},
  { title: "The Dark Side of the Moon", performer: "Pink Floyd", genre: "Rock", year: 1973, price: "1200 грн", img: "https://images-na.ssl-images-amazon.com/images/I/61hw9WloObL._SX425_.jpg"},
  { title: "Hans Zimmer - The Classics", performer: "Hans Zimmer", genre: "Classical", year: 2016, price: "670 грн", img: "https://images-na.ssl-images-amazon.com/images/I/714tdRGfh3L._SX425_.jpg"}
];


function filterData(type, value){
	if (type == 'genre') {
		let nam = data.filter (function(alm) {
			return alm.genre == value;
		});
		return nam
	} 
	else if (type == 'price') {
		let name = data.filter (function(alh) {
			return alh.price == value;
    });
		return name
	} 
	else if (type == 'year') {
		let nams = data.filter (function(alt) {
			return alt.year == value;
    });
      return nams;
	};
};


let filterBox = document.querySelectorAll('.box');
document.querySelector('data').addEventListener('click', filterData=> {
	let filterClass = filterData.target.dataset['genre'];
	filterBox.forEach (elem => {
		elem.data.remove('hide');
		if (!elem.data.genre(filterData) && filterData!== 'all'){
			elem.data.add('hide');
		}
	}) 
	let filterClass = filterData.target.dataset['year'];
	filterBox.forEach (elemn => {
		elem.data.remove('hide');
		if (!elemn.data.year(filterData) && filterData!== 'all'){
			elem.data.add('hide');
		}
	})
	let filterClass = filterData.target.dataset['price'];
	filterBox.forEach (elemnh => {
		elemh.data.remove('hide');
		if (!elemnh.data.price(filterData) && filterData!== 'all'){
			elem.data.add('hide');
		}
	})
});