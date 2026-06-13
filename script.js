// ========================================== //
// DATENBANKEN (In-Memory Arrays)             //
// ========================================== //

const dbLernsets = [
    { 
        id: 1, title: 'Informatik: Python & OOP', author: 'Sarah M.', uni: 'TU Köln', rating: 4.9, price: 4.99, type: 'Skript', subject: 'Informatik',
        description: 'Kompakte Übersicht zu Datentypen und objektorientierter Programmierung in Python.',
        content: `
            <div class="space-y-4 text-slate-700">
                <p class="text-sm">In der objektorientierten Programmierung (OOP) bündeln wir Daten und Funktionen in sogenannten <strong>Klassen</strong>. Python macht diesen Ansatz durch seine klare Syntax besonders zugänglich:</p>
                
                <div class="bg-slate-900 text-indigo-300 p-4 rounded-2xl font-mono my-4 shadow-inner text-xs overflow-x-auto">
<pre><code>class Student:
    def __init__(self, name, grade):
        self.name = name
        self.grade = grade

    def get_info(self):
        return f"{self.name} hat die Note {self.grade}."</code></pre>
                </div>

                <h4 class="font-bold text-slate-900 text-sm uppercase tracking-wider mt-4">Die Säulen der OOP</h4>
                <ul class="list-disc pl-5 space-y-2 text-xs">
                    <li><strong>Kapselung:</strong> Daten (Attribute) werden vor direktem Zugriff von außen geschützt.</li>
                    <li><strong>Vererbung:</strong> Klassen können Eigenschaften von anderen (Eltern-)Klassen erben.</li>
                </ul>
                <p class="text-sm mt-4 font-medium text-slate-800">Die Theorie ist einfach, aber die Praxis hat ihre Tücken! Besonders das Konzept der <strong>Polymorphie</strong> und sogenannte <em>Magic Methods</em> sind in Klausuren berüchtigt.</p>

                <div class="mt-6 pt-6 border-t border-slate-200">
                    <h4 class="font-bold text-indigo-700 text-base mb-3">Tiefen-Modul: Magic Methods & Vererbung</h4>
                    <p class="text-sm mb-3">Magic Methods (Dunder Methods) wie <code class="bg-slate-100 px-1 rounded text-indigo-600">__len__</code> oder <code class="bg-slate-100 px-1 rounded text-indigo-600">__repr__</code> erlauben es unseren Klassen, sich wie eingebaute Python-Objekte zu verhalten. Das ist extrem nützlich, wenn wir z.B. eigene Datenstrukturen oder Text-Pipelines bauen.</p>
                    
                    <div class="bg-slate-900 text-indigo-300 p-4 rounded-2xl font-mono my-4 shadow-inner text-xs overflow-x-auto">
<pre><code>class TextDataset(Dataset): # Vererbung
    def __init__(self, texts):
        self.texts = texts
        
    def __len__(self):
        # Magic Method: Erlaubt len(mein_dataset)
        return len(self.texts)
        
    def __getitem__(self, idx):
        # Magic Method: Erlaubt mein_dataset[0]
        return self.texts[idx].lower()</code></pre>
                    </div>
                    <p class="text-sm mt-3">Durch die Vererbung von <code class="bg-slate-100 px-1 rounded text-indigo-600">Dataset</code> übernimmt unsere neue Klasse alle Basis-Eigenschaften der Elternklasse, überschreibt aber gezielt Funktionen für Textverarbeitung. Das ist das absolute Rückgrat für saubere, skalierbare Architekturen in Python.</p>
                </div>
            </div>`
    },
    { 
        id: 2, title: 'Newtonsche Gesetze Übersicht', author: 'David K.', uni: 'RWTH Aachen', rating: 4.7, price: 3.50, type: 'PDF', subject: 'Physik',
        description: 'Klar verständliche Ausarbeitung der 3 Newtonschen Axiome inkl. Beispielen.',
        content: `
            <div class="space-y-4 text-slate-700">
                <p class="text-sm">Die klassische Mechanik basiert fundamental auf den drei Axiomen von Sir Isaac Newton (1687). Sie beschreiben den Zusammenhang zwischen der Bewegung eines Körpers und den auf ihn wirkenden Kräften.</p>
                <ol class="list-decimal pl-5 space-y-4 text-xs">
                    <li>
                        <strong>Das Trägheitsprinzip (1. Axiom):</strong><br>
                        Ein Körper verharrt im Zustand der Ruhe oder der gleichförmigen geradlinigen Bewegung, solange keine resultierende äußere Kraft auf ihn einwirkt. 
                        <span class="text-slate-500 block mt-1 font-mono bg-slate-100 p-1.5 rounded w-max">Formel: $\\sum \\vec{F} = 0 \\implies \\vec{v} = \\text{konst.}$</span>
                    </li>
                    <li>
                        <strong>Das Aktionsprinzip (2. Axiom):</strong><br>
                        Die Änderung der Bewegung ist der Einwirkung der bewegenden Kraft proportional.
                        <div class="bg-slate-900 text-indigo-300 p-3 rounded-xl text-center font-mono my-2 w-max shadow-inner">$$\\vec{F} = m \\cdot \\vec{a}$$</div>
                    </li>
                </ol>
                <p class="text-sm mt-4 font-medium text-slate-800">Doch wie verhalten sich Kräfte zwischen zwei interagierenden Körpern? Das berühmte <strong>Wechselwirkungsprinzip (Actio = Reactio)</strong> liefert die Antwort und birgt die häufigsten Fehlerquellen im Abitur.</p>

                <div class="mt-6 pt-6 border-t border-slate-200">
                    <h4 class="font-bold text-indigo-700 text-base mb-3">Tiefen-Modul: Das 3. Axiom (Wechselwirkungsprinzip)</h4>
                    <p class="text-sm mb-3">"Kräfte treten immer paarweise auf. Übt ein Körper A auf einen Körper B eine Kraft aus (Actio), so übt Körper B auf Körper A eine gleich große, aber entgegengerichtete Kraft aus (Reactio)."</p>
                    <div class="bg-slate-900 text-indigo-300 p-3 rounded-xl text-center font-mono my-2 w-max shadow-inner">$$\\vec{F}_{A \\to B} = -\\vec{F}_{B \\to A}$$</div>
                    <p class="text-xs italic text-slate-500 mb-4">Achtung Klausurfalle: Actio und Reactio greifen <strong>immer</strong> an zwei verschiedenen Körpern an. Sie heben sich daher an einem einzelnen Körper niemals auf!</p>
                    
                    <h5 class="font-bold text-slate-900 text-sm mt-4">Klassisches Beispiel: Die schiefe Ebene</h5>
                    <p class="text-sm">Betrachten wir einen Block der Masse $m$ auf einer Ebene mit Neigungswinkel $\\alpha$. Die Gewichtskraft $\\vec{F}_G$ zerlegen wir in:</p>
                    <ul class="list-disc pl-5 space-y-1 text-xs mt-2">
                        <li><strong>Hangabtriebskraft:</strong> $F_H = m \\cdot g \\cdot \\sin(\\alpha)$</li>
                        <li><strong>Normalkraft:</strong> $F_N = m \\cdot g \\cdot \\cos(\\alpha)$</li>
                    </ul>
                </div>
            </div>`
    },
    { 
        id: 3, title: 'Geschichte: Weimarer Republik', author: 'Elena R.', uni: 'HU Berlin', rating: 5.0, price: 5.00, type: 'Präsentation', subject: 'Geschichte', 
        description: 'Die wichtigsten Phasen der Weimarer Republik, perfekt strukturiert fürs Abi.', 
        content: `
            <div class="space-y-4 text-slate-700">
                <p class="text-sm">Die Weimarer Republik (1918–1933) war der erste Versuch einer parlamentarischen Demokratie in Deutschland. Sie entstand aus den Wirren der Novemberrevolution am Ende des Ersten Weltkriegs.</p>
                <h4 class="font-bold text-slate-900 text-sm uppercase tracking-wider mt-4">Schlüsselereignisse der Gründungsphase</h4>
                <div class="space-y-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div class="flex gap-3 items-start">
                        <span class="font-bold text-indigo-600 w-16 shrink-0 pt-0.5">9. Nov 1918</span>
                        <span>Ausrufung der Republik (doppelt: durch Philipp Scheidemann und Karl Liebknecht). Abdankung des Kaisers.</span>
                    </div>
                    <div class="flex gap-3 items-start">
                        <span class="font-bold text-indigo-600 w-16 shrink-0 pt-0.5">11. Nov 1918</span>
                        <span>Unterzeichnung des Waffenstillstands von Compiègne.</span>
                    </div>
                </div>
                <p class="text-sm mt-4 font-medium text-slate-800">Trotz des demokratischen Aufbruchs war die junge Republik von Beginn an extremen Belastungsproben ausgesetzt. Der <strong>Versailler Vertrag</strong> und die drohende <strong>Hyperinflation von 1923</strong> schufen ein Pulverfass.</p>

                <div class="mt-6 pt-6 border-t border-slate-200">
                    <h4 class="font-bold text-indigo-700 text-base mb-3">Tiefen-Modul: Das Krisenjahr 1923</h4>
                    <p class="text-sm mb-3">1923 markiert den absoluten Tiefpunkt der jungen Republik und wurde von drei massiven Ereignissen geprägt:</p>
                    <ul class="list-disc pl-5 space-y-3 text-xs">
                        <li><strong>Ruhrbesetzung:</strong> Französische und belgische Truppen besetzten das Ruhrgebiet, um ausstehende Reparationszahlungen (Kohle/Holz) einzutreiben. Die Reichsregierung rief zum "passiven Widerstand" auf und bezahlte die streikenden Arbeiter, indem sie einfach mehr Geld druckte.</li>
                        <li><strong>Hyperinflation:</strong> Dieser Gelddruck führte zum totalen Währungsverfall. Ersparnisse der Mittelschicht wurden komplett entwertet, was zu einem massiven Vertrauensverlust in die Demokratie führte. (Im Nov. 1923 kostete 1 Dollar = 4,2 Billionen Mark).</li>
                        <li><strong>Hitler-Ludendorff-Putsch:</strong> Rechte Kräfte versuchten am 8./9. November in München, die Regierung zu stürzen. Der Putsch scheiterte zwar vor der Feldherrnhalle, machte Hitler aber national bekannt.</li>
                    </ul>
                    <p class="text-sm mt-4">Erst durch die Währungsreform (Einführung der Rentenmark) im November 1923 durch Gustav Stresemann konnte die Lage stabilisiert werden, was die Phase der "Goldenen Zwanziger" einleitete.</p>
                </div>
            </div>` 
    }
];
const tutorsData = [
    { id: 1, name: 'Lukas B.', uni: 'RWTH Aachen', subject: 'Mathematik, Physik', rate: 15.00, rating: 4.9 },
    { id: 2, name: 'Sarah M.', uni: 'TU Köln', subject: 'Mathe, Chemie', rate: 13.50, rating: 5.0 },
    { id: 3, name: 'Clara S.', uni: 'Uni Heidelberg', subject: 'Deutsch, Englisch', rate: 18.00, rating: 4.8 }
];

const socialData = [
    { id: 1, school: 'Schiller-Gymnasium', city: 'Berlin', subject: 'Mathe & Physik', time: 'Dienstags, 14:00 - 16:00', spots: 2, author: 'Studenten-Initiative TU Berlin', tag: 'Dringend' },
    { id: 2, school: 'Gesamtschule Mitte', city: 'München', subject: 'Englisch', time: 'Mittwochs, 15:00 - 16:30', spots: 4, author: 'Anna K.', tag: 'Regelmäßig' },
    { id: 3, school: 'Grundschule am Park', city: 'Köln', subject: 'Lesen & Schreiben', time: 'Freitags, 13:30 - 15:00', spots: 1, author: 'Lese-Paten Köln e.V.', tag: 'Neu' }
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

// ========================================== //
// RENDER FUNKTIONEN                          //
// ========================================== //

function renderLernsets(filter = 'all') {
    const grid = document.getElementById('lernset-marketplace-grid');
    if (!grid) return; // Falls Element auf der Seite nicht existiert
    
    // 1. Daten filtern
    const filteredSets = filter === 'all' 
        ? dbLernsets 
        : dbLernsets.filter(item => item.subject === filter);

    // 2. Grid leeren
    grid.innerHTML = '';

    // 3. Wenn keine Daten gefunden wurden
    if (filteredSets.length === 0) {
        grid.innerHTML = '<p class="empty-state-text">Keine Lernsets in dieser Kategorie gefunden.</p>';
        return;
    }

    // 4. HTML für jedes Item erstellen (ohne Tailwind!)
    filteredSets.forEach(set => {
        const card = `
            <div class="lernset-card">
                <div class="lernset-header">
                    <span class="lernset-badge">${set.subject}</span>
                    <span class="lernset-price">${set.price.toFixed(2)} €</span>
                </div>
                <h4 class="lernset-title">${set.title}</h4>
                <p class="lernset-author">${set.author} • ${set.uni}</p>
                <p class="lernset-description">${set.description}</p>
            </div>
        `;
        grid.insertAdjacentHTML('beforeend', card);
    });
}

function filterSets(category) {
    // 1. Alle Buttons zurücksetzen
    document.querySelectorAll('[id^="btn-filter-"]').forEach(btn => {
        btn.classList.remove('btn-filter-active');
    });
    
    // 2. Aktiven Button hervorheben
    const btnId = category === 'all' ? 'btn-filter-all' : (category === 'Mathematik' ? 'btn-filter-math' : 'btn-filter-physics');
    const activeBtn = document.getElementById(btnId);
    if (activeBtn) activeBtn.classList.add('btn-filter-active');
    
    // 3. Rendern
    renderLernsets(category);
}

// ========================================== //
// TAB NAVIGATION                             //
// ========================================== //

function switchTab(tabId) {
    // 1. Alle Tabs ausblenden
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
        // Falls du in Zukunft flex/grid nutzt, das 'hidden' sicherstellen
        if (!el.classList.contains('hidden')) el.classList.add('hidden'); 
    });
    
    // 2. Gewählten Tab einblenden
    const selectedTab = document.getElementById(`tab-${tabId}`);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
        selectedTab.classList.add('active');
    }

    // 3. Navigation Links stylen (über CSS-Klasse '.is-active')
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('is-active');
    });

    const activeLink = document.getElementById(`nav-${tabId}`);
    if(activeLink) {
        activeLink.classList.add('is-active');
    }

    // Nach oben scrollen und Icons neu laden
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========================================== //
// INITIALISIERUNG                            //
// ========================================== //

window.onload = function () {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    renderLernsets('all'); 
    renderMaterials();
    renderTutors();
    renderSocial();
    updateCartUI();
    renderLibrary();
    updateTutorStats();
};






// ========================================== //
// WARENKORB & CHECKOUT LOGIK                 //
// ========================================== //
function addToCart(id) {
    const item = dbLernsets.find(m => m.id === id);
    if(item && !cart.some(c => c.id === id) && !purchasedSetIds.includes(id)) {
        cart.push(item);
        updateCartUI();
        renderMaterials(); // <--- Hier korrigiert!
        openCart();
    }
}

function addAboToCart() {
    const aboId = 'premium-abo';
    
    if (purchasedSetIds.includes(aboId)) {
        showToast('Bereits aktiv', 'Du besitzt den Premium-Pass bereits.', 'info');
        return;
    }

    const inCart = cart.some(c => c.id === aboId);
    if (!inCart) {
        cart.push({
            id: aboId,
            title: 'StudyShare Premium-Pass (1 Monat)',
            price: 4.99,
            type: 'Abo'
        });
        updateCartUI();
        openCart();
    } else {
        openCart();
        showToast('Hinweis', 'Das Abo liegt bereits im Warenkorb.', 'info');
    }
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
    renderMaterials(); // <--- Hier korrigiert!
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
        container.innerHTML = `
            <div class="cart-empty-state">
                <i data-lucide="shopping-cart" class="cart-empty-icon"></i>
                <p class="cart-empty-text">Warenkorb leer.</p>
            </div>`;
        if (footer) footer.classList.add('hidden');
    } else {
        let total = 0;
        container.innerHTML = '<div class="cart-item-list">';
        cart.forEach(item => {
            total += item.price;
            container.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${item.title}</h4>
                        <p class="cart-item-price">${item.price.toFixed(2)} €</p>
                    </div>
                    <button onclick="removeFromCart('${item.id}')" class="btn-cart-delete">
                        <i data-lucide="trash-2" class="icon-small"></i>
                    </button>
                </div>`;
        });
        container.innerHTML += '</div>';
        
        const totalDisplay = document.getElementById('cart-total');
        if (totalDisplay) totalDisplay.innerText = total.toFixed(2) + ' €';
        
        if (footer) {
            footer.innerHTML = `
                <div class="cart-footer-row">
                    <span class="cart-footer-label">Gesamtsumme</span>
                    <span class="cart-footer-value">${total.toFixed(2)} €</span>
                </div>
                <button onclick="checkoutCart(${total})" class="btn-checkout-primary">
                    Jetzt kaufen (${total.toFixed(2)} €)
                </button>
            `;
            footer.classList.remove('hidden');
        }
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function checkoutCart(totalCost) {
    if (schuelerBudget >= totalCost) {
        // Budget abziehen
        schuelerBudget -= totalCost;
        updateBudgetDisplay();

        // Sets (und ggf. das Abo) in Bibliothek verschieben
        cart.forEach(item => {
            purchasedSetIds.push(item.id);
            tutorSetEarnings += item.price; 
        });
        
        cart = []; // Warenkorb leeren
        updateCartUI();
        
        // Die entscheidenden Updates nach dem Kauf:
        renderMaterials(); // <--- Hier korrigiert! (Updatet den Shop und entfernt das Banner)
        renderLibrary();   
        
        closeCart(); 
        showToast('Kauf erfolgreich!', 'Dein Kauf wurde bestätigt.', 'success');
        switchTab('student-hub'); 
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
    const purchased = dbLernsets.filter(m => purchasedSetIds.includes(m.id));
    if (counter) counter.innerText = purchased.length;

    if(purchased.length === 0) {
        grid.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
    } else {
        if (emptyState) emptyState.classList.add('hidden');
        grid.classList.remove('hidden');
        
        purchased.forEach(set => {
            grid.innerHTML += `
                <div class="library-card">
                    <div>
                        <span class="library-badge">${set.subject}</span>
                        <h4 class="library-title">${set.title}</h4>
                    </div>
                    <button onclick="openLernsetModal(${set.id})" class="btn-library-open">
                        <i data-lucide="book-open" class="icon-small"></i> Öffnen
                    </button>
                </div>`;
        });
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function openLernsetModal(id) {
    const set = dbLernsets.find(item => item.id === id);
    if (!set) return;

    document.getElementById('modal-subject').innerText = set.subject;
    document.getElementById('modal-title').innerText = set.title;

    // 1. Prüfen, ob der Nutzer Zugriff hat
    const isBought = purchasedSetIds.includes(set.id);
    
    // Hier könntest du später einen echten Abo-Status aus einer Datenbank abfragen
    const hasSubscription = purchasedSetIds.includes('premium-abo'); 
    
    const hasAccess = isBought || hasSubscription;

    let displayContent = '';

    if (hasAccess) {
        // Vollständiger Zugriff (Nutzer hat gekauft oder Abo)
        displayContent = `
            <div class="modal-content-header">
                <p class="modal-content-desc"><strong>Kurzbeschreibung:</strong> ${set.description}</p>
            </div>
            ${set.content}
        `;
    } else {
        // Freemium Ansicht: Abgeschnittener Teaser + Paywall
        displayContent = `
            <div class="modal-content-header">
                <p class="modal-content-desc"><strong>Kurzbeschreibung:</strong> ${set.description}</p>
            </div>
            
            <div class="freemium-teaser">
                ${set.content}
                <div class="paywall-fade"></div>
            </div>
            
            <div class="paywall-box">
                <div class="paywall-icon">
                    <i data-lucide="lock" class="icon-medium"></i>
                </div>
                <h4 class="paywall-title">Lerne nahtlos weiter</h4>
                <p class="paywall-text">Schalte dieses Set frei oder hole dir den Premium-Pass für unbegrenzten Zugriff auf alle Inhalte.</p>
                <div class="paywall-actions">
                    <button onclick="addToCart(${set.id}); closeLernsetModal(); openCart();" class="btn-paywall-single">
                        Einzelkauf (${set.price.toFixed(2)} €)
                    </button>
                    <button onclick="addAboToCart(); closeLernsetModal();" class="btn-paywall-sub">
                        Premium Abo (4,99 € / mtl.)
                    </button>
                </div>
            </div>
        `;
    }

    document.getElementById('modal-content-body').innerHTML = displayContent;
    
    const modal = document.getElementById('lernset-modal');
    if (modal) modal.classList.remove('hidden');

    // Wichtig: Icons für das neu generierte Paywall-HTML laden
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeLernsetModal() { 
    const modal = document.getElementById('lernset-modal');
    if (modal) modal.classList.add('hidden'); 
}







// ========================================== //
// VIDEO CALLS & SIMULATION                   //
// ========================================== //
function renderTutors() {
    const container = document.getElementById('tutors-grid');
    if(!container) return;
    container.innerHTML = '';
    
    tutorsData.forEach(tutor => {
        container.innerHTML += `
            <div class="tutor-card-main">
                <div class="tutor-card-header">
                    <div class="tutor-avatar-box">
                        <i data-lucide="user" class="icon-medium"></i>
                    </div>
                    <div>
                        <h3 class="tutor-name-main">${tutor.name}</h3>
                        <p class="tutor-uni-main">${tutor.uni}</p>
                    </div>
                </div>
                <div class="tutor-details">
                    <div class="tutor-detail-row">
                        <span class="tutor-detail-label">Fächer:</span>
                        <span class="tutor-detail-value-dark">${tutor.subject}</span>
                    </div>
                    <div class="tutor-detail-row">
                        <span class="tutor-detail-label">Preis / 45 Min:</span>
                        <span class="tutor-detail-value-purple">${tutor.rate.toFixed(2)} €</span>
                    </div>
                </div>
                <button onclick="initiateCall('${tutor.name}', ${tutor.rate})" class="btn-call-tutor">
                    <i data-lucide="video" class="icon-small"></i> Jetzt anrufen
                </button>
            </div>`;
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
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
            <div class="activity-item">
                <div>
                    <p class="activity-title">1:1 Call (Live)</p>
                    <p class="activity-subtitle">${Math.floor(callDurationSeconds/60)}m ${callDurationSeconds%60}s</p>
                </div>
                <span class="activity-status-income">+ ${tutorEarned.toFixed(2)} €</span>
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
        document.getElementById('tutor-stats-hours').innerHTML = `${tutorECTSHours} <span class="stat-value-meta">/ 30 Std.</span>`;
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

    const newId = dbLernsets.length + 10;
    dbLernsets.push({
        id: newId, title: title, subject: subject, type: type, price: price, 
        author: 'Jonas (Du)', rating: 5.0, description: 'Von mir hochgeladen.',
        content: `<div class="space-y-4 text-slate-700"><p class="text-sm">${rawContent}</p></div>`
    });

    const log = document.getElementById('tutor-activity-log');
    if(log) {
        log.innerHTML = `
            <div class="activity-item">
                <div>
                    <p class="activity-title">Upload: "${title}"</p>
                    <p class="activity-subtitle">Shop-Preis: ${price.toFixed(2)} €</p>
                </div>
                <span class="activity-status-listed">Gelistet</span>
            </div>` + log.innerHTML;
    }

    event.target.reset();
    renderLernsets('all'); // Marktplatz aktualisieren
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
            <div class="activity-item">
                <div>
                    <p class="activity-title">${hours} Std. Nachhilfe</p>
                    <p class="activity-subtitle">${school}</p>
                </div>
                <span class="activity-status-pending">Prüfung..</span>
            </div>` + log.innerHTML;
    }

    event.target.reset();
    showToast('Stunde eingereicht', 'Dein sozialer Einsatz wurde vermerkt.', 'info');
}






























// ========================================== //
// SONSTIGE HELFER (Social, Aufladen, UI)     //
// ========================================== //
function renderSocial() { 
    const gridContainer = document.getElementById('social-grid-container');
            const listContainer = document.getElementById('social-list-container');
            const pinboardContainer = document.getElementById('social-pinboard-container');

            socialData.forEach((offer, index) => {
                // Grid Render
                gridContainer.innerHTML += `
                    <div class="bg-white border border-stone-200 rounded-3xl p-6 hover:shadow-lg hover:border-[#F9E8E1] transition-all relative overflow-hidden flex flex-col h-full">
                        <div class="absolute top-0 right-0 bg-[#FFF5F2] text-[#D97757] px-4 py-1.5 text-xs font-bold rounded-bl-2xl border-b border-l border-[#F9E8E1]">
                            ${offer.spots} Plätze frei
                        </div>
                        <div class="space-y-5 pt-2 flex-1">
                            <div>
                                <span class="text-[10px] uppercase font-bold text-stone-400 tracking-wider mb-1 block">${offer.tag}</span>
                                <h4 class="font-bold text-xl text-stone-900 leading-tight">${offer.school}</h4>
                                <p class="text-stone-500 text-sm mt-1 flex items-center gap-1">📍 ${offer.city}</p>
                            </div>
                            <div class="space-y-3 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                                <div class="flex justify-between text-sm">
                                    <span class="text-stone-500">Fächer:</span>
                                    <span class="font-bold text-stone-800">${offer.subject}</span>
                                </div>
                                <div class="flex justify-between text-sm">
                                    <span class="text-stone-500">Zeit:</span>
                                    <span class="font-semibold text-stone-800 text-right">${offer.time}</span>
                                </div>
                            </div>
                        </div>
                        <button class="w-full bg-white text-[#D97757] border-2 border-[#D97757] py-3 rounded-xl font-bold hover:bg-[#FFF5F2] transition-colors mt-6">Platz anfragen</button>
                    </div>
                `;
                });
        }

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

function selectRole(role) {
    const sBtn = document.getElementById('btn-role-student');
    const tBtn = document.getElementById('btn-role-tutor');
    
    if(role === 'student') {
        sBtn.className = "border-2 border-indigo-600 bg-indigo-50 text-indigo-700 py-2.5 rounded-xl font-bold text-xs transition-colors";
        tBtn.className = "border border-slate-200 text-slate-500 py-2.5 rounded-xl font-semibold text-xs hover:bg-slate-50 transition-colors";
    } else {
        tBtn.className = "border-2 border-indigo-600 bg-indigo-50 text-indigo-700 py-2.5 rounded-xl font-bold text-xs transition-colors";
        sBtn.className = "border border-slate-200 text-slate-500 py-2.5 rounded-xl font-semibold text-xs hover:bg-slate-50 transition-colors";
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    
    if (menu) {
        menu.classList.toggle('hidden');
    }
    
    // Optional: Icon wechseln (falls du X statt Menü anzeigen willst)
    if (icon) {
        if (!menu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons(); // Icons neu rendern
    }
}





function renderMaterials() {
    const container = document.getElementById('materials-grid');
    const banner = document.getElementById('premium-banner'); // Sucht das Banner
    if (!container) return;
    
    container.innerHTML = '';
    
    // Prüfen, ob das Abo aktiv ist
    const hasAbo = purchasedSetIds.includes('premium-abo');
    
    // Banner verstecken oder anzeigen
    if (banner) {
        if (hasAbo) {
            banner.classList.add('hidden');
        } else {
            banner.classList.remove('hidden');
        }
    }
    
    dbLernsets.forEach(item => {
        // Wenn Abo aktiv ist, betrachten wir das Set als gekauft
        const isBought = purchasedSetIds.includes(item.id) || hasAbo;
        const inCart = cart.some(c => c.id === item.id);

        let btnClass = '';
        let btnText = '';
        let btnIcon = '';
        let onClick = '';
        let disabled = '';

        if (isBought) {
            btnClass = 'bg-emerald-50 text-emerald-600 cursor-default border border-emerald-100'; 
            btnText = hasAbo ? 'Freigeschaltet' : 'Im Besitz'; 
            btnIcon = 'check';
            disabled = 'disabled';
        } else if (inCart) {
            btnClass = 'btn-material-cart-disabled'; 
            btnText = 'Im Warenkorb';
            btnIcon = 'shopping-cart';
            disabled = 'disabled';
        } else {
            btnClass = 'btn-material-add'; 
            btnText = 'Hinzufügen';
            btnIcon = 'shopping-cart';
            onClick = `onclick="addToCart(${item.id})"`;
        }

        // Preis-Logik: Durchgestrichen, wenn Abo vorhanden
        let priceDisplay = '';
        if (hasAbo) {
            priceDisplay = `
                <div class="shop-price-abo-wrapper">
                    <span class="shop-price-strikethrough">${item.price.toFixed(2)} €</span>
                    <span class="shop-price-abo">Im Abo enthalten</span>
                </div>
            `;
        } else {
            priceDisplay = `<span class="material-price">${item.price.toFixed(2)} €</span>`;
        }

        container.innerHTML += `
            <div class="material-card">
                <div class="material-icon-box hover-preview" onclick="openLernsetModal(${item.id})" title="Klicken für Vorschau">
                    <i data-lucide="file-text" class="material-icon-large"></i>
                </div>
                
                <div class="material-card-header">
                    <span class="material-badge-type">${item.type}</span>
                    <div class="material-badge-rating">
                        <i data-lucide="star" class="icon-star"></i> ${item.rating}
                    </div>
                </div>
                
                <h3 class="material-title hover-preview" onclick="openLernsetModal(${item.id})" title="Klicken für Vorschau">${item.title}</h3>
                
                <p class="material-author">
                    <i data-lucide="user" class="icon-small"></i> ${item.author}
                </p>
                
                <div class="material-footer">
                    ${priceDisplay}
                    
                    <div class="shop-action-group">
                        <button onclick="openLernsetModal(${item.id})" class="btn-preview" title="Vorschau ansehen">
                            <i data-lucide="eye" class="icon-small"></i>
                        </button>
                        <button ${onClick} ${disabled} class="btn-material-action ${btnClass}">
                            <i data-lucide="${btnIcon}" class="icon-small"></i> ${btnText}
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========================================== //
// SONSTIGE HELFER (Social, Aufladen, UI)     //
// ========================================== //

function renderSocial() { 
    const gridContainer = document.getElementById('social-grid-container');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = ''; // Vor dem Rendern leeren

    socialData.forEach((offer) => {
        gridContainer.innerHTML += `
            <div class="social-card">
                <div class="social-badge-spots">
                    ${offer.spots} Plätze frei
                </div>
                <div class="social-card-content">
                    <div>
                        <span class="social-tag">${offer.tag}</span>
                        <h4 class="social-school">${offer.school}</h4>
                        <p class="social-city">📍 ${offer.city}</p>
                    </div>
                    <div class="social-details-box">
                        <div class="social-detail-row">
                            <span class="social-detail-label">Fächer:</span>
                            <span class="social-detail-value">${offer.subject}</span>
                        </div>
                        <div class="social-detail-row">
                            <span class="social-detail-label">Zeit:</span>
                            <span class="social-detail-value-time">${offer.time}</span>
                        </div>
                    </div>
                </div>
                <button class="btn-request-spot">Platz anfragen</button>
            </div>
        `;
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Warenkorb Drawer Logik
function openCart() { 
    document.getElementById('cart-drawer').classList.remove('hidden'); 
    setTimeout(() => { 
        // Wir nutzen hier unsere neue CSS-Klasse statt translate-x-full
        document.getElementById('cart-panel').classList.remove('drawer-closed'); 
    }, 10); 
}

function closeCart() { 
    document.getElementById('cart-panel').classList.add('drawer-closed'); 
    setTimeout(() => { 
        document.getElementById('cart-drawer').classList.add('hidden'); 
    }, 400); 
}

// Auth Logik
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
        // 'grid' muss nicht extra hinzugefügt werden, da .role-selector im CSS bereits grid ist
    }
    modal.classList.remove('hidden');
}

function closeAuth() { 
    document.getElementById('auth-modal').classList.add('hidden'); 
}

function handleLogin(e) { 
    e.preventDefault(); 
    isLoggedIn = true; 
    closeAuth(); 
    showToast('Eingeloggt', 'Willkommen zurück.'); 
}

function handleLogout() { 
    isLoggedIn = false; 
    cart = []; 
    purchasedSetIds = []; 
    updateCartUI(); 
    
    // Fallback auf renderdbLernsets (je nachdem, welche Shop-Funktion du nutzt)
    if(typeof renderdbLernsets === 'function') renderdbLernsets(); 
    if(typeof renderMaterials === 'function') renderMaterials();
    
    showToast('Abgemeldet', 'Auf Wiedersehen.'); 
}

// Budget Logik
function openDepositModal() { document.getElementById('deposit-modal').classList.remove('hidden'); }
function closeDepositModal() { document.getElementById('deposit-modal').classList.add('hidden'); }

function simulateDeposit(amount) {
    schuelerBudget += amount;
    updateBudgetDisplay();
    closeDepositModal();
    showToast('Guthaben aufgeladen', `+${amount.toFixed(2)} € wurden gutgeschrieben.`, 'success');
}

// Toast Notifications
function showToast(title, message, type = 'success') {
    const container = document.getElementById('toast-container');
    if(!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast-card toast-hidden`;
    
    let typeClass = type === 'success' ? 'toast-success' : (type === 'error' ? 'toast-error' : 'toast-info');
    let icon = type === 'success' ? 'check-circle' : (type === 'error' ? 'alert-triangle' : 'info');

    toast.innerHTML = `
        <div class="${typeClass}">
            <i data-lucide="${icon}" class="icon-medium"></i>
        </div>
        <div>
            <h5 class="toast-title">${title}</h5>
            <p class="toast-message">${message}</p>
        </div>
    `;
    
    container.appendChild(toast);
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    // Einblenden
    setTimeout(() => toast.classList.remove('toast-hidden'), 50);
    
    // Ausblenden und entfernen
    setTimeout(() => { 
        toast.classList.add('toast-hidden'); 
        setTimeout(() => toast.remove(), 300); 
    }, 4000);
}

function selectRole(role) {
    const sBtn = document.getElementById('btn-role-student');
    const tBtn = document.getElementById('btn-role-tutor');
    
    if(role === 'student') {
        sBtn.className = "btn-role-active";
        tBtn.className = "btn-role-inactive";
    } else {
        tBtn.className = "btn-role-active";
        sBtn.className = "btn-role-inactive";
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    
    if (menu) {
        menu.classList.toggle('hidden');
    }
    
    if (icon) {
        if (!menu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}


// ========================================== //
// ALTERNATIVE MATERIAL RENDERER (Optional)   //
// ========================================== //

function renderMaterials() {
    const container = document.getElementById('materials-grid');
    if (!container) return;
    container.innerHTML = '';
    
    // Wir nutzen jetzt dbLernsets, da hier die Inhalte für das Vorschau-Popup liegen!
    dbLernsets.forEach(item => {
        const isBought = purchasedSetIds.includes(item.id);
        const inCart = cart.some(c => c.id === item.id);

        let btnClass = '';
        let btnText = '';
        let btnIcon = '';
        let onClick = '';
        let disabled = '';

        if (isBought) {
            btnClass = 'bg-emerald-50 text-emerald-600 cursor-default'; // Status "Gekauft"
            btnText = 'Im Besitz';
            btnIcon = 'check';
            disabled = 'disabled';
        } else if (inCart) {
            btnClass = 'btn-material-cart-disabled'; // Status "Im Warenkorb"
            btnText = 'Im Warenkorb';
            btnIcon = 'shopping-cart';
            disabled = 'disabled';
        } else {
            btnClass = 'btn-material-add'; // Standard-Button
            btnText = 'Hinzufügen';
            btnIcon = 'shopping-cart';
            onClick = `onclick="addToCart(${item.id})"`;
        }

        container.innerHTML += `
            <div class="material-card">
                <div class="material-icon-box hover-preview" onclick="openLernsetModal(${item.id})" title="Klicken für Vorschau">
                    <i data-lucide="file-text" class="material-icon-large"></i>
                </div>
                
                <div class="material-card-header">
                    <span class="material-badge-type">${item.type}</span>
                    <div class="material-badge-rating">
                        <i data-lucide="star" class="icon-star"></i> ${item.rating}
                    </div>
                </div>
                
                <h3 class="material-title hover-preview" onclick="openLernsetModal(${item.id})" title="Klicken für Vorschau">${item.title}</h3>
                
                <p class="material-author">
                    <i data-lucide="user" class="icon-small"></i> ${item.author}
                </p>
                
                <div class="material-footer">
                    <span class="material-price">${item.price.toFixed(2)} €</span>
                    
                    <div class="shop-action-group">
                        <button onclick="openLernsetModal(${item.id})" class="btn-preview" title="Vorschau ansehen">
                            <i data-lucide="eye" class="icon-small"></i>
                        </button>
                        <button ${onClick} ${disabled} class="btn-material-action ${btnClass}">
                            <i data-lucide="${btnIcon}" class="icon-small"></i> ${btnText}
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    if (typeof lucide !== 'undefined') lucide.createIcons();
}