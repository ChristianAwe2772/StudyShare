// ========================================== //
// DATENBANKEN (In-Memory Arrays)             //
// ========================================== //

// Kombination aus Marktplatz und Detaillierten Lernsets
const materialsData = [
    { 
        id: 1, title: 'Differentialrechnung Kompakt', author: 'Sarah M.', uni: 'TU Köln', rating: 4.9, price: 4.99, type: 'PDF', subject: 'Mathematik',
        description: 'Vollständige Erklärung der Ableitungsregeln und Kurvendiskussionen.',
        content: `
            <div class="space-y-4 text-slate-700">
                <p class="text-sm">Die Ableitung einer Funktion $f$ an der Stelle $x_0$ beschreibt die lokale Steigung des Funktionsgraphen:</p>
                <div class="bg-slate-900 text-indigo-300 p-4 rounded-2xl text-center font-mono my-4">$$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h) - f(x_0)}{h}$$</div>
                <h4 class="font-bold text-slate-900 text-sm uppercase tracking-wider mt-4">Wichtige Regeln</h4>
                <ul class="list-disc pl-5 space-y-1.5 text-xs">
                    <li><strong>Potenzregel:</strong> $(x^n)' = n \\cdot x^{n-1}$</li>
                    <li><strong>Kettenregel:</strong> $f(g(x))' = f'(g(x)) \\cdot g'(x)$</li>
                </ul>
            </div>`
    },
    { 
        id: 2, title: 'Newtonsche Gesetze Übersicht', author: 'David K.', uni: 'RWTH Aachen', rating: 4.7, price: 3.50, type: 'PDF', subject: 'Physik',
        description: 'Klar verständliche Ausarbeitung der 3 Newtonschen Axiome.',
        content: `
            <div class="space-y-4 text-slate-700">
                <p class="text-sm">Die klassische Mechanik basiert auf den Axiomen von Newton:</p>
                <ol class="list-decimal pl-5 space-y-3 text-xs">
                    <li><strong>Trägheitsprinzip:</strong> Körper verharren in Ruhe, solange keine Kräfte wirken.</li>
                    <li><strong>Aktionsprinzip:</strong> <div class="bg-slate-900 text-indigo-300 p-3 rounded-xl text-center font-mono my-2 w-max">$$F = m \\cdot a$$</div></li>
                    <li><strong>Wechselwirkungsprinzip:</strong> Actio = Reactio.</li>
                </ol>
            </div>`
    },
    { id: 3, title: 'Geschichte: Weimarer Republik', author: 'Elena R.', uni: 'HU Berlin', rating: 5.0, price: 5.00, type: 'Präsentation', subject: 'Geschichte', description: 'Perfekt fürs Abi.', content: '<p>Inhalt folgt...</p>' },
    { id: 4, title: 'Englisch Vokabeln Oberstufe', author: 'Max W.', uni: 'Uni Köln', rating: 4.8, price: 2.99, type: 'Flashcards', subject: 'Englisch', description: 'Top 500 Vokabeln.', content: '<p>Inhalt folgt...</p>' }
];

const tutorsData = [
    { id: 1, name: 'Lukas B.', uni: 'RWTH Aachen', subject: 'Mathematik, Physik', rate: 15.00, rating: 4.9 },
    { id: 2, name: 'Sarah M.', uni: 'TU Köln', subject: 'Mathe, Chemie', rate: 13.50, rating: 5.0 },
    { id: 3, name: 'Clara S.', uni: 'Uni Heidelberg', subject: 'Deutsch, Englisch', rate: 18.00, rating: 4.8 }
];

const socialData = [
    { id: 1, school: 'Schiller-Gymnasium', city: 'Köln', subject: 'Mathe & Physik', time: 'Dienstags, 14:00 - 16:00', spots: 2, author: 'Studenten-Initiative Köln', tag: 'Dringend' },
    { id: 2, school: 'Gesamtschule Mitte', city: 'Aachen', subject: 'Englisch (Mittelstufe)', time: 'Mittwochs, 15:00 - 16:30', spots: 4, author: 'Anna K.', tag: 'Regelmäßig' }
];

// STATE
let cart = [];
let purchasedSetIds = [];
let schuelerBudget = 35.00;
let isLoggedIn = false;

// Tutor Stats
let tutorECTSHours = 18;
let tutorSetEarnings = 44.95;
let tutorCallEarnings = 18.20;

// Call Status
let callInterval = null;
let callActive = false;
let callDurationSeconds = 0;
let callCostPerSecond = 0;


window.onload = function () {
    lucide.createIcons();
    renderMaterials();
    renderTutors();
    renderSocial();
    updateCartUI();
    renderLibrary();
    updateTutorStats();
};

// ========================================== //
// TAB NAVIGATION                             //
// ========================================== //
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
        el.classList.add('hidden');
    });
    
    const selectedTab = document.getElementById(`tab-${tabId}`);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
        selectedTab.classList.add('active');
    }

    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('text-indigo-600', 'text-emerald-600', 'text-purple-600');
        el.classList.add('text-slate-500', 'text-slate-700'); // Zurücksetzen auf Standard-Dunkelgrau
    });

    if(tabId !== 'home') {
        const activeLink = document.getElementById(`nav-${tabId}`);
        if(activeLink) {
            activeLink.classList.remove('text-slate-500', 'text-slate-700');
            if(tabId === 'social') activeLink.classList.add('text-emerald-600');
            else if(tabId === 'tutor-hub') activeLink.classList.add('text-purple-600');
            else activeLink.classList.add('text-indigo-600');
        }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    lucide.createIcons();
}

// ========================================== //
// RENDERING: MARKTPLATZ & SHOP               //
// ========================================== //
function renderMaterials() {
    const container = document.getElementById('materials-grid');
    if(!container) return;
    container.innerHTML = '';
    
    materialsData.forEach(item => {
        const isBought = purchasedSetIds.includes(item.id);
        const inCart = cart.some(c => c.id === item.id);
        
        let btnHtml = '';
        if(isBought) {
            btnHtml = `<button class="px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-emerald-50 text-emerald-600 cursor-default"><i data-lucide="check" class="w-4 h-4"></i> Im Besitz</button>`;
        } else if (inCart) {
            btnHtml = `<button class="px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-slate-100 text-slate-400 cursor-default"><i data-lucide="shopping-cart" class="w-4 h-4"></i> Im Warenkorb</button>`;
        } else {
            btnHtml = `<button onclick="addToCart(${item.id})" class="px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-600/20 transition"><i data-lucide="shopping-cart" class="w-4 h-4"></i> In den Korb</button>`;
        }

        container.innerHTML += `
            <div class="bg-white rounded-3xl p-6 border border-slate-200 hover:shadow-lg transition-all flex flex-col h-full">
                <div class="flex justify-between items-start mb-3">
                    <span class="text-[9px] font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg">${item.type}</span>
                    <span class="text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100 flex items-center"><i data-lucide="star" class="w-3 h-3 fill-current mr-1"></i> ${item.rating}</span>
                </div>
                <h3 class="font-bold text-base text-slate-900 mb-1 leading-snug">${item.title}</h3>
                <p class="text-xs text-slate-500 mb-4">${item.author}</p>
                <div class="flex justify-between items-center mt-auto pt-4 border-t border-slate-50">
                    <span class="font-extrabold text-lg text-slate-900">${item.price.toFixed(2)} €</span>
                    ${btnHtml}
                </div>
            </div>`;
    });
    lucide.createIcons();
}

// ========================================== //
// WARENKORB & CHECKOUT LOGIK                 //
// ========================================== //
function addToCart(id) {
    const item = materialsData.find(m => m.id === id);
    if(item && !cart.some(c => c.id === id) && !purchasedSetIds.includes(id)) {
        cart.push(item);
        updateCartUI();
        renderMaterials();
        openCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
    renderMaterials();
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const footer = document.getElementById('cart-footer');
    const badges = [document.getElementById('cart-badge'), document.getElementById('mobile-cart-badge')];
    
    badges.forEach(b => {
        if(b && cart.length > 0) { b.classList.remove('hidden'); b.innerText = cart.length; } 
        else if (b) b.classList.add('hidden');
    });

    if(!container) return;

    if(cart.length === 0) {
        container.innerHTML = `<div class="text-center text-slate-400 pt-20"><i data-lucide="shopping-cart" class="w-16 h-16 opacity-20 mx-auto mb-4"></i><p class="text-sm font-semibold">Warenkorb leer.</p></div>`;
        footer.classList.add('hidden');
    } else {
        let total = 0;
        container.innerHTML = '<div class="space-y-4">';
        cart.forEach(item => {
            total += item.price;
            container.innerHTML += `
                <div class="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div class="flex-1">
                        <h4 class="font-bold text-xs text-slate-900">${item.title}</h4>
                        <p class="text-[10px] text-slate-500">${item.price.toFixed(2)} €</p>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-400 hover:text-red-600"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                </div>`;
        });
        container.innerHTML += '</div>';
        document.getElementById('cart-total').innerText = total.toFixed(2) + ' €';
        
        // Checkout Button Updaten
        footer.innerHTML = `
            <div class="flex justify-between items-center mb-6">
                <span class="text-sm font-semibold text-slate-500">Gesamtsumme</span>
                <span class="text-2xl font-extrabold text-slate-900">${total.toFixed(2)} €</span>
            </div>
            <button onclick="checkoutCart(${total})" class="w-full bg-indigo-600 text-white py-4 rounded-xl text-sm font-bold hover:bg-indigo-700 transition shadow-md shadow-indigo-600/20">Jetzt kaufen (${total.toFixed(2)} €)</button>
        `;
        footer.classList.remove('hidden');
    }
    lucide.createIcons();
}

function checkoutCart(totalCost) {
    if (schuelerBudget >= totalCost) {
        // Budget abziehen
        schuelerBudget -= totalCost;
        updateBudgetDisplay();

        // Sets in Bibliothek verschieben
        cart.forEach(item => {
            purchasedSetIds.push(item.id);
            tutorSetEarnings += item.price; // Tutor bekommt 100%
        });
        
        cart = []; // Warenkorb leeren
        updateCartUI();
        renderMaterials(); // Shop updaten (Buttons auf "Im Besitz")
        renderLibrary();   // In Schüler-Dashboard eintragen
        updateTutorStats(); // Tutor Dashboard updaten
        
        closeCart();
        showToast('Kauf erfolgreich!', 'Die Lernsets befinden sich nun in deinem Lernbereich.', 'success');
        switchTab('student-hub'); // Direkt zum Dashboard leiten
    } else {
        showToast('Guthaben reicht nicht', 'Bitte lade zuerst dein Guthaben in deinem Lernbereich auf.', 'error');
    }
}

// ========================================== //
// MEIN LERNBEREICH (SCHÜLER HUB)             //
// ========================================== //
function updateBudgetDisplay() {
    const displays = document.querySelectorAll('#schueler-budget-display');
    displays.forEach(el => el.innerText = schuelerBudget.toFixed(2) + ' €');
}

function renderLibrary() {
    const grid = document.getElementById('library-grid');
    const emptyState = document.getElementById('library-empty-state');
    const counter = document.getElementById('library-count');
    if(!grid) return;

    grid.innerHTML = '';
    const purchased = materialsData.filter(m => purchasedSetIds.includes(m.id));
    counter.innerText = purchased.length;

    if(purchased.length === 0) {
        grid.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        grid.classList.remove('hidden');
        
        purchased.forEach(set => {
            grid.innerHTML += `
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                        <span class="text-[9px] uppercase font-bold text-indigo-600 bg-indigo-100/50 px-2 py-0.5 rounded">${set.subject}</span>
                        <h4 class="font-bold text-sm text-slate-800 mt-2">${set.title}</h4>
                    </div>
                    <button onclick="openLernsetModal(${set.id})" class="w-full bg-white border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 text-slate-700 text-xs font-bold py-2.5 rounded-xl mt-4 transition flex items-center justify-center gap-1.5 shadow-sm">
                        <i data-lucide="book-open" class="w-3.5 h-3.5"></i> Öffnen
                    </button>
                </div>`;
        });
    }
    lucide.createIcons();
}

function openLernsetModal(id) {
    const set = materialsData.find(item => item.id === id);
    if (!set) return;

    document.getElementById('modal-subject').innerText = set.subject;
    document.getElementById('modal-title').innerText = set.title;
    document.getElementById('modal-content-body').innerHTML = `
        <div class="border-b border-slate-100 pb-3 mb-3">
            <p class="text-xs text-slate-400"><strong>Kurzbeschreibung:</strong> ${set.description}</p>
        </div>
        ${set.content}`;

    document.getElementById('lernset-modal').classList.remove('hidden');
}
function closeLernsetModal() { document.getElementById('lernset-modal').classList.add('hidden'); }

// ========================================== //
// VIDEO CALLS & SIMULATION                   //
// ========================================== //
function renderTutors() {
    const container = document.getElementById('tutors-grid');
    if(!container) return;
    container.innerHTML = '';
    
    tutorsData.forEach(tutor => {
        container.innerHTML += `
            <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col">
                <div class="flex items-center gap-4 mb-5 border-b border-slate-50 pb-4">
                    <div class="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600"><i data-lucide="user" class="w-5 h-5"></i></div>
                    <div>
                        <h3 class="font-bold text-base text-slate-900">${tutor.name}</h3>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">${tutor.uni}</p>
                    </div>
                </div>
                <div class="space-y-3 mb-6 flex-1">
                    <div class="flex justify-between items-center text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <span class="text-slate-500 font-semibold">Fächer:</span><span class="font-bold text-slate-800">${tutor.subject}</span>
                    </div>
                    <div class="flex justify-between items-center text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <span class="text-slate-500 font-semibold">Preis / 45 Min:</span><span class="font-extrabold text-purple-700">${tutor.rate.toFixed(2)} €</span>
                    </div>
                </div>
                <button onclick="initiateCall('${tutor.name}', ${tutor.rate})" class="w-full bg-purple-600 text-white py-3.5 rounded-xl text-xs font-bold hover:bg-purple-700 transition flex justify-center items-center gap-1.5 shadow-md">
                    <i data-lucide="video" class="w-4 h-4"></i> Jetzt anrufen
                </button>
            </div>`;
    });
    lucide.createIcons();
}

function initiateCall(tutor, rate45Min) {
    const costPerMinute = rate45Min / 45;
    if (schuelerBudget < costPerMinute) {
        showToast('Fehler', 'Nicht genug Guthaben für einen Call.', 'error');
        return;
    }

    callActive = true;
    callCostPerSecond = costPerMinute / 60;
    callDurationSeconds = 0;

    document.getElementById('call-tutor-name').innerText = tutor;
    document.getElementById('call-tutor-label').innerText = tutor;
    document.getElementById('call-live-cost').innerText = "0,00 €";
    document.getElementById('call-timer').innerText = "00:00";
    document.getElementById('video-call-modal').classList.remove('hidden');

    callInterval = setInterval(() => {
        callDurationSeconds++;
        const mins = Math.floor(callDurationSeconds / 60).toString().padStart(2, '0');
        const secs = (callDurationSeconds % 60).toString().padStart(2, '0');
        document.getElementById('call-timer').innerText = `${mins}:${secs}`;

        const accruedCost = callDurationSeconds * callCostPerSecond;
        document.getElementById('call-live-cost').innerText = accruedCost.toFixed(2) + " €";

        if (accruedCost >= schuelerBudget) {
            terminateCall();
            showToast('Guthaben leer', 'Call wurde automatisch beendet.', 'info');
        }
    }, 1000);
}

function terminateCall() {
    if (!callActive) return;
    clearInterval(callInterval);
    callActive = false;

    const finalCost = callDurationSeconds * callCostPerSecond;
    schuelerBudget -= finalCost;
    updateBudgetDisplay();

    // Tutor bekommt 70% der Call-Kosten
    const tutorEarned = finalCost * 0.7;
    tutorCallEarnings += tutorEarned;
    updateTutorStats();
    
    // Log eintragen im Tutor Hub
    const log = document.getElementById('tutor-activity-log');
    if(log) {
        log.innerHTML = `
            <div class="flex justify-between items-start border-b border-slate-100 pb-3">
                <div><p class="font-bold text-slate-800 text-sm">1:1 Call (Live)</p><p class="text-[10px] text-slate-500 mt-0.5">${Math.floor(callDurationSeconds/60)}m ${callDurationSeconds%60}s</p></div>
                <span class="text-purple-600 font-bold text-xs bg-purple-50 px-2 py-1 rounded-md">+ ${tutorEarned.toFixed(2)} €</span>
            </div>` + log.innerHTML;
    }

    document.getElementById('video-call-modal').classList.add('hidden');
    showToast('Call beendet', `Dauer: ${Math.floor(callDurationSeconds/60)} Min. Gekostet: ${finalCost.toFixed(2)} €`, 'success');
}

// ========================================== //
// TUTOR-PORTAL LOGIK                         //
// ========================================== //
function updateTutorStats() {
    const total = tutorSetEarnings + tutorCallEarnings;
    const disp = document.getElementById('student-payout-display');
    if(disp) disp.innerText = total.toFixed(2) + " €";

    if(document.getElementById('tutor-stats-hours')) {
        document.getElementById('tutor-stats-hours').innerHTML = `${tutorECTSHours} <span class="text-sm font-medium text-slate-400">/ 30 Std.</span>`;
        document.getElementById('tutor-stats-sets').innerText = `${tutorSetEarnings.toFixed(2)} €`;
        document.getElementById('tutor-stats-calls').innerText = `${tutorCallEarnings.toFixed(2)} €`;
        const percentage = Math.min(100, (tutorECTSHours / 30) * 100);
        document.getElementById('tutor-hours-bar').style.width = percentage + "%";
    }
}

function createLernset(event) {
    event.preventDefault();
    const title = document.getElementById('creator-title').value;
    const subject = document.getElementById('creator-subject').value;
    const type = document.getElementById('creator-grade').value;
    const price = parseFloat(document.getElementById('creator-price').value);
    const rawContent = document.getElementById('creator-content').value;

    const newId = materialsData.length + 10;
    materialsData.push({
        id: newId, title: title, subject: subject, type: type, price: price, 
        author: 'Jonas (Du)', rating: 5.0, description: 'Von mir hochgeladen.',
        content: `<div class="space-y-4 text-slate-700"><p class="text-sm">${rawContent}</p></div>`
    });

    const log = document.getElementById('tutor-activity-log');
    if(log) {
        log.innerHTML = `
            <div class="flex justify-between items-start border-b border-slate-100 pb-3">
                <div><p class="font-bold text-slate-800 text-sm">Upload: "${title}"</p><p class="text-[10px] text-slate-500 mt-0.5">Shop-Preis: ${price.toFixed(2)} €</p></div>
                <span class="text-indigo-600 font-bold text-xs bg-indigo-50 px-2 py-1 rounded-md">Gelistet</span>
            </div>` + log.innerHTML;
    }

    event.target.reset();
    renderMaterials(); // Marktplatz aktualisieren
    showToast('Erfolg!', 'Lernset wurde im globalen Shop veröffentlicht.', 'success');
}

function logSchoolHour(event) {
    event.preventDefault();
    const school = document.getElementById('log-school').value;
    const hours = parseInt(document.getElementById('log-duration').value);
    
    tutorECTSHours += hours;
    updateTutorStats();

    const log = document.getElementById('tutor-activity-log');
    if(log) {
        log.innerHTML = `
            <div class="flex justify-between items-start border-b border-slate-100 pb-3">
                <div><p class="font-bold text-slate-800 text-sm">${hours} Std. Nachhilfe</p><p class="text-[10px] text-slate-500 mt-0.5">${school}</p></div>
                <span class="bg-yellow-50 text-yellow-700 font-bold px-2 py-1 rounded-md text-[10px] border border-yellow-100">Prüfung..</span>
            </div>` + log.innerHTML;
    }

    event.target.reset();
    showToast('Stunde eingereicht', 'Dein sozialer Einsatz wurde vermerkt.', 'info');
}

// ========================================== //
// SONSTIGE HELFER (Social, Aufladen, UI)     //
// ========================================== //
function renderSocial() { /* Unverändert aus meiner HTML Vorlage (ist da schon aufgerufen) */ }
function openCart() { document.getElementById('cart-drawer').classList.remove('hidden'); setTimeout(() => { document.getElementById('cart-panel').classList.remove('translate-x-full'); }, 10); }
function closeCart() { document.getElementById('cart-panel').classList.add('translate-x-full'); setTimeout(() => { document.getElementById('cart-drawer').classList.add('hidden'); }, 400); }
function openAuth(type) {
    const modal = document.getElementById('auth-modal');
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');
    const btn = document.getElementById('auth-submit-btn');
    const regFields = document.getElementById('auth-register-fields');

    if(type === 'login') {
        title.innerText = 'Willkommen zurück!';
        subtitle.innerText = 'Bitte logge dich ein, um fortzufahren.';
        btn.innerText = 'Einloggen';
        regFields.classList.add('hidden');
    } else {
        title.innerText = 'Konto erstellen';
        subtitle.innerText = 'Wähle deine Rolle und registriere dich.';
        btn.innerText = 'Kostenlos registrieren';
        regFields.classList.remove('hidden');
        regFields.classList.add('grid');
    }
    modal.classList.remove('hidden');
}function closeAuth() { document.getElementById('auth-modal').classList.add('hidden'); }
function handleLogin(e) { e.preventDefault(); isLoggedIn = true; closeAuth(); showToast('Eingeloggt', 'Willkommen zurück.'); }
function handleLogout() { isLoggedIn = false; cart = []; purchasedSetIds=[]; updateCartUI(); renderMaterials(); showToast('Abgemeldet', 'Auf Wiedersehen.'); }
function openDepositModal() { document.getElementById('deposit-modal').classList.remove('hidden'); }
function closeDepositModal() { document.getElementById('deposit-modal').classList.add('hidden'); }
function simulateDeposit(amount) {
    schuelerBudget += amount;
    updateBudgetDisplay();
    closeDepositModal();
    showToast('Guthaben aufgeladen', `+${amount.toFixed(2)} € wurden gutgeschrieben.`, 'success');
}

function showToast(title, message, type = 'success') {
    const container = document.getElementById('toast-container');
    if(!container) return;
    const toast = document.createElement('div');
    toast.className = `bg-white p-4 rounded-2xl border flex gap-3 shadow-xl transition-all duration-300 translate-y-4 opacity-0 pointer-events-auto max-w-sm`;
    
    let colorClass = type === 'success' ? 'text-emerald-500' : (type === 'error' ? 'text-red-500' : 'text-indigo-500');
    let icon = type === 'success' ? 'check-circle' : (type === 'error' ? 'alert-triangle' : 'info');

    toast.innerHTML = `<div class="${colorClass}"><i data-lucide="${icon}" class="w-5 h-5"></i></div>
        <div><h5 class="font-bold text-xs text-slate-900">${title}</h5><p class="text-[11px] text-slate-500 mt-0.5 leading-relaxed">${message}</p></div>`;
    
    container.appendChild(toast);
    lucide.createIcons();
    setTimeout(() => toast.classList.remove('translate-y-4', 'opacity-0'), 50);
    setTimeout(() => { toast.classList.add('translate-y-4', 'opacity-0'); setTimeout(() => toast.remove(), 300); }, 4000);
}