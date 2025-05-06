let currentSlide = 0;
const slides = document.querySelectorAll('.promotion');

function showSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.style.display = "none"; // Скрываем все слайды
    });
    slides[index].classList.add('active');
    slides[index].style.display = "block"; // Показываем текущий слайд
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(() => {
    changeSlide(1);
}, 5000);




function toggleMenu() {
    document.body.classList.toggle("open");
}



document.addEventListener('DOMContentLoaded', function() {
    function loadXML(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.overrideMimeType('application/xml');

        xhr.onload = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callback(xhr.responseXML);
            } else {
                console.error('Ошибка загрузки XML:', xhr.statusText);
            }
        };

        xhr.onerror = function() {
            console.error('Ошибка сети при загрузке XML.');
        };

        xhr.send();
    }

    function processXML(xmlDoc) {
        const contactInfo = document.querySelector('.contact-info');

        if (!contactInfo) {
            console.error('Ошибка: контейнер .contact-info не найден.');
            return;
        }

        const phone = xmlDoc.querySelector('phone').textContent;
        const email = xmlDoc.querySelector('email').textContent;
        const location = xmlDoc.querySelector('location').textContent;

        // Динамически создаём элементы и добавляем их внутрь `.contact-info`
        contactInfo.innerHTML = `
            <span class="phone">${phone}</span>
            <span class="email">${email}</span>
            <span class="location">${location}</span>
        `;
    }

    // Загружаем `contacts.xml`
    loadXML('contacts.xml', processXML);
});



