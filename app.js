// ==========================================================================
// ACCEPTABLE DOCUMENTS DATASET (Verification Guide)
// ==========================================================================
const documentsData = [
  {
    id: "student-id-card",
    category: "students",
    emoji: "🪪",
    titleEn: "Dated Student ID Card",
    titleUr: "Student Card (Expiry Date Ke Sath)",
    descEn: "ID card showing a clear expiry date or current academic year.",
    descUr: "Aisa card jis par expiry date ya current academic year (saal) likha ho.",
    mustContain: [
      "Student's Full Legal Name",
      "School or University Logo & Name",
      "Current Academic Year (e.g. 2025/2026)",
      "Clear, non-blurry face photo"
    ],
    avoid: [
      "Handwritten dates or correction labels",
      "Expired academic years",
      "Highly blurry photo prints"
    ],
    verificationTip: "Hamesha card ki front side ki clear scan image lein jahan saal saaf nazar aaye. Agar card par dates nahi hain, toh Class Schedule ya Receipt use karein."
  },
  {
    id: "class-schedule",
    category: "students",
    emoji: "🗓️",
    titleEn: "Class Schedule",
    titleUr: "Class Timetable / Schedule",
    descEn: "Official timetable/schedule of the current semester/term.",
    descUr: "Mojooda semester ki classes ka schedule ya timetable.",
    mustContain: [
      "Student Name & Student ID",
      "Official University Letterhead / Portal Header",
      "Current Term/Semester Courses",
      "Total credit hours registered"
    ],
    avoid: [
      "Self-typed Excel grids or personal notes",
      "Timetables missing student name details",
      "Screenshots lacking domain verification URL"
    ],
    verificationTip: "School portal se official PDF copy print karein. URL and header print me shamil rakhein takay credibility barhe."
  },
  {
    id: "tuition-receipt",
    category: "students",
    emoji: "🧾",
    titleEn: "Tuition / Registration Receipt",
    titleUr: "Fees & Registration Receipt",
    descEn: "Official tuition fee receipt showing payment details and date.",
    descUr: "Fees jama karne ki raseed jis par current date ho.",
    mustContain: [
      "Official Payment Timestamp & Transaction ID",
      "Student's Full Name matching portal profile",
      "Academic session details",
      "School Registrar / Finance Seal"
    ],
    avoid: [
      "Mobile screen half payment notification clips",
      "Payment slips older than 90 days",
      "Informal receipts lacking school branding"
    ],
    verificationTip: "Online bank transaction receipt ke bajaye university finance section se authentic PDF copy download kar ke use karein."
  },
  {
    id: "official-transcript",
    category: "students",
    emoji: "📊",
    titleEn: "Official Transcript",
    titleUr: "Official Transcript / Result Card",
    descEn: "Academic transcript showing courses taken and current enrollment.",
    descUr: "Marksheet ya result card jo yeh dikhaye ke aap abhi parh rahe hain.",
    mustContain: [
      "Complete semester course records",
      "Student roll number & name",
      "Active enrollment status indicator",
      "Official signature or watermark stamp"
    ],
    avoid: [
      "Manually edited or corrected marks list",
      "Web printouts missing main verification stamps",
      "Incorrect student profiles"
    ],
    verificationTip: "Apne student login portal me jaakar 'Print Transcript' par click karein aur directly use standard PDF format me download karein."
  },
  {
    id: "enrollment-letter",
    category: "students",
    emoji: "✉️",
    titleEn: "Enrollment Verification Letter",
    titleUr: "Enrollment Verification Letter",
    descEn: "Official letter from school registrar verifying active enrollment status.",
    descUr: "School ya college ki taraf se jari kiya gaya official letter.",
    mustContain: [
      "Official School Letterhead with complete branding",
      "Registrar Office's Signature and Stamp",
      "Verification issuing date",
      "Confirmation of current session status"
    ],
    avoid: [
      "Old letters from previous semesters",
      "Draft documents lacking signatures",
      "Self-signed templates"
    ],
    verificationTip: "Is letter par Registrar or Admin block ka contact info (Phone/Email) hona SheerID verification ko bohat fast kar deta hai."
  },
  {
    id: "teacher-id-card",
    category: "teachers",
    emoji: "💼",
    titleEn: "Teacher ID Card",
    titleUr: "Teacher ID Card (Teaching Status)",
    descEn: "School/university employee ID card clearly showcasing teaching status.",
    descUr: "School ya university ka employee card jis par teaching status saaf likha ho.",
    mustContain: [
      "Employee / Faculty Full Name",
      "School Name & Logo",
      "Valid teaching status text (e.g. Lecturer, Faculty)",
      "Current academic year or issue date"
    ],
    avoid: [
      "Visitor cards or Temporary contractor passes",
      "Expired staff cards",
      "Handwritten labels"
    ],
    verificationTip: "Card par 'Lecturer' ya 'Faculty' ka title clear hona chahiye. Agar normal employee card hai, toh pay stub support me lazmi add karein."
  },
  {
    id: "employment-letter",
    category: "teachers",
    emoji: "✉️",
    titleEn: "Employment Verification Letter",
    titleUr: "Employment Verification Letter",
    descEn: "Official letter on school letterhead confirming your current job role.",
    descUr: "School/College ke letterhead par likha hua letter jo aapki job ko confirm kare.",
    mustContain: [
      "Authorized HR / Principal Signature & Seal",
      "Official school letterhead",
      "Designation, Date of hiring, & Active job status",
      "Contact information of HR department"
    ],
    avoid: [
      "General request emails without signature scans",
      "Undated job letters",
      "Incorrect employee details"
    ],
    verificationTip: "School official letterhead high resolution hona chahiye aur active date 30 days se purani nahi honi chahiye."
  },
  {
    id: "pay-stub",
    category: "teachers",
    emoji: "💵",
    titleEn: "Pay Stub (Salary Slip)",
    titleUr: "Pay Stub (Haleya Salary Slip)",
    descEn: "Recent pay stub or salary slip confirming active employment (hide bank details).",
    descUr: "Haleya mahine ki salary slip (aap sensitive financial information ko black out/chupa sakte hain).",
    mustContain: [
      "Teacher's Legal Name",
      "School / University Employer branding",
      "Current pay cycle dates (within 90 days)",
      "Gross earnings calculation summary"
    ],
    avoid: [
      "Leaving financial account numbers completely visible",
      "Pay slips older than 90 days",
      "Non-itemized payment screenshots"
    ],
    verificationTip: "Aap digital tool se bank account detail, salary figure and social security hide (black out) kar sakte hain, par Name & Date visible hona chahiye."
  },
  {
    id: "teaching-license",
    category: "teachers",
    emoji: "📜",
    titleEn: "Teaching License / Certificate",
    titleUr: "Teaching License / Certificate",
    descEn: "Active teaching license issued by a government authority or board.",
    descUr: "Government ya board ki taraf se jari kiya gaya active teaching certificate.",
    mustContain: [
      "Government licensing board seal & signature",
      "Active valid expiration timeline",
      "License registration unique reference number",
      "Teacher Name matching SheerID inputs"
    ],
    avoid: [
      "Course completion certificates",
      "Unrecognized private training diplomas",
      "Expired teaching licenses"
    ],
    verificationTip: "Agar license online check ho sakta hai, toh scan ke sath verification portal link bhi verification form ke extra sections me post karein."
  },
  {
    id: "current-contract",
    category: "teachers",
    emoji: "📝",
    titleEn: "Current Contract",
    titleUr: "Current Contract (Job Agreement)",
    descEn: "Current active academic year contract showing employment agreement.",
    descUr: "School ke sath aapka mojooda saal ka job contract.",
    mustContain: [
      "Signatures of both parties (Teacher & Head of School)",
      "Contract timeline with clear starting/ending dates",
      "Academic session details",
      "Terms of teaching hours"
    ],
    avoid: [
      "Incomplete agreements (missing execution pages)",
      "Old contracts from prior years",
      "Unsigned drafts"
    ],
    verificationTip: "Contract ke multiple pages hote hain, is liye first page (jis par info ho) aur last page (jis par signatures hon) ko link karke single document banayein."
  }
];

// ==========================================================================
// STATE MANAGEMENT & GUIDE SELECTIONS
// ==========================================================================
let activeCategory = "all";
let searchQuery = "";

const cardsContainer = document.getElementById("cards-container");
const searchInput = document.getElementById("search-docs");
const searchEmptyState = document.getElementById("search-empty-state");
const detailModal = document.getElementById("document-detail-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

const tabAll = document.getElementById("btn-tab-all");
const tabStudents = document.getElementById("btn-tab-students");
const tabTeachers = document.getElementById("btn-tab-teachers");

const countAll = document.getElementById("count-all");
const countStudents = document.getElementById("count-students");
const countTeachers = document.getElementById("count-teachers");

// ==========================================================================
// INTERACTIVE MULTI-VIEW TRANSITIONS
// ==========================================================================
function switchAppView(viewName) {
  const guideTab = document.getElementById("tab-nav-guide");
  const generatorTab = document.getElementById("tab-nav-generator");
  const guideSection = document.getElementById("section-verification-guide");
  const generatorSection = document.getElementById("section-id-generator");

  if (viewName === "guide") {
    guideTab.classList.add("active");
    generatorTab.classList.remove("active");
    
    guideSection.classList.add("active");
    generatorSection.classList.remove("active");
  } else if (viewName === "generator") {
    generatorTab.classList.add("active");
    guideTab.classList.remove("active");
    
    generatorSection.classList.add("active");
    guideSection.classList.remove("active");
    
    // Draw initial QR code code when entering generator space
    generateOfflineCardQr();
  }
}

// ==========================================================================
// VERIFICATION GUIDE LOGIC (RENDER & MODAL TRANSITIONS)
// ==========================================================================
function getFilteredDocuments() {
  return documentsData.filter(doc => {
    const matchesCategory = (activeCategory === "all" || doc.category === activeCategory);
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    return matchesCategory && (
      doc.titleEn.toLowerCase().includes(q) ||
      doc.titleUr.toLowerCase().includes(q) ||
      doc.descEn.toLowerCase().includes(q) ||
      doc.descUr.toLowerCase().includes(q)
    );
  });
}

function renderCards() {
  const filtered = getFilteredDocuments();
  const q = searchQuery.toLowerCase();

  // Dynamic counts calculations
  countAll.textContent = documentsData.filter(d => d.titleEn.toLowerCase().includes(q) || d.titleUr.toLowerCase().includes(q)).length;
  countStudents.textContent = documentsData.filter(d => d.category === "students" && (d.titleEn.toLowerCase().includes(q) || d.titleUr.toLowerCase().includes(q))).length;
  countTeachers.textContent = documentsData.filter(d => d.category === "teachers" && (d.titleEn.toLowerCase().includes(q) || d.titleUr.toLowerCase().includes(q))).length;

  cardsContainer.innerHTML = "";

  if (filtered.length === 0) {
    searchEmptyState.style.display = "block";
    return;
  }
  
  searchEmptyState.style.display = "none";

  filtered.forEach(doc => {
    const card = document.createElement("div");
    card.className = `doc-card ${doc.category === 'students' ? 'student-type' : 'teacher-type'}`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${doc.titleEn} details button`);
    
    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon-box">${doc.emoji}</div>
        <span class="category-tag">${doc.category === 'students' ? 'Student' : 'Teacher'}</span>
      </div>
      <h3 class="card-title">${doc.titleEn}</h3>
      <div class="card-desc">
        <span class="desc-en">${doc.descEn}</span>
        <span class="desc-ur">${doc.descUr}</span>
      </div>
      <div class="card-action">
        Tafseel Check Karein 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    `;

    // Click event for modal presentation / generator redirect
    card.addEventListener("click", () => {
      if (doc.id === "student-id-card") {
        switchAppView("generator");
      } else {
        showDetailModal(doc);
      }
    });
    
    // Keyboard navigation (Enter / Space bar support)
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (doc.id === "student-id-card") {
          switchAppView("generator");
        } else {
          showDetailModal(doc);
        }
      }
    });

    cardsContainer.appendChild(card);
  });
}

function showDetailModal(doc) {
  const isStudent = doc.category === "students";
  detailModal.className = isStudent ? "student-modal" : "teacher-modal";

  document.getElementById("modal-doc-icon").textContent = doc.emoji;
  document.getElementById("modal-title-header").textContent = doc.titleEn;
  document.getElementById("modal-category-tag").textContent = isStudent ? "STUDENT PROOF" : "TEACHER PROOF";

  const mustHtml = doc.mustContain.map(item => `<li>${item}</li>`).join("");
  const avoidHtml = doc.avoid.map(item => `<li>${item}</li>`).join("");

  document.getElementById("modal-detail-content").innerHTML = `
    <div class="modal-desc-box">
      <p class="desc-en">${doc.descEn}</p>
      <p class="desc-ur">${doc.descUr}</p>
    </div>
    <div class="info-section">
      <h3 class="info-title">SheerID Acceptance Checklists</h3>
      <div class="checklists-grid">
        <div class="checklist-card">
          <h4>✓ Must Contain (Yeh Lazmi Ho)</h4>
          <ul>${mustHtml}</ul>
        </div>
        <div class="checklist-card" style="border-left-color: hsl(0, 80%, 55%);">
          <h4 style="color: hsl(0, 100%, 75%);">✗ Avoid (In Se Bacehin)</h4>
          <ul class="avoid-list">${avoidHtml}</ul>
        </div>
      </div>
    </div>
    <div class="verification-alert">
      <div class="alert-icon">💡</div>
      <div class="alert-text">
        <h5>Verification Expert Tip</h5>
        <p>${doc.verificationTip}</p>
      </div>
    </div>
  `;

  detailModal.showModal();
}

function closeDetailModal() {
  detailModal.close();
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeDetailModal);
}

// Fallback for browsers that do not support native light-dismiss "closedby"
if (detailModal && !('closedBy' in HTMLDialogElement.prototype)) {
  detailModal.addEventListener('click', (event) => {
    if (event.target !== detailModal) return;

    const rect = detailModal.getBoundingClientRect();
    const isInsideDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );

    if (!isInsideDialog) {
      closeDetailModal();
    }
  });
}

// Search and Tab controls for guide
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderCards();
  });
}

const tabButtons = [tabAll, tabStudents, tabTeachers];
tabButtons.forEach(btn => {
  if (btn) {
    btn.addEventListener("click", () => {
      tabButtons.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-target");
      renderCards();
    });
  }
});

// ==========================================================================
// ADMIN ID CARD GENERATOR: CONTROLLERS & DATA SYNCING
// ==========================================================================

// Interactive Form selectors
const inputUniName = document.getElementById("input-uni-name");
const inputAcademicYear = document.getElementById("input-academic-year");
const inputStudentName = document.getElementById("input-student-name");
const inputStudentId = document.getElementById("input-student-id");
const inputDepartment = document.getElementById("input-department");
const inputBloodGroup = document.getElementById("input-blood-group");
const inputIssueDate = document.getElementById("input-issue-date");
const inputExpiryDate = document.getElementById("input-expiry-date");

const uploadPhoto = document.getElementById("upload-profile-photo");
const uploadUniLogo = document.getElementById("upload-uni-logo");
const uploadSignature = document.getElementById("upload-signature-photo");

const cardFlipper = document.getElementById("interactive-card-flipper");

// Helper function: Convert standard date strings (YYYY-MM-DD) to printable (DD-MM-YYYY)
function formatDateString(dateVal) {
  if (!dateVal) return "--/--/----";
  const pts = dateVal.split("-");
  if (pts.length !== 3) return dateVal;
  return `${pts[2]}-${pts[1]}-${pts[0]}`;
}

// Real-time synchronization
function syncCardGeneratorData() {
  if (!inputStudentName) return; // Prevent runs outside form init

  // Front elements
  document.getElementById("preview-uni-name").textContent = inputUniName.value || "CAMPUS NAME PLACEHOLDER";
  document.getElementById("preview-academic-year").textContent = inputAcademicYear.value || "Session 2025-26";
  document.getElementById("preview-student-name").textContent = inputStudentName.value || "Enter Full Name";
  document.getElementById("preview-student-id").textContent = inputStudentId.value || "NMU-XXXX-XXXX";
  document.getElementById("preview-department").textContent = inputDepartment.value || "Major / Department";
  document.getElementById("preview-blood-group").textContent = inputBloodGroup.value || "O+";
  document.getElementById("preview-expiry-date").textContent = formatDateString(inputExpiryDate.value);

  // Generate a brand new QR Code canvas whenever the ID value shifts
  generateOfflineCardQr();
}

// Attach change listeners to every configuration field
const inputFields = [inputUniName, inputAcademicYear, inputStudentName, inputStudentId, inputDepartment, inputBloodGroup, inputIssueDate, inputExpiryDate];
inputFields.forEach(field => {
  if (field) {
    field.addEventListener("input", syncCardGeneratorData);
    field.addEventListener("change", syncCardGeneratorData);
  }
});

// Drag and drop / file loaders for Student photo
if (uploadPhoto) {
  uploadPhoto.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById("profile-photo-name").textContent = file.name;

    const reader = new FileReader();
    reader.onload = function(evt) {
      document.getElementById("preview-student-photo").src = evt.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// Logo Crest Loader
if (uploadUniLogo) {
  uploadUniLogo.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById("uni-logo-name").textContent = file.name;

    const reader = new FileReader();
    reader.onload = function(evt) {
      document.getElementById("preview-uni-logo").src = evt.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// Signatures loader
if (uploadSignature) {
  uploadSignature.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    document.getElementById("signature-photo-name").textContent = file.name;

    const reader = new FileReader();
    reader.onload = function(evt) {
      document.getElementById("preview-signature").src = evt.target.result;
      document.getElementById("preview-signature-front").src = evt.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// Theme Preset Color Selection
const presetButtons = document.querySelectorAll(".preset-btn");
presetButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Toggle active markers
    presetButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const targetTheme = btn.getAttribute("data-preset");
    const frontCard = document.getElementById("rendered-card-front");
    const backCard = document.getElementById("rendered-card-back");

    // Clean active classes
    const themes = ["theme-blue", "theme-emerald", "theme-crimson", "theme-charcoal"];
    themes.forEach(th => {
      frontCard.classList.remove(th);
      backCard.classList.remove(th);
    });

    // Inject matching theme class
    frontCard.classList.add(`theme-${targetTheme}`);
    backCard.classList.add(`theme-${targetTheme}`);
  });
});

// ==========================================================================
// CARD ORIENTATION, TYPE & DESIGN PRESET SWITCHERS
// ==========================================================================
const inputOrientation = document.getElementById("input-orientation");
const inputCardType = document.getElementById("input-card-type");
const inputTemplateDesign = document.getElementById("input-template-design");

const designPresetClasses = [
  "design-modern", "design-classic", "design-cyber", "design-corporate", 
  "design-creative", "design-metro", "design-slate", "design-vintage", 
  "design-eco", "design-athletics"
];

function updateCardDesignPreset() {
  const frontCard = document.getElementById("rendered-card-front");
  const backCard = document.getElementById("rendered-card-back");
  if (!frontCard || !backCard || !inputTemplateDesign) return;

  const selectedPreset = `design-${inputTemplateDesign.value}`;

  // Clean old designs from both Front and Back cards
  designPresetClasses.forEach(cls => {
    frontCard.classList.remove(cls);
    backCard.classList.remove(cls);
  });

  // Inject active preset into both Front and Back cards
  frontCard.classList.add(selectedPreset);
  backCard.classList.add(selectedPreset);
}

if (inputTemplateDesign) inputTemplateDesign.addEventListener("change", updateCardDesignPreset);

function updateCardLayoutSettings() {
  const isPortrait = inputOrientation.value === "portrait";
  const cardType = inputCardType.value;
  
  const cardWrapper = document.querySelector(".card-3d-wrapper");
  const cardFlipper = document.getElementById("interactive-card-flipper");
  const frontCard = document.getElementById("rendered-card-front");
  const backCard = document.getElementById("rendered-card-back");
  const flipBtn = document.getElementById("btn-interactive-flip");

  // 1. Orientation class application
  const elements = [cardWrapper, cardFlipper, frontCard, backCard];
  elements.forEach(el => {
    if (el) {
      if (isPortrait) {
        el.classList.add("layout-portrait");
      } else {
        el.classList.remove("layout-portrait");
      }
    }
  });

  // 2. Card Design Type (Single-Sided Front vs Double-Sided Both)
  if (cardType === "front") {
    // Single-Sided: apply layout-single-side class to front & wrapper elements
    elements.forEach(el => {
      if (el) el.classList.add("layout-single-side");
    });
    
    if (backCard) backCard.classList.add("hide-back-side");
    if (flipBtn) flipBtn.style.display = "none";
    
    // Force flipper to face front side
    if (cardFlipper) cardFlipper.classList.remove("flipped");
  } else {
    // Double-Sided: remove layout-single-side class
    elements.forEach(el => {
      if (el) el.classList.remove("layout-single-side");
    });

    if (backCard) backCard.classList.remove("hide-back-side");
    if (flipBtn) flipBtn.style.display = "inline-flex";
  }

  // Redraw QR code since dimensions and locations might shift
  generateOfflineCardQr();
}

if (inputOrientation) inputOrientation.addEventListener("change", updateCardLayoutSettings);
if (inputCardType) inputCardType.addEventListener("change", updateCardLayoutSettings);

// ==========================================================================
// BIDIRECTIONAL BRAND HEX COLOR PICKERS
// ==========================================================================
const inputPrimaryColor = document.getElementById("input-primary-color");
const inputPrimaryHex = document.getElementById("input-primary-hex");
const inputSecondaryColor = document.getElementById("input-secondary-color");
const inputSecondaryHex = document.getElementById("input-secondary-hex");

function applyBrandCustomColors() {
  const primaryVal = inputPrimaryHex.value.trim();
  const secondaryVal = inputSecondaryHex.value.trim();
  
  const frontCard = document.getElementById("rendered-card-front");
  const backCard = document.getElementById("rendered-card-back");

  if (frontCard && backCard) {
    frontCard.style.setProperty("--card-primary-color", primaryVal);
    frontCard.style.setProperty("--card-secondary-color", secondaryVal);
    backCard.style.setProperty("--card-primary-color", primaryVal);
    backCard.style.setProperty("--card-secondary-color", secondaryVal);
  }
}

// Bidirectional binds for Primary Color
if (inputPrimaryColor && inputPrimaryHex) {
  inputPrimaryColor.addEventListener("input", (e) => {
    inputPrimaryHex.value = e.target.value;
    applyBrandCustomColors();
  });
  inputPrimaryHex.addEventListener("input", (e) => {
    let val = e.target.value.trim();
    if (val.startsWith("#") && (val.length === 4 || val.length === 7)) {
      inputPrimaryColor.value = val;
      applyBrandCustomColors();
    }
  });
}

// Bidirectional binds for Secondary Color
if (inputSecondaryColor && inputSecondaryHex) {
  inputSecondaryColor.addEventListener("input", (e) => {
    inputSecondaryHex.value = e.target.value;
    applyBrandCustomColors();
  });
  inputSecondaryHex.addEventListener("input", (e) => {
    let val = e.target.value.trim();
    if (val.startsWith("#") && (val.length === 4 || val.length === 7)) {
      inputSecondaryColor.value = val;
      applyBrandCustomColors();
    }
  });
}

// Flip Card Action
function toggleCardFlip() {
  if (cardFlipper && inputCardType.value !== "front") {
    cardFlipper.classList.toggle("flipped");
  }
}

// ==========================================================================
// OFFLINE HIGH-QUALITY DYNAMIC QR CODE MATRIX RENDERER (DOUBLE SIDE BINDS)
// ==========================================================================
function generateOfflineCardQr() {
  const canvasBack = document.getElementById("autogen-qr-canvas");
  const canvasFront = document.getElementById("autogen-qr-canvas-front");
  
  function drawQrOnCanvas(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dataString = (inputStudentId ? inputStudentId.value : "NMU-2026-94812") || "ID-CODE";

    const size = canvas.width;
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);

    // Dynamic Seed Hashing
    let hashVal = 5381;
    for (let i = 0; i < dataString.length; i++) {
      hashVal = (hashVal << 5) + hashVal + dataString.charCodeAt(i);
    }

    ctx.fillStyle = "#000000";
    
    // Scale patterns relative to canvas width
    const scale = size / 70;
    
    function drawFinderPattern(x, y) {
      ctx.fillRect(x, y, 16 * scale, 16 * scale);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(x + 2 * scale, y + 2 * scale, 12 * scale, 12 * scale);
      ctx.fillStyle = "#000000";
      ctx.fillRect(x + 4 * scale, y + 4 * scale, 8 * scale, 8 * scale);
    }

    const margin = 4 * scale;
    const finderSize = 16 * scale;
    const alignSize = 6 * scale;

    // Corner Locator Finders
    drawFinderPattern(margin, margin);
    drawFinderPattern(size - finderSize - margin, margin);
    drawFinderPattern(margin, size - finderSize - margin);

    // Align marker
    ctx.fillRect(size - alignSize - margin, size - alignSize - margin, alignSize, alignSize);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(size - alignSize - margin + 2 * scale, size - alignSize - margin + 2 * scale, 2 * scale, 2 * scale);
    ctx.fillStyle = "#000000";

    const matrixDimension = 21;
    const cellSize = size / matrixDimension;

    for (let r = 0; r < matrixDimension; r++) {
      for (let c = 0; c < matrixDimension; c++) {
        // Skip corner finder zones
        if ((r < 7 && c < 7) || (r < 7 && c >= 14) || (r >= 14 && c < 7)) {
          continue;
        }

        const cellSeed = Math.abs(Math.sin(hashVal + (r * 13) + (c * 37)));
        const isBlack = cellSeed > 0.46;

        if (isBlack) {
          ctx.fillRect(c * cellSize, r * cellSize, cellSize + 0.3, cellSize + 0.3);
        }
      }
    }
  }

  drawQrOnCanvas(canvasBack);
  drawQrOnCanvas(canvasFront);
}

// ==========================================================================
// HIGH-RESOLUTION PVC CARD PRINT ENGINE
// ==========================================================================
function triggerPvcCardPrint() {
  const printContainer = document.getElementById("pvc-print-container");
  if (!printContainer) return;

  printContainer.innerHTML = "";

  const isPortrait = inputOrientation.value === "portrait";
  const cardType = inputCardType.value;

  // Print Orientation CSS application
  let containerClasses = "print-only";
  if (isPortrait) containerClasses += " layout-portrait";
  if (cardType === "front") containerClasses += " layout-single-side";
  printContainer.className = containerClasses;

  // Grab active card elements
  const frontCard = document.getElementById("rendered-card-front");
  const backCard = document.getElementById("rendered-card-back");

  // Clone front card
  const clonedFront = frontCard.cloneNode(true);
  clonedFront.id = "print-card-front-clone";
  clonedFront.classList.add("pvc-card-print");
  if (isPortrait) clonedFront.classList.add("layout-portrait");
  if (cardType === "front") clonedFront.classList.add("layout-single-side");
  printContainer.appendChild(clonedFront);

  // Bind custom hex brand colors
  clonedFront.style.setProperty("--card-primary-color", inputPrimaryHex.value);
  clonedFront.style.setProperty("--card-secondary-color", inputSecondaryHex.value);

  // Draw cloned Front QR code if Single-Sided
  if (cardType === "front") {
    const originalFrontCanvas = document.getElementById("autogen-qr-canvas-front");
    const clonedFrontCanvas = clonedFront.querySelector("#autogen-qr-canvas-front");
    if (originalFrontCanvas && clonedFrontCanvas) {
      clonedFrontCanvas.id = "cloned-qr-canvas-front-print";
      setTimeout(() => {
        const clonedCtx = clonedFrontCanvas.getContext("2d");
        clonedCtx.drawImage(originalFrontCanvas, 0, 0);
        window.print();
      }, 100);
      return;
    }
  }

  // Draw cloned Back QR code if Double-Sided
  if (cardType === "both") {
    const clonedBack = backCard.cloneNode(true);
    clonedBack.id = "print-card-back-clone";
    clonedBack.classList.add("pvc-card-print");
    if (isPortrait) clonedBack.classList.add("layout-portrait");
    printContainer.appendChild(clonedBack);

    clonedBack.style.setProperty("--card-primary-color", inputPrimaryHex.value);
    clonedBack.style.setProperty("--card-secondary-color", inputSecondaryHex.value);

    const originalCanvas = document.getElementById("autogen-qr-canvas");
    const clonedCanvas = clonedBack.querySelector("#autogen-qr-canvas");
    
    if (originalCanvas && clonedCanvas) {
      clonedCanvas.id = "cloned-qr-canvas-print";
      setTimeout(() => {
        const clonedCtx = clonedCanvas.getContext("2d");
        clonedCtx.drawImage(originalCanvas, 0, 0);
        window.print();
      }, 100);
      return;
    }
  }

  // Fallback single trigger
  setTimeout(() => {
    window.print();
  }, 100);
}

// ==========================================================================
// DYNAMIC HIGH-RESOLUTION CLIENT-SIDE IMAGE EXPORTER (PNG & JPG)
// ==========================================================================
function downloadCardImage(format) {
  const cardType = inputCardType.value;
  // If single-sided card design is selected, always force export front card
  const isFlipped = (cardType === "front") ? false : (cardFlipper && cardFlipper.classList.contains("flipped"));
  const targetElement = isFlipped ? document.getElementById("rendered-card-back") : document.getElementById("rendered-card-front");
  
  if (!targetElement) return;

  const isPortrait = inputOrientation.value === "portrait";
  
  // Up-scaling 3x
  const width = isPortrait ? 681 : 1080;
  const height = isPortrait ? 1080 : 681;

  // 1. Fetch stylesheets
  let styles = "";
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        styles += rule.cssText;
      }
    } catch (e) {
      // Ignore cross-origin rules
    }
  }

  // 2. Clone active card element
  const cloned = targetElement.cloneNode(true);
  cloned.id = "cloned-card-image-export";
  cloned.style.width = `${width}px`;
  cloned.style.height = `${height}px`;
  cloned.style.transform = "none";
  cloned.style.boxShadow = "none";
  cloned.style.borderRadius = "36px";
  
  cloned.style.setProperty("--card-primary-color", inputPrimaryHex.value);
  cloned.style.setProperty("--card-secondary-color", inputSecondaryHex.value);

  // 3. Inject configuration state classes directly to cloned element
  if (isPortrait) cloned.classList.add("layout-portrait");
  if (cardType === "front") cloned.classList.add("layout-single-side");

  // 4. Redraw QR codes inside cloned canvases at high-res
  if (isFlipped) {
    // Back QR code (Double-sided back face)
    const originalCanvas = document.getElementById("autogen-qr-canvas");
    const clonedCanvas = cloned.querySelector("#autogen-qr-canvas");
    if (originalCanvas && clonedCanvas) {
      clonedCanvas.id = "cloned-qr-canvas-image-export";
      clonedCanvas.width = 180;
      clonedCanvas.height = 180;
      
      const clonedCtx = clonedCanvas.getContext("2d");
      clonedCtx.fillStyle = "#ffffff";
      clonedCtx.fillRect(0, 0, 180, 180);
      clonedCtx.drawImage(originalCanvas, 0, 0, originalCanvas.width, originalCanvas.height, 0, 0, 180, 180);
    }
  } else if (cardType === "front") {
    // Front QR code (Single-sided front face)
    const originalFrontCanvas = document.getElementById("autogen-qr-canvas-front");
    const clonedFrontCanvas = cloned.querySelector("#autogen-qr-canvas-front");
    if (originalFrontCanvas && clonedFrontCanvas) {
      clonedFrontCanvas.id = "cloned-qr-canvas-front-image-export";
      clonedFrontCanvas.width = 162; // 3x scale of 54px
      clonedFrontCanvas.height = 162;
      
      const clonedCtx = clonedFrontCanvas.getContext("2d");
      clonedCtx.fillStyle = "#ffffff";
      clonedCtx.fillRect(0, 0, 162, 162);
      clonedCtx.drawImage(originalFrontCanvas, 0, 0, originalFrontCanvas.width, originalFrontCanvas.height, 0, 0, 162, 162);
    }
  }

  // 5. Serialize HTML
  const serializer = new XMLSerializer();
  const serializedHtml = serializer.serializeToString(cloned);

  // 6. Embed inside SVG foreignObject
  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>/*<![CDATA[*/
            ${styles}
          /*]]>*/</style>
          ${serializedHtml}
        </div>
      </foreignObject>
    </svg>
  `;

  const svgBlob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  // 7. Load image to memory canvas and download
  const img = new Image();
  img.onload = function() {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    URL.revokeObjectURL(url);

    const mimeType = format === "jpg" ? "image/jpeg" : "image/png";
    const quality = format === "jpg" ? 0.95 : undefined;
    const imgDataUrl = canvas.toDataURL(mimeType, quality);

    const downloadLink = document.createElement("a");
    const label = (cardType === "front") ? "SingleSide" : (isFlipped ? "Back" : "Front");
    const stdId = (inputStudentId ? inputStudentId.value.trim() : "student") || "student";
    
    downloadLink.download = `${stdId}_${label}_Card.${format}`;
    downloadLink.href = imgDataUrl;
    downloadLink.click();
  };
  
  img.onerror = function(e) {
    console.error("High-Res Card Image Export Failed:", e);
    alert("Card download fail ho gaya. XML/SVG parsing or resource loading block ho chuka hai.");
    URL.revokeObjectURL(url);
  };
  
  img.src = url;
}

// ==========================================================================
// INITIAL SETUP ON BOOT
// ==========================================================================
window.addEventListener("DOMContentLoaded", () => {
  renderCards();
  syncCardGeneratorData();
  applyBrandCustomColors();
  updateCardLayoutSettings();
  updateCardDesignPreset();
});
