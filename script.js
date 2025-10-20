// Lấy ra các phần tử HTML
const triggerLink = document.getElementById('trigger-link');
const mainContent = document.getElementById('main-content');
const heartsContainer = document.getElementById('hearts-container');
const fireworksContainer = document.getElementById('fireworks-container');
const flowersContainer = document.getElementById('flowers-container'); // Lấy div hoa

// Mảng màu pháo hoa
const fireworkColors = ['pink', 'yellow', 'blue', 'green', 'purple', 'red', 'white'];
// Mảng màu hoa (bông 4 cánh)
const flowerColors = ['red', 'orange', 'pink-petal', 'yellow-petal', 'white'];
// Mảng màu trái tim
const heartColors = ['default', 'pink', 'purple', 'gold']; // 'default' là màu đỏ hồng gốc
// Mảng màu cánh hoa
const petalColors = ['pink', 'white', 'light-red'];


// Hàm tạo một trái tim (Loại 1: Nở và Xoay)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Thêm màu ngẫu nhiên cho trái tim
    const randomColorClass = heartColors[Math.floor(Math.random() * heartColors.length)];
    if (randomColorClass !== 'default') {
        heart.classList.add(randomColorClass);
    }
    
    // Gán vị trí xuất hiện ngẫu nhiên
    const startLeft = Math.random() * 90 + 5; 
    const startTop = Math.random() * 60 + 20; 
    const endLeft = startLeft + (Math.random() * 40 - 20); 
    
    heart.style.setProperty('--start-left', startLeft + '%');
    heart.style.setProperty('--start-top', startTop + '%'); 
    heart.style.setProperty('--end-left', endLeft + '%');

    const delay = Math.random() * 1.5;
    heart.style.animationDelay = delay + 's';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's';

    heartsContainer.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// HÀM MỚI: Tạo trái tim (Loại 2: Trôi lơ lửng)
function createDriftingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart'); // Dùng chung class .heart
    heart.classList.add('heart-drift'); // Thêm class mới để đổi animation
    
    const randomColorClass = heartColors[Math.floor(Math.random() * heartColors.length)];
    if (randomColorClass !== 'default') {
        heart.classList.add(randomColorClass);
    }
    
    // Vị trí trôi
    const startLeft = Math.random() * 80 + 10;
    const endLeft = startLeft + (Math.random() * 60 - 30); // Trôi ngang 
    
    heart.style.setProperty('--start-left', startLeft + '%');
    heart.style.setProperty('--end-left', endLeft + '%');

    const delay = Math.random() * 3; // Delay nhiều hơn
    const duration = 6 + Math.random() * 4; // Bay chậm hơn
    heart.style.animationDelay = delay + 's';
    heart.style.animationDuration = duration + 's';

    heartsContainer.appendChild(heart); // Thêm vào cùng container

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}


// Hàm tạo pháo hoa (ĐÃ BỎ BỚT)
function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    const randomColorClass = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];
    firework.classList.add(randomColorClass);
    
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    
    const delay = Math.random() * 1.5;
    firework.style.animationDelay = delay + 's';

    fireworksContainer.appendChild(firework);

    // ĐÃ XÓA VÒNG LẶP TẠO TIA SÁNG (firework-spark)

    firework.addEventListener('animationend', () => {
        firework.remove();
    });
}

// Hàm tạo một bông hoa (4 cánh) (Giữ nguyên)
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');

    const randomColorClass = flowerColors[Math.floor(Math.random() * flowerColors.length)];
    flower.classList.add(randomColorClass); 
    
    const color = getComputedStyle(flower).backgroundColor;
    flower.style.setProperty('--flower-color', color || "#ffffff");

    const startLeft = Math.random() * 90 + 5;
    const startTop = Math.random() * 60 + 20;
    const endLeft = startLeft + (Math.random() * 60 - 30); 
    
    flower.style.setProperty('--start-left', startLeft + 'vw');
    flower.style.setProperty('--start-top', startTop + 'vh'); 
    flower.style.setProperty('--end-left', endLeft + 'vw');

    flower.style.setProperty('--initial-rotation', (Math.random() * 360) + 'deg');
    flower.style.setProperty('--final-rotation', (Math.random() * 360 + 720) + 'deg');

    const delay = Math.random() * 2; 
    const duration = 6 + Math.random() * 5; 
    flower.style.animationDelay = delay + 's';
    flower.style.animationDuration = duration + 's';

    flowersContainer.appendChild(flower); 

    flower.addEventListener('animationend', () => {
        flower.remove();
    });
}

// Hàm tạo một cánh hoa (Giữ nguyên)
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const randomColorClass = petalColors[Math.floor(Math.random() * petalColors.length)];
    petal.classList.add(randomColorClass);
    
    const startLeft = Math.random() * 90 + 5;
    const startTop = Math.random() * 60 + 20;
    const endLeft = startLeft + (Math.random() * 80 - 40); 
    
    petal.style.setProperty('--start-left', startLeft + 'vw');
    petal.style.setProperty('--start-top', startTop + 'vh'); 
    petal.style.setProperty('--end-left', endLeft + 'vw');

    petal.style.setProperty('--initial-rotation', (Math.random() * 360) + 'deg');
    petal.style.setProperty('--final-rotation', (Math.random() * 360 + 720) + 'deg');

    const delay = Math.random() * 2; 
    const duration = 7 + Math.random() * 5; 
    petal.style.animationDelay = delay + 's';
    petal.style.animationDuration = duration + 's';

    flowersContainer.appendChild(petal); 

    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}


// Lắng nghe sự kiện bấm vào link
triggerLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    
    triggerLink.style.display = 'none';
    mainContent.classList.add('active');

    // Số lượng ban đầu
    const initialHearts = 30; 
    for (let i = 0; i < initialHearts; i++) {
        setTimeout(createHeart, i * 150); 
    }
    const initialFireworks = 20; // Giảm pháo hoa ban đầu
    for (let i = 0; i < initialFireworks; i++) {
        setTimeout(createFirework, i * 150); // Thưa ra
    }
    const initialFlowers = 25;
    for (let i = 0; i < initialFlowers; i++) {
        setTimeout(createFlower, i * 250);
    }
    const initialPetals = 25;
    for (let i = 0; i < initialPetals; i++) {
        setTimeout(createPetal, i * 200);
    }
    // Thêm trái tim trôi ban đầu
    const initialDriftingHearts = 15;
    for (let i = 0; i < initialDriftingHearts; i++) {
        setTimeout(createDriftingHeart, i * 300);
    }


    // Tạo liên tục (TĂNG TIM, GIẢM PHÁO HOA)
    setInterval(createHeart, 300); // Tăng tim "nở"
    setInterval(createDriftingHeart, 450); // Thêm tim "trôi"
    setInterval(createFirework, 800); // Giảm pháo hoa
    setInterval(createFlower, 600); 
    setInterval(createPetal, 450);
});