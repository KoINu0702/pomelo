// ===== 全站共用設定（品牌、聯絡資訊都在這裡改） =====
// 【可修改】
const brand = '🍈 柚香園';
const contact = {
	phone: '0932-496-160',
	lineId: '@your-line-id',
	lineUrl: '#',                       // 換成你的 LINE 加好友連結
	address: '○○縣○○鄉○○路 123 號',
};
const copyright = '© 2026 柚香園 All Rights Reserved.';

// 【可修改】選單項目：新增頁面時在 navItems 加一行即可
const navItems = [
	{ text: '首頁', href: 'homepage.html' },
	{ text: '商品', href: 'product.html' },
	{ text: '關於我們', href: 'about.html' },
	{ text: '顧客評價', href: 'reviews.html' },
];

// ===== 導覽列 =====
// 依目前網址判斷所在頁面，自動加上 active
const currentPage = location.pathname.split('/').pop() || 'homepage.html';

document.getElementById('site-header').innerHTML = `
	<div class="container nav">
		<a href="homepage.html" class="logo">${brand}</a>
		<button class="nav-toggle" aria-label="開啟選單">☰</button>
		<ul class="nav-links">
			${navItems.map(item => `
				<li><a href="${item.href}"${item.href === currentPage ? ' class="active"' : ''}>${item.text}</a></li>
			`).join('')}
		</ul>
	</div>
`;

// ===== 聯絡 / 訂購 =====
document.getElementById('contact').innerHTML = `
	<div class="container">
		<h2 class="section-title">聯絡與訂購</h2>
		<p class="section-subtitle">歡迎來電或透過 LINE 訂購</p>
		<div class="contact-info">
			📞 電話：${contact.phone}<br>
			💬 LINE ID：${contact.lineId}<br>
			📍 地址：${contact.address}
		</div>
		<a href="${contact.lineUrl}" class="btn">加入 LINE 訂購</a>
	</div>
`;

// ===== 頁尾 =====
document.getElementById('site-footer').innerHTML = `
	<div class="container">
		<p>${copyright}</p>
	</div>
`;

// 手機版選單開關
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
	a.addEventListener('click', () => links.classList.remove('open'))
);
