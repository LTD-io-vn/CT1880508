"use strict";

let navToggleState = false;

const navToggle = document.getElementById("nav-toggle");
const navBar = document.getElementById("nav-bar");

navToggle.addEventListener("click", () => {
	navToggleState = !navToggleState;
	if (navToggleState) {
		navBar.classList.add("visible");
		navToggle.classList.remove("fa-bars-staggered");
		navToggle.classList.add("fa-xmark");
	} else {
		navBar.classList.remove("visible");
		navToggle.classList.remove("fa-xmark");
		navToggle.classList.add("fa-bars-staggered");
	}
});

navBar.addEventListener("click", () => navToggle.click());

const productData = {
	SP0000: {
		name: "Chúng Ta Của Tương Lai",
		origin: "Sơn Tùng M-TP",
		description: "Đĩa than phiên bản sưu tầm của ca khúc Chúng Ta Của Tương Lai với chất lượng âm thanh cao.",
		price: 1250000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0001: {
		name: "Đừng Làm Trái Tim Anh Đau",
		origin: "Sơn Tùng M-TP",
		description: "Phiên bản vinyl của bản hit Đừng Làm Trái Tim Anh Đau dành cho người hâm mộ.",
		price: 1190000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0002: {
		name: "Hãy Trao Cho Anh",
		origin: "Sơn Tùng M-TP",
		description: "Đĩa than chất lượng cao với ca khúc nổi tiếng Hãy Trao Cho Anh.",
		price: 1290000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0003: {
		name: "Chạy Ngay Đi",
		origin: "Sơn Tùng M-TP",
		description: "Phiên bản vinyl giới hạn của Chạy Ngay Đi với thiết kế bìa độc quyền.",
		price: 1150000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0004: {
		name: "Lạc Trôi",
		origin: "Sơn Tùng M-TP",
		description: "Đĩa than Lạc Trôi mang đến trải nghiệm âm thanh chân thực.",
		price: 1220000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0005: {
		name: "Chromakopia",
		origin: "Tyler, The Creator",
		description: "Album phòng thu thứ tám của Tyler, The Creator phát hành năm 2024.",
		price: 1300000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0006: {
		name: "(Taylor's Version)",
		origin: "Taylor Swift",
		description: "Phiên bản tái thu âm của album pop nổi tiếng 1989.",
		price: 1450000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0007: {
		name: "Midnights",
		origin: "Taylor Swift",
		description: "Album Midnights với những bản pop hiện đại và sâu lắng.",
		price: 1380000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0008: {
		name: "30",
		origin: "Adele",
		description: "Album 30 của Adele với chất giọng đầy cảm xúc.",
		price: 1350000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0009: {
		name: "Magic",
		origin: "Bruno Mars",
		description: "Album funk-pop nổi tiếng đạt nhiều giải thưởng Grammy.",
		price: 1280000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0010: {
		name: "Access Memories",
		origin: "Daft Punk",
		description: "Album kinh điển với ca khúc Get Lucky.",
		price: 1500000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0011: {
		name: "Thriller",
		origin: "Michael Jackson",
		description: "Một trong những album bán chạy nhất mọi thời đại.",
		price: 1550000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0012: {
		name: "Hits",
		origin: "Queen",
		description: "Tuyển tập những ca khúc nổi tiếng nhất của Queen.",
		price: 1480000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0013: {
		name: "Dark Side of the Moon",
		origin: "Pink Floyd",
		description: "Album rock huyền thoại với chất lượng thu âm xuất sắc.",
		price: 1600000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0014: {
		name: "Road",
		origin: "The Beatles",
		description: "Album cuối cùng được ban nhạc thu âm cùng nhau.",
		price: 1580000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0015: {
		name: "Nevermind",
		origin: "Nirvana",
		description: "Album grunge kinh điển của thập niên 90.",
		price: 1420000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0016: {
		name: "Parachutes",
		origin: "Coldplay",
		description: "Album đầu tay với bản hit Yellow.",
		price: 1330000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0017: {
		name: "Divide",
		origin: "Ed Sheeran",
		description: "Album Divide với nhiều ca khúc đình đám.",
		price: 1290000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0018: {
		name: "Hours",
		origin: "The Weeknd",
		description: "Album synth-pop nổi bật với Blinding Lights.",
		price: 1370000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0019: {
		name: "Than Ever",
		origin: "Billie Eilish",
		description: "Album thứ hai của Billie Eilish với nhiều bản hit.",
		price: 1390000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0020: {
		name: "to Die",
		origin: "Lana Del Rey",
		description: "Album mang phong cách dream pop đặc trưng.",
		price: 1410000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0021: {
		name: "AM",
		origin: "Arctic Monkeys",
		description: "Album rock hiện đại được yêu thích trên toàn thế giới.",
		price: 1360000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0022: {
		name: "Evolve",
		origin: "Imagine Dragons",
		description: "Album với các ca khúc Believer và Thunder.",
		price: 1320000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0023: {
		name: "Theory",
		origin: "Linkin Park",
		description: "Album đầu tay mang tính biểu tượng của Linkin Park.",
		price: 1460000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0024: {
		name: "California",
		origin: "Eagles",
		description: "Album rock cổ điển với ca khúc Hotel California bất hủ.",
		price: 1520000,
		image: "/assets/imgs/vinyl.jpg",
		type: "Đĩa than"
	},
	SP0025: {
		name: "AT-LP60X",
		origin: "Audio-Technica",
		description: "Mâm đĩa than truyền động dây đai hoàn toàn tự động, tích hợp preamp phono, phù hợp cho người mới bắt đầu.",
		price: 4900000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0026: {
		name: "AT-LPW30TK",
		origin: "Audio-Technica",
		description: "Mâm đĩa than thủ công với mặt gỗ MDF, truyền động dây đai và khả năng nâng cấp kim đọc.",
		price: 7900000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0027: {
		name: "PS-LX310BT",
		origin: "Sony",
		description: "Mâm đĩa than tự động hỗ trợ kết nối Bluetooth, dễ dàng kết nối với loa và tai nghe không dây.",
		price: 7200000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0028: {
		name: "Debut Carbon EVO",
		origin: "Pro-Ject",
		description: "Mâm đĩa than cao cấp với cần carbon, chống rung hiệu quả và chất lượng âm thanh vượt trội.",
		price: 16500000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0029: {
		name: "Planar 1",
		origin: "Rega",
		description: "Mâm đĩa than thủ công nổi tiếng với thiết kế tối giản và khả năng tái tạo âm thanh trung thực.",
		price: 11900000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0030: {
		name: "DP-300F",
		origin: "Denon",
		description: "Mâm đĩa than tự động với preamp tích hợp, phù hợp cho hệ thống âm thanh gia đình.",
		price: 9800000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0031: {
		name: "RT82",
		origin: "Fluance",
		description: "Mâm đĩa than truyền động dây đai với cảm biến tốc độ quang học cho độ chính xác cao.",
		price: 9300000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0032: {
		name: "SL-1200MK7",
		origin: "Technics",
		description: "Mâm đĩa than truyền động trực tiếp chuyên nghiệp, được các DJ trên toàn thế giới tin dùng.",
		price: 28900000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0033: {
		name: "PLX-500",
		origin: "Pioneer DJ",
		description: "Mâm đĩa than direct-drive dành cho DJ và người yêu nhạc với khả năng ghi âm qua USB.",
		price: 9800000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0034: {
		name: "Eastwood",
		origin: "Victrola",
		description: "Mâm đĩa than phong cách cổ điển tích hợp Bluetooth và loa, thích hợp cho không gian gia đình.",
		price: 4200000,
		image: "/assets/imgs/turntable.jpg",
		type: "Mâm đĩa than"
	},
	SP0035: {
		name: "R1280DB",
		origin: "Edifier",
		description: "Loa bookshelf tích hợp Bluetooth với chất âm cân bằng, phù hợp nghe nhạc vinyl và giải trí tại gia.",
		price: 2890000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0036: {
		name: "Acton III",
		origin: "Marshall",
		description: "Loa Bluetooth thiết kế cổ điển với âm thanh mạnh mẽ, thích hợp cho phòng khách hoặc phòng làm việc.",
		price: 7490000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0037: {
		name: "A2+",
		origin: "Audioengine",
		description: "Loa bookshelf nhỏ gọn hỗ trợ Bluetooth, mang đến âm thanh chi tiết và trung thực.",
		price: 6590000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0038: {
		name: "The Fives",
		origin: "Klipsch",
		description: "Loa hi-fi cao cấp với kết nối đa dạng và chất âm sống động dành cho người yêu nhạc.",
		price: 18900000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0039: {
		name: "Authentics 300",
		origin: "JBL",
		description: "Loa không dây phong cách retro với âm thanh mạnh mẽ và thời lượng pin dài.",
		price: 10900000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0040: {
		name: "SRS-RA3000",
		origin: "Sony",
		description: "Loa không dây hỗ trợ âm thanh 360 Reality Audio, mang lại trải nghiệm nghe nhạc sống động.",
		price: 6990000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0041: {
		name: "Kardon Aura Studio 4",
		origin: "Harman Kardon",
		description: "Loa Bluetooth thiết kế trong suốt độc đáo, kết hợp âm thanh chất lượng cao và vẻ đẹp hiện đại.",
		price: 7990000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0042: {
		name: "Home Speaker 500",
		origin: "Bose",
		description: "Loa thông minh với âm thanh stereo rộng, hỗ trợ điều khiển bằng giọng nói và Bluetooth.",
		price: 9990000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0043: {
		name: "LSX II",
		origin: "KEF",
		description: "Cặp loa không dây hi-fi nhỏ gọn với chất âm chi tiết và khả năng kết nối hiện đại.",
		price: 29900000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0044: {
		name: "Ai61",
		origin: "Fluance",
		description: "Loa bookshelf chủ động hỗ trợ Bluetooth aptX HD, lý tưởng để kết hợp cùng mâm đĩa than.",
		price: 10990000,
		image: "/assets/imgs/speaker.jpg",
		type: "Loa"
	},
	SP0045: {
		name: "A-S301",
		origin: "Yamaha",
		description: "Âm ly tích hợp mang đến âm thanh trong trẻo, công suất ổn định, phù hợp với hệ thống nghe nhạc gia đình.",
		price: 10990000,
		image: "/assets/imgs/amplifier.jpg",
		type: "Amply"
	},
	SP0046: {
		name: "PMA-600NE",
		origin: "Denon",
		description: "Âm ly stereo tích hợp Bluetooth với chất âm chi tiết, lý tưởng để phối ghép cùng mâm đĩa than.",
		price: 12990000,
		image: "/assets/imgs/amplifier.jpg",
		type: "Amply"
	},
	SP0047: {
		name: "PM6007",
		origin: "Marantz",
		description: "Âm ly hi-fi nổi tiếng với âm thanh ấm áp, hỗ trợ ngõ vào phono dành cho người yêu đĩa than.",
		price: 15990000,
		image: "/assets/imgs/amplifier.jpg",
		type: "Amply"
	},
	SP0048: {
		name: "Audio AXA35",
		origin: "Cambridge Audio",
		description: "Âm ly tích hợp thiết kế tối giản, tích hợp phono MM, mang lại trải nghiệm nghe nhạc tự nhiên.",
		price: 11990000,
		image: "/assets/imgs/amplifier.jpg",
		type: "Amply"
	},
	SP0049: {
		name: "A-9110",
		origin: "Onkyo",
		description: "Âm ly stereo hiệu suất cao với âm thanh mạnh mẽ, phù hợp cho hệ thống hi-fi cổ điển.",
		price: 9900000,
		image: "/assets/imgs/amplifier.jpg",
		type: "Amply"
	},
	SP0050: {
		name: "TCM-150",
		origin: "Sony",
		description: "Máy phát cassette nhỏ gọn với thiết kế cổ điển, phù hợp để nghe lại các băng cassette yêu thích.",
		price: 1890000,
		image: "/assets/imgs/cassette-player.jpg",
		type: "Máy nghe cassette"
	},
	SP0051: {
		name: "RQ-2102",
		origin: "Panasonic",
		description: "Máy cassette cầm tay với loa tích hợp, dễ sử dụng và mang đậm phong cách hoài cổ.",
		price: 2290000,
		image: "/assets/imgs/cassette-player.jpg",
		type: "Máy nghe cassette"
	},
	SP0052: {
		name: "W-1200",
		origin: "TEAC",
		description: "Đầu cassette kép hỗ trợ ghi âm và phát lại chất lượng cao, lý tưởng cho người sưu tầm băng từ.",
		price: 13990000,
		image: "/assets/imgs/cassette-player.jpg",
		type: "Máy nghe cassette"
	},
	SP0053: {
		name: "CP13",
		origin: "FiiO",
		description: "Máy nghe cassette di động hiện đại với thiết kế retro, mang đến trải nghiệm âm thanh analog chân thực.",
		price: 2990000,
		image: "/assets/imgs/cassette-player.jpg",
		type: "Máy nghe cassette"
	},
	SP0054: {
		name: "MCR-100",
		origin: "Jensen",
		description: "Máy cassette đa năng tích hợp AM/FM và ghi âm, phù hợp cho nhu cầu giải trí và lưu trữ băng từ.",
		price: 2590000,
		image: "/assets/imgs/cassette-player.jpg",
		type: "Máy nghe cassette"
	}
};

function addToCart(id, amount) {
	let value = localStorage.getItem(id);

	if (value == null) {
		value = 0;
	}

	localStorage.setItem(id, Number(value) + amount);
}

function getCartItems() {
	const items = [];

	for (let i = 0; i < localStorage.length; i++) {
		const id = localStorage.key(i);
		const data = productData[id];

		items.push({
			id: id,
			name: data.name,
			origin: data.origin,
			description: data.description,
			price: data.price,
			image: data.image,
			type: data.type,
			amount: Number(localStorage.getItem(id))
		});
	}

	return items;
}

function removeFromCart(id) {
	localStorage.removeItem(id);
}

function clearCart() {
	localStorage.clear();
}
