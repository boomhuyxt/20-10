// Lấy ra các phần tử HTML cần thiết
const triggerLink = document.getElementById('trigger-link');
const mainContent = document.getElementById('main-content');
const heartsContainer = document.getElementById('hearts-container');
const fireworksContainer = document.getElementById('fireworks-container');

// Hàm tạo một trái tim
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Đặt vị trí bắt đầu và kết thúc ngẫu nhiên
    const startLeft = Math.random() * 100; // Từ 0% đến 100% chiều rộng
    const endLeft = Math.random() * 100;
    
    heart.style.setProperty('--start-left', startLeft + '%');
    heart.style.setProperty('--end-left', endLeft + '%');

    // Thời gian delay ngẫu nhiên
    const delay = Math.random() * 2; // Từ 0 đến 2 giây
    heart.style.animationDelay = delay + 's';
    heart.style.animationDuration = (3 + Math.random() * 2) + 's'; // Thời gian bay ngẫu nhiên

    heartsContainer.appendChild(heart);

    // Xóa trái tim sau khi kết thúc animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Hàm tạo một pháo hoa
function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    // Đặt vị trí ngẫu nhiên
    firework.style.left = Math.random() * 100 + 'vw';
    firework.style.top = Math.random() * 100 + 'vh';
    
    // Thời gian delay ngẫu nhiên
    const delay = Math.random() * 2; 
    firework.style.animationDelay = delay + 's';

    fireworksContainer.appendChild(firework);

    // Xóa pháo hoa sau khi kết thúc animation
    firework.addEventListener('animationend', () => {
        firework.remove();
    });
}

// Lắng nghe sự kiện bấm vào link
triggerLink.addEventListener('click', function(event) {
    // Ngăn hành vi mặc định của link
    event.preventDefault(); 
    
    // Ẩn link và hiện nội dung chính
    triggerLink.style.display = 'none';
    mainContent.classList.add('active');

    // Tạo một loạt trái tim ban đầu
    const numberOfHearts = 20; 
    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(createHeart, i * 200); // Tạo mỗi trái tim cách nhau 200ms
    }

    // Tạo một loạt pháo hoa ban đầu
    const numberOfFireworks = 30; 
    for (let i = 0; i < numberOfFireworks; i++) {
        setTimeout(createFirework, i * 150); // Tạo mỗi pháo hoa cách nhau 150ms
    }

    // Tiếp tục tạo trái tim và pháo hoa liên tục
    setInterval(createHeart, 500); // Tạo một trái tim mỗi 0.5 giây
    setInterval(createFirework, 300); // Tạo một pháo hoa mỗi 0.3 giây
});