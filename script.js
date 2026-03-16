const checkBtn = document.getElementById('checkBtn');
const answerInput = document.getElementById('answerInput');
const quizBox = document.getElementById('quizBox');
const wishBox = document.getElementById('wishBox');
const failMessage = document.getElementById('failMessage');

// Kata kunci jawaban gombal
const keyword = "pikiran"; 

checkBtn.addEventListener('click', () => {
    const userAnswer = answerInput.value.toLowerCase().trim();

    // Cek jawaban
    if (userAnswer.includes(keyword)) {
        // Efek transisi kalau benar
        quizBox.style.opacity = '0';
        quizBox.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
            quizBox.style.display = 'none';
            wishBox.classList.remove('hidden');
            // Langsung hujan gemas!
            createGemasRain(); 
        }, 500);
    } else {
        const pesanSalah = [
            "Salah! Beruangnya sedih lho.. ( >_< )",
            "Bukan! Jam dinding kan dipajang, kalau kamu?",
            "Nyerah ya? Jawabannya ada di kepala aku!",
            "Duh, ayo dikit lagi! Fokus ke 'Pikiran'.."
        ];
        failMessage.innerText = pesanSalah[Math.floor(Math.random() * pesanSalah.length)];
        
        // Efek getar (shake) kalau salah
        quizBox.style.animation = "shake 0.3s";
        setTimeout(() => quizBox.style.animation = "", 300);
    }
});

// Fungsi Hujan Hal-hal Gemas
function createGemasRain() {
    // Daftar emoji gemas
    const emojises = ['💖', '☁️', '✨', '☁️', '🌸', '🍡', '🍭', '🐾'];
    
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const gemas = document.createElement('div');
            gemas.classList.add('flying-gemas');
            
            // Pilih emoji secara acak
            gemas.innerText = emojises[Math.floor(Math.random() * emojises.length)];
            
            // Posisi dan kecepatan acak
            gemas.style.left = Math.random() * 100 + "vw";
            gemas.style.bottom = "-50px";
            gemas.style.animationDuration = (Math.random() * 2 + 2) + "s"; // 2-4 detik
            
            document.body.appendChild(gemas);
            
            // Hapus setelah animasi selesai
            setTimeout(() => gemas.remove(), 4000);
        }, i * 120); // Jeda antar emoji
    }
}