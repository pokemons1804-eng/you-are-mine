/* ================================================
   VALENTINE'S WEEK 2026 - INTERACTIVE LOGIC
   ================================================ */

// ================================================
// CONFIGURATION & DATA
// ================================================

const VALENTINE_WEEK_DATA = [
    {
        id: 'rose-day',
        name: 'Rose Day',
        emoji: '🌹',
        date: '2026-02-07',
        displayDate: 'February 7, 2026',
        message: 'Every rose has its story, and ours began with a promise.',
        question: 'When did I propose you to marry me?',
        inputType: 'date',
        correctAnswer: '2024-12-29', // 29/12/2024
    },
    {
        id: 'propose-day',
        name: 'Propose Day',
        emoji: '💍',
        date: '2026-02-08',
        displayDate: 'February 8, 2026',
        message: 'Remember the wind in our hair and the freedom we felt?',
        question: 'Our scooty ride in Lucknow?',
        inputType: 'date',
        correctAnswer: '2021-08-19', // 19/08/2021
    },
    {
        id: 'chocolate-day',
        name: 'Chocolate Day',
        emoji: '🍫',
        date: '2026-02-09',
        displayDate: 'February 9, 2026',
        message: 'The sweetest reunions are worth every mile traveled.',
        question: 'When did I meet you after coming from Bangalore?',
        inputType: 'date',
        correctAnswer: '2025-01-16', // 16/01/2025
    },
    {
        id: 'teddy-day',
        name: 'Teddy Day',
        emoji: '🧸',
        date: '2026-02-10',
        displayDate: 'February 10, 2026',
        message: 'Adventures are better when shared with you.',
        question: 'When did we go to Bithoor?',
        inputType: 'date',
        correctAnswer: '2026-01-22', // 22/01/2026
    },
    {
        id: 'promise-day',
        name: 'Promise Day',
        emoji: '🤝',
        date: '2026-02-11',
        displayDate: 'February 11, 2026',
        message: 'Three words that changed everything.',
        question: 'When did I say that I love you?',
        inputType: 'date',
        correctAnswer: '2026-02-04', // 04/02/2026
    },
    {
        id: 'hug-day',
        name: 'Hug Day',
        emoji: '🤗',
        date: '2026-02-12',
        displayDate: 'February 12, 2026',
        message: 'Every step with you feels special.',
        question: 'When did you buy me shoes?',
        inputType: 'date',
        correctAnswer: '2025-06-25', // 25/06/2025
    },
    {
        id: 'kiss-day',
        name: 'Kiss Day',
        emoji: '💋',
        date: '2026-02-13',
        displayDate: 'February 13, 2026',
        message: 'Treasures from faraway places, worn close to the heart.',
        question: 'What did I bring you from Goa?',
        inputType: 'text',
        correctAnswer: 'bracelet',
    },
    {
        id: 'valentine-day',
        name: "Valentine's Day",
        emoji: '💝',
        date: '2026-02-14',
        displayDate: 'February 14, 2026',
        message: 'First gifts are never forgotten.',
        question: 'What was the first gift I gave you?',
        inputType: 'date',
        correctAnswer: '2025-05-27', // 27/05/2025
    }
];

const LOVE_NOTES = [
    "padh le bhai",
    "excersize karo",
    "malik spicy noodles nhi khaane hain",
    "poore din call kyu chalani hai",
    "video on karle",
    "earphone khareed lo",
    "phone he chutiya hai",
    "baal achhe lag rahe",
    "muu mat fulaao",
    "yellow color ka sweater tmpe accha lag raha",
    "hatt be",
    "inhaler kaha hai mera",
    "moti hain aap boht",
    "bhai kitne pimples hain",
    "makeup nhi khareedna hai",
    "aankhe acchi hai",
    "awaaj acchi hai",
    "call chalte chalte nhi sona hai",
    "muu se haath hatao",
    "tmhari side profile acchi lagti hai",
    "kitna overthink karti hai",
    "overthink karna band kardo",
    "padhai kar jaake",
    "gaana sunao koi",
    "ghar k kaam kar liya karo",
    "apni image acchi karlo",
    "mature bano bhai",
    "bachpana chor do"
];

const NAMES = ['Vampire', 'Khushi', 'Shrishti'];

// ================================================
// STORAGE UTILITIES
// ================================================

function getUnlockedDays() {
    const stored = localStorage.getItem('unlockedDays');
    return stored ? JSON.parse(stored) : [];
}

function unlockDay(dayId) {
    const unlocked = getUnlockedDays();
    if (!unlocked.includes(dayId)) {
        unlocked.push(dayId);
        localStorage.setItem('unlockedDays', JSON.stringify(unlocked));
    }
}

function isDayUnlocked(dayId) {
    return getUnlockedDays().includes(dayId);
}

// ================================================
// DATE UTILITIES
// ================================================

function getCurrentDate() {
    // For testing, override to Rose Day (Feb 7, 2026)
    return new Date('2026-02-07');
    
    // For production, uncomment this line:
    // return new Date();
}

function formatDateForComparison(dateString) {
    // Convert YYYY-MM-DD to Date object
    return new Date(dateString + 'T00:00:00');
}

function isDayAvailable(dayDate) {
    const today = getCurrentDate();
    const targetDate = formatDateForComparison(dayDate);
    
    // Reset time to compare only dates
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);
    
    return today >= targetDate;
}

function isPreviousDayUnlocked(dayIndex) {
    if (dayIndex === 0) return true; // First day has no previous
    const previousDay = VALENTINE_WEEK_DATA[dayIndex - 1];
    return isDayUnlocked(previousDay.id);
}

// ================================================
// VALIDATION
// ================================================

function validateAnswer(day, userAnswer) {
    if (day.inputType === 'date') {
        // User answer is in YYYY-MM-DD format from input[type="date"]
        return userAnswer === day.correctAnswer;
    } else {
        // Text input - case insensitive
        return userAnswer.toLowerCase().trim() === day.correctAnswer.toLowerCase();
    }
}

// ================================================
// UI RENDERING
// ================================================

function renderNavigation() {
    const navDays = document.getElementById('navDays');
    const unlockedDays = getUnlockedDays();
    
    navDays.innerHTML = '';
    
    VALENTINE_WEEK_DATA.forEach(day => {
        if (isDayUnlocked(day.id)) {
            const navDay = document.createElement('div');
            navDay.className = 'nav-day';
            navDay.textContent = `${day.emoji} ${day.name}`;
            navDay.onclick = () => showDay(day.id);
            navDays.appendChild(navDay);
        }
    });
}

function renderDayPages() {
    const dayPagesContainer = document.getElementById('dayPages');
    dayPagesContainer.innerHTML = '';
    
    VALENTINE_WEEK_DATA.forEach((day, index) => {
        const isAvailable = isDayAvailable(day.date);
        const isUnlocked = isDayUnlocked(day.id);
        const isPrevUnlocked = isPreviousDayUnlocked(index);
        
        // Only render if date has arrived
        if (!isAvailable) return;
        
        const dayPage = document.createElement('section');
        dayPage.className = 'day-page';
        dayPage.id = day.id;
        dayPage.dataset.dayId = day.id;
        
        let contentHTML = `
            <div class="day-header">
                <div class="day-emoji">${day.emoji}</div>
                <h1 class="day-title">${day.name}</h1>
                <p class="day-date">${day.displayDate}</p>
            </div>
        `;
        
        if (isUnlocked) {
            // Day is unlocked - show success message
            contentHTML += `
                <div class="day-content">
                    <div class="day-message">${day.message}</div>
                    <div class="day-success">
                        ✨ Unlocked! This memory is ours forever. ✨
                    </div>
                </div>
            `;
        } else if (!isPrevUnlocked && index > 0) {
            // Previous day not unlocked yet
            contentHTML += `
                <div class="day-locked-message">
                    🔒 This day will unlock after you complete ${VALENTINE_WEEK_DATA[index - 1].name}.
                </div>
            `;
        } else {
            // Day is available but locked - show question
            contentHTML += `
                <div class="day-content">
                    <div class="day-message">${day.message}</div>
                    <div class="day-question-section">
                        <div class="day-question">${day.question}</div>
                        <div class="day-input-group">
                            ${day.inputType === 'date' 
                                ? `<input type="date" class="day-date-input" id="${day.id}-input" />`
                                : `<input type="text" class="day-input" id="${day.id}-input" placeholder="Type your answer..." />`
                            }
                            <button class="day-submit" onclick="handleDaySubmit('${day.id}')">
                                Unlock Next Day 💕
                            </button>
                        </div>
                        <div id="${day.id}-feedback"></div>
                    </div>
                </div>
            `;
        }
        
        dayPage.innerHTML = contentHTML;
        dayPagesContainer.appendChild(dayPage);
    });
}

function showDay(dayId) {
    // Hide all pages
    document.querySelectorAll('.day-page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Hide welcome and finale screens
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('valentineFinale').style.display = 'none';
    
    // Show selected day
    const selectedDay = document.getElementById(dayId);
    if (selectedDay) {
        selectedDay.classList.add('active');
    }
    
    // Update navigation active state
    document.querySelectorAll('.nav-day').forEach((nav, index) => {
        nav.classList.remove('active');
        if (VALENTINE_WEEK_DATA[index].id === dayId) {
            nav.classList.add('active');
        }
    });
}

function showWelcomeScreen() {
    document.getElementById('welcomeScreen').style.display = 'flex';
    document.querySelectorAll('.day-page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('valentineFinale').style.display = 'none';
}

function showValentineFinale() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.querySelectorAll('.day-page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('valentineFinale').style.display = 'flex';
    
    // Create falling petals
    createFallingPetals();
}

// ================================================
// DAY SUBMISSION HANDLER
// ================================================

function handleDaySubmit(dayId) {
    const day = VALENTINE_WEEK_DATA.find(d => d.id === dayId);
    if (!day) return;
    
    const input = document.getElementById(`${dayId}-input`);
    const feedback = document.getElementById(`${dayId}-feedback`);
    const userAnswer = input.value.trim();
    
    if (!userAnswer) {
        feedback.innerHTML = '<div class="day-error">Please provide an answer.</div>';
        return;
    }
    
    if (validateAnswer(day, userAnswer)) {
        // Correct answer!
        unlockDay(dayId);
        feedback.innerHTML = '<div class="day-success">✨ Correct! Moving to the next day... ✨</div>';
        
        setTimeout(() => {
            // Check if this was Valentine's Day
            if (dayId === 'valentine-day') {
                showValentineFinale();
            } else {
                // Refresh the page to show next day
                renderNavigation();
                renderDayPages();
                
                // Show next day if available
                const currentIndex = VALENTINE_WEEK_DATA.findIndex(d => d.id === dayId);
                if (currentIndex < VALENTINE_WEEK_DATA.length - 1) {
                    const nextDay = VALENTINE_WEEK_DATA[currentIndex + 1];
                    if (isDayAvailable(nextDay.date)) {
                        showDay(nextDay.id);
                    } else {
                        showWelcomeScreen();
                    }
                }
            }
        }, 1500);
    } else {
        // Wrong answer
        feedback.innerHTML = '<div class="day-error">❌ Not quite right. Try again, my love.</div>';
    }
}

// ================================================
// FLOATING ELEMENTS (ENVELOPES/BUTTERFLIES)
// ================================================

function createFloatingElements() {
    const container = document.getElementById('floatingElements');
    const items = ['💌', '🦋', '💌', '🦋', '💌', '🦋'];
    
    items.forEach((item, index) => {
        const floatingItem = document.createElement('div');
        floatingItem.className = 'floating-item';
        floatingItem.textContent = item;
        floatingItem.style.left = `${Math.random() * 90}%`;
        floatingItem.style.top = `${Math.random() * 80}%`;
        floatingItem.style.animationDelay = `${index * 0.5}s`;
        
        floatingItem.onclick = () => showLoveNote();
        
        container.appendChild(floatingItem);
    });
}

function showLoveNote() {
    const modal = document.getElementById('loveNoteModal');
    const noteText = document.getElementById('loveNoteText');
    
    // Pick random love note
    const randomNote = LOVE_NOTES[Math.floor(Math.random() * LOVE_NOTES.length)];
    noteText.textContent = randomNote;
    
    modal.classList.add('active');
}

function closeLoveNote() {
    const modal = document.getElementById('loveNoteModal');
    modal.classList.remove('active');
}

// ================================================
// FALLING PETALS (VALENTINE'S DAY)
// ================================================

function createFallingPetals() {
    const container = document.getElementById('fallingPetals');
    container.innerHTML = '';
    
    for (let i = 0; i < 30; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = '🌸';
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${3 + Math.random() * 4}s`;
        petal.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(petal);
    }
}

// ================================================
// MUSIC TOGGLE
// ================================================

let isMusicPlaying = false;

function toggleMusic() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.classList.add('muted');
        isMusicPlaying = false;
    } else {
        bgMusic.play().catch(() => {
            // Autoplay might be blocked, user needs to interact first
            console.log('Music autoplay blocked');
        });
        musicToggle.classList.remove('muted');
        isMusicPlaying = true;
    }
}

// ================================================
// NAME CYCLING ANIMATION
// ================================================

function startNameCycle() {
    const nameCycleElement = document.querySelector('.name-cycle');
    if (!nameCycleElement) return;
    
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % NAMES.length;
        nameCycleElement.textContent = NAMES[currentIndex];
    }, 2000);
}

// ================================================
// INITIALIZATION
// ================================================

function init() {
    // Setup floating elements
    createFloatingElements();
    
    // Setup modal close
    document.getElementById('modalClose').onclick = closeLoveNote;
    document.getElementById('loveNoteModal').onclick = (e) => {
        if (e.target.id === 'loveNoteModal') {
            closeLoveNote();
        }
    };
    
    // Setup music toggle
    document.getElementById('musicToggle').onclick = toggleMusic;
    
    // Start name cycling
    startNameCycle();
    
    // Render navigation and pages
    renderNavigation();
    renderDayPages();
    
    // Determine what to show
    const unlockedDays = getUnlockedDays();
    
    if (unlockedDays.includes('valentine-day')) {
        // Valentine's Day is unlocked - show finale
        showValentineFinale();
    } else if (unlockedDays.length > 0) {
        // Show the most recent unlocked day
        const lastUnlocked = unlockedDays[unlockedDays.length - 1];
        
        // Find if there's a next available day to show
        const lastIndex = VALENTINE_WEEK_DATA.findIndex(d => d.id === lastUnlocked);
        let dayToShow = lastUnlocked;
        
        if (lastIndex < VALENTINE_WEEK_DATA.length - 1) {
            const nextDay = VALENTINE_WEEK_DATA[lastIndex + 1];
            if (isDayAvailable(nextDay.date)) {
                dayToShow = nextDay.id;
            }
        }
        
        showDay(dayToShow);
    } else {
        // Check if any day is available
        let firstAvailableDay = null;
        for (const day of VALENTINE_WEEK_DATA) {
            if (isDayAvailable(day.date)) {
                firstAvailableDay = day;
                break;
            }
        }
        
        if (firstAvailableDay) {
            showDay(firstAvailableDay.id);
        } else {
            showWelcomeScreen();
        }
    }
}

// ================================================
// START THE APP
// ================================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Make handleDaySubmit available globally
window.handleDaySubmit = handleDaySubmit;
