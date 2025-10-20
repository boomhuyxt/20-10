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


// Hàm tạo một trái tim
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

// Hàm tạo pháo hoa (bản rực rỡ)
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

    // Tạo nhiều tia sáng phụ bay ra từ tâm pháo hoa
    const numSparks = 8 + Math.floor(Math.random() * 8); // 8 đến 15 tia
    for (let i = 0; i < numSparks; i++) {
        const spark = document.createElement('div');
        spark.classList.add('firework-spark'); 
        
        // Lấy màu từ CSS variable (đã gán ở class)
        const sparkColor = getComputedStyle(firework).getPropertyValue('--firework-color');
        spark.style.backgroundColor = sparkColor; 

        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 50; 
        const sparkX = Math.cos(angle) * distance;
        const sparkY = Math.sin(angle) * distance;

        spark.style.setProperty('--spark-x', sparkX + 'px');
        spark.style.setProperty('--spark-y', sparkY + 'px');
        spark.style.setProperty('--spark-duration', (0.8 + Math.random() * 0.7) + 's'); 

        spark.style.left = '50%';
        spark.style.top = '50%';
        spark.style.transform = 'translate(-50%, -50%)'; 

        firework.appendChild(spark); 
        
        spark.addEventListener('animationend', () => {
            spark.remove();
        });
    }

    firework.addEventListener('animationend', () => {
        firework.remove();
    });
}

// Hàm tạo một bông hoa (4 cánh)
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

// Hàm tạo một cánh hoa
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
    const initialFireworks = 40; 
    for (let i = 0; i < initialFireworks; i++) {
        setTimeout(createFirework, i * 100);
    }
    const initialFlowers = 25;
    for (let i = 0; i < initialFlowers; i++) {
        setTimeout(createFlower, i * 250);
    }
    const initialPetals = 25;
    for (let i = 0; i < initialPetals; i++) {
        setTimeout(createPetal, i * 200);
    }

    // Tạo liên tục
    setInterval(createHeart, 300); 
    setInterval(createFirework, 150); // Tần suất pháo hoa cao
    setInterval(createFlower, 500); 
    setInterval(createPetal, 350);
});