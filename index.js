const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-list');


// 點擊漢堡按鈕，切換漢堡選單的 open 類別
menuBtn.addEventListener('click', function () {
    navList.classList.toggle('active');
    document.body.classList.toggle('menu-open');
})