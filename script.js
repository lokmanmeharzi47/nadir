/**
 * SOVEREIGN EXECUTIVE PORTAL
 * Official Scripts for Mr. Nadir Tammal (السيد النذير طمل)
 * Member of the Regional Office — Center (Algiers)
 * Algerian Organization Communication for Development & National Authority for Migrants
 */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initVCardDownloader();
  initClipboardHandlers();
  initShareAction();
});

/* ==========================================================================
   1. TRILINGUAL TRANSLATION ENGINE (AR / FR / EN)
   ========================================================================== */
const TRANSLATIONS = {
  ar: {
    // Document Title
    pageTitle: "السيد النذير طمل | البوابة الرقمية الرسمية",

    // Topbar & Republic Header
    republicHeader: "الجمهورية الجزائرية الديمقراطية الشعبية",
    republicSub: "People's Democratic Republic of Algeria",
    orgName: "المنظمة الجزائرية إتصال من أجل التنمية",
    authorityName: "الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج",
    pillar1: "إتصال",
    pillar2: "ترقية الإستثمار",
    pillar3: "تنمية",

    // Text strictly inside portrait golden container
    nameAr: "السيد النذير طمل",
    nameEn: "NADIR TAMMAL",
    roleTitle: "عضو بالمكتب الجهوي — الوسط الجزائر العاصمة",
    pillarsTitle: "إطار معتمد لدى الهيئة الوطنية | إتصال • ترقية الإستثمار • تنمية",

    // Rank Badge
    leadershipBadge: "بطاقة إطار معتمدة • عضو بالمكتب الجهوي للوسط",

    // Tier 1 Buttons
    saveContactBtn: "حفظ جهة الاتصال الرسمية (vCard)",
    saveContactSub: "تحميل بطاقة الاتصال الرقمية المعتمدة لهاتفك",
    sharePortalBtn: "مشاركة البوابة الرسمية",
    copyLinkBtn: "نسخ الرابط",

    // Accreditations & Legal Status Section
    accreditationsTitle: "بيانات الاعتماد والصفة القانونية الرسمية",
    officialCardType: "بطاقة إطار — عضو بالمكتب الجهوي للوسط",
    lblHolderName: "الإسم واللقب :",
    valHolderName: "النذير طمل (NADIR TAMMAL)",
    lblOfficialRole: "الصفة الرسمية :",
    valOfficialRole: "عضو بالمكتب الجهوي للوسط (الجزائر العاصمة)",
    lblIdNum: "الرقم التعريفي (ID) :",
    lblRegNum: "رقم التسجيل :",
    lblBirth: "تاريخ ومكان الإزدياد :",
    valBirth: "1999/08/01 بورقلة (Ouargla)",
    lblValidity: "تاريخ الإصدار والصلاحية :",
    valValidity: "أكتوبر 2026 (صالحة لمدة سنة قابلة للتجديد)",
    lblPresident: "رئيس الهيئة الوطنية :",
    valPresident: "القائد شريبط عبد الكريم",
    lblMinistryAuth: "الاعتماد الوزاري :",
    valMinistryAuth: "إعتماد وزارة الداخلية والجماعات المحلية والتهيئة العمرانية رقم : 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
    lblLegalStatus: "الصفة القانونية :",
    valLegalStatus: "« حامل هذه البطاقة شخصية إعتبارية له كامل الصلاحيات أمام الجهات الرسمية »",
    lblUnRef: "المرجعية الأممية :",
    valUnRef: "إعلان الحق في التنمية ونشر بموجب قرار الجمعية العامة للأمم المتحدة تحت رقم 128/14 المؤرخ بـ 04 كانون الأول ديسمبر 1986",

    // Tier 2 Strategic Missions
    missionsTitle: "المجالات والمهام الاستراتيجية",
    tagCentralOffice: "التمثيل المؤسساتي",
    card1Title: "المكتب الجهوي للوسط — الجزائر العاصمة",
    card1Desc: "تمثيل الهيئة الوطنية أمام السلطات والهيئات الرسمية، والتنسيق المؤسساتي على مستوى الجزائر العاصمة والوسط.",
    tagInvestment: "التنمية الاقتصادية",
    card2Title: "ترقية الإستثمار والتنمية الاقتصادية",
    card2Desc: "مرافقة المشاريع الاستثمارية، تشجيع المبادرات الاقتصادية الشابة، والمساهمة الفعالة في برامج التنمية المستدامة.",
    tagDiaspora: "الجالية بالخارج",
    card3Title: "تنمية المهاجرين والتكفل بالجالية بالخارج",
    card3Desc: "مد جسور التواصل مع الكفاءات الوطنية بالخارج، التكفل بانشغالات الجالية، وإدماجها في الحركية التنموية الوطنية.",

    // Tier 3 Contact Channels & Headquarters
    contactTitle: "قنوات الاتصال المباشرة والمقار الرسمية",
    phoneFaxLabel: "الهاتف / الفاكس :",
    mobileLabel1: "الخط المحمول (1) :",
    mobileLabel2: "الخط المحمول (2) :",
    mobileLabel3: "الخط المحمول (3) :",
    emailLabel: "البريد الإلكتروني الرسمي :",
    mainHqBadge: "المقر الرئيسي",
    algiersHqCity: "الجزائر العاصمة",
    algiersHqAddr: "شارع بوجمعة تميم 249 درارية سيراميك — الجزائر العاصمة",
    centralAdminBadge: "الإدارة المركزية",
    constantineHqCity: "قسنطينة",
    constantineHqAddr: "و.ج 14 حي 1500 مسكن عدل توسعة بلمانع ع 39 محل 17 المدينة الجديدة — قسنطينة",

    // Footer
    footerRepublic: "الجمهورية الجزائرية الديمقراطية الشعبية",
    footerOrg: "المنظمة الجزائرية إتصال من أجل التنمية | الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج",
    footerLegalMention: "إعتماد وزارة الداخلية والجماعات المحلية والتهيئة العمرانية رقم : 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
    verifiedBadge: "بوابة رسمية معتمدة ومحمية بموجب القانون",
    copyright: "جميع الحقوق محفوظة © 2026 — الجمهورية الجزائرية الديمقراطية الشعبية",

    // Toast messages
    vcardSuccess: "تم تنزيل بطاقة الاتصال الرسمية بنجاح",
    copySuccess: "تم النسخ إلى الحافظة بنجاح",
    shareSuccess: "تمت مشاركة البوابة بنجاح"
  },

  fr: {
    // Document Title
    pageTitle: "M. Nadir Tammal | Portail Numérique Officiel",

    // Topbar & Republic Header
    republicHeader: "République Algérienne Démocratique et Populaire",
    republicSub: "الجمهورية الجزائرية الديمقراطية الشعبية",
    orgName: "Organisation Algérienne Communication pour le Développement",
    authorityName: "Autorité Nationale pour le Développement des Migrants et la Prise en Charge de la Communauté à l'Étranger",
    pillar1: "Communication",
    pillar2: "Investissement",
    pillar3: "Développement",

    // Text strictly inside portrait golden container
    nameAr: "M. NADIR TAMMAL",
    nameEn: "النذير طمل",
    roleTitle: "Membre du Bureau Régional du Centre — Alger",
    pillarsTitle: "Cadre accrédité auprès de l'Autorité Nationale | Communication • Investissement • Développement",

    // Rank Badge
    leadershipBadge: "Carte de Cadre Officielle • Membre du Bureau Régional du Centre",

    // Tier 1 Buttons
    saveContactBtn: "Enregistrer le Contact Officiel (vCard)",
    saveContactSub: "Télécharger la fiche de contact vCard sur votre mobile",
    sharePortalBtn: "Partager le Portail",
    copyLinkBtn: "Copier le Lien",

    // Accreditations & Legal Status Section
    accreditationsTitle: "Accréditations & Statut Juridique Officiel",
    officialCardType: "Carte de Cadre — Bureau Régional du Centre",
    lblHolderName: "Nom et Prénom :",
    valHolderName: "Nadir Tammal (النذير طمل)",
    lblOfficialRole: "Fonction Officielle :",
    valOfficialRole: "Membre du Bureau Régional du Centre (Alger)",
    lblIdNum: "Identifiant Officiel (ID) :",
    lblRegNum: "Numéro d'Enregistrement :",
    lblBirth: "Date et Lieu de Naissance :",
    valBirth: "01/08/1999 à Ouargla (بورقلة)",
    lblValidity: "Date d'Émission et Validité :",
    valValidity: "Octobre 2026 (Valable un an renouvelable)",
    lblPresident: "Président de l'Autorité :",
    valPresident: "Commandant Chribat Abdelkrim (القائد شريبط عبد الكريم)",
    lblMinistryAuth: "Agrément Ministériel :",
    valMinistryAuth: "Agrément du Ministère de l'Intérieur, des Collectivités Locales et de l'Aménagement du Territoire N° : 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
    lblLegalStatus: "Statut Juridique :",
    valLegalStatus: "« Le titulaire de cette carte est une personne morale investie de pleins pouvoirs auprès des autorités officielles »",
    lblUnRef: "Référence Onusienne :",
    valUnRef: "Déclaration sur le Droit au Développement, résolution 41/128 de l'Assemblée générale des Nations Unies du 4 décembre 1986",

    // Tier 2 Strategic Missions
    missionsTitle: "Domaines de Compétence & Missions Stratégiques",
    tagCentralOffice: "Représentation Officielle",
    card1Title: "Bureau Régional du Centre — Alger",
    card1Desc: "Représentation de l'Autorité Nationale auprès des autorités et institutions officielles, coordination institutionnelle sur Alger et la région Centre.",
    tagInvestment: "Développement Économique",
    card2Title: "Promotion de l'Investissement et Développement Économique",
    card2Desc: "Accompagnement des projets d'investissement, encouragement des initiatives économiques des jeunes et contribution active aux programmes de développement durable.",
    tagDiaspora: "Communauté à l'Étranger",
    card3Title: "Développement des Migrants & Prise en Charge de la Diaspora",
    card3Desc: "Création de passerelles avec les compétences nationales à l'étranger, prise en charge des préoccupations de la communauté et intégration à la dynamique de développement national.",

    // Tier 3 Contact Channels & Headquarters
    contactTitle: "Lignes Directes & Sièges Officiels",
    phoneFaxLabel: "Téléphone / Fax :",
    mobileLabel1: "Ligne Mobile (1) :",
    mobileLabel2: "Ligne Mobile (2) :",
    mobileLabel3: "Ligne Mobile (3) :",
    emailLabel: "Courriel Officiel :",
    mainHqBadge: "Siège Principal",
    algiersHqCity: "Alger",
    algiersHqAddr: "249 Rue Boudjemaa Temim, Draria Céramique — Alger",
    centralAdminBadge: "Administration Centrale",
    constantineHqCity: "Constantine",
    constantineHqAddr: "W.J 14, Cité 1500 Logts AADL Extension Belmane, Bât 39 Local 17, Ville Nouvelle — Constantine",

    // Footer
    footerRepublic: "République Algérienne Démocratique et Populaire",
    footerOrg: "Organisation Algérienne Communication pour le Développement | Autorité Nationale pour le Développement des Migrants",
    footerLegalMention: "Agrément du Ministère de l'Intérieur N° : 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
    verifiedBadge: "Portail officiel certifié et protégé par la loi",
    copyright: "Tous droits réservés © 2026 — République Algérienne Démocratique et Populaire",

    // Toast messages
    vcardSuccess: "Fiche vCard officielle téléchargée avec succès",
    copySuccess: "Copié dans le presse-papier avec succès",
    shareSuccess: "Portail partagé avec succès"
  },

  en: {
    // Document Title
    pageTitle: "Mr. Nadir Tammal | Official Digital Portal",

    // Topbar & Republic Header
    republicHeader: "People's Democratic Republic of Algeria",
    republicSub: "الجمهورية الجزائرية الديمقراطية الشعبية",
    orgName: "Algerian Organization Communication for Development",
    authorityName: "The National Authority for the Development of Migrants and Sponsorship of the Community Abroad",
    pillar1: "Communication",
    pillar2: "Investment",
    pillar3: "Development",

    // Text strictly inside portrait golden container
    nameAr: "MR. NADIR TAMMAL",
    nameEn: "النذير طمل",
    roleTitle: "Member of the Central Regional Office — Algiers",
    pillarsTitle: "Accredited Executive at the National Authority | Communication • Investment • Development",

    // Rank Badge
    leadershipBadge: "Official Executive Card • Member of the Central Regional Office",

    // Tier 1 Buttons
    saveContactBtn: "Save Official Contact (vCard)",
    saveContactSub: "Download authenticated executive vCard to your device",
    sharePortalBtn: "Share Official Portal",
    copyLinkBtn: "Copy Link",

    // Accreditations & Legal Status Section
    accreditationsTitle: "Official Accreditations & Legal Status",
    officialCardType: "Executive Card — Central Regional Office",
    lblHolderName: "Full Name:",
    valHolderName: "Nadir Tammal (النذير طمل)",
    lblOfficialRole: "Official Role:",
    valOfficialRole: "Member of the Central Regional Office (Algiers)",
    lblIdNum: "Official ID:",
    lblRegNum: "Registration No.:",
    lblBirth: "Date & Place of Birth:",
    valBirth: "1999/08/01 in Ouargla (بورقلة)",
    lblValidity: "Issue Date & Validity:",
    valValidity: "October 2026 (Valid for one renewable year)",
    lblPresident: "President of the National Authority:",
    valPresident: "Commandant Chribat Abdelkrim (القائد شريبط عبد الكريم)",
    lblMinistryAuth: "Ministerial Accreditation:",
    valMinistryAuth: "Ministry of Interior, Local Authorities and Territorial Planning Accreditation No.: 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
    lblLegalStatus: "Legal Status:",
    valLegalStatus: "« The holder of this card is a legal entity endowed with full powers before official authorities »",
    lblUnRef: "UN Reference:",
    valUnRef: "Declaration on the Right to Development, UN General Assembly resolution 41/128 of 4 December 1986",

    // Tier 2 Strategic Missions
    missionsTitle: "Core Competencies & Strategic Missions",
    tagCentralOffice: "Institutional Representation",
    card1Title: "Central Regional Office — Algiers",
    card1Desc: "Representing the National Authority before official bodies, and leading institutional coordination across Algiers and the Central region.",
    tagInvestment: "Economic Development",
    card2Title: "Investment Promotion & Economic Development",
    card2Desc: "Supporting strategic investment projects, fostering youth economic initiatives, and actively contributing to sustainable national development programs.",
    tagDiaspora: "Diaspora Affairs",
    card3Title: "Migrant Development & Diaspora Care",
    card3Desc: "Building bridges with national talent abroad, addressing diaspora concerns, and engaging them in the dynamic momentum of national development.",

    // Tier 3 Contact Channels & Headquarters
    contactTitle: "Direct Official Communication & Headquarters",
    phoneFaxLabel: "Phone / Fax:",
    mobileLabel1: "Mobile Line (1):",
    mobileLabel2: "Mobile Line (2):",
    mobileLabel3: "Mobile Line (3):",
    emailLabel: "Official Email:",
    mainHqBadge: "Main Headquarters",
    algiersHqCity: "Algiers",
    algiersHqAddr: "249 Rue Boudjemaa Temim, Draria Céramique — Algiers",
    centralAdminBadge: "Central Administration",
    constantineHqCity: "Constantine",
    constantineHqAddr: "W.J 14, 1500 AADL Housing Belmane Ext., Bldg 39 Store 17, New Town — Constantine",

    // Footer
    footerRepublic: "People's Democratic Republic of Algeria",
    footerOrg: "Algerian Organization Communication for Development | National Authority for Migrants",
    footerLegalMention: "Ministry of Interior Accreditation No.: 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21",
    verifiedBadge: "Verified official portal protected under the law",
    copyright: "All Rights Reserved © 2026 — People's Democratic Republic of Algeria",

    // Toast messages
    vcardSuccess: "Official vCard downloaded successfully",
    copySuccess: "Copied to clipboard successfully",
    shareSuccess: "Portal shared successfully"
  }
};

let currentLang = 'ar';

function initI18n() {
  const savedLang = localStorage.getItem('portal_lang');
  if (savedLang && ['ar', 'fr', 'en'].includes(savedLang)) {
    setLanguage(savedLang);
  } else {
    setLanguage('ar');
  }

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('portal_lang', lang);

  // Update HTML tag attributes
  const isRtl = (lang === 'ar');
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  // Update Document Title
  document.title = TRANSLATIONS[lang].pageTitle || document.title;

  // Update Language switcher active states
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  // Update all i18n data elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });
}

/* ==========================================================================
   2. VCARD 3.0 DOWNLOAD ENGINE (UTF-8 STANDARD)
   ========================================================================== */
function initVCardDownloader() {
  const vcardBtn = document.getElementById('download-vcard-btn');
  if (!vcardBtn) return;

  vcardBtn.addEventListener('click', () => {
    generateAndDownloadVCard();
  });
}

function generateAndDownloadVCard() {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'FN;CHARSET=UTF-8:Nadir Tammal (السيد النذير طمل)',
    'N;CHARSET=UTF-8:Tammal;Nadir;;;',
    'ORG;CHARSET=UTF-8:المنظمة الجزائرية إتصال من أجل التنمية - الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج',
    'TITLE;CHARSET=UTF-8:عضو بالمكتب الجهوي - الوسط الجزائر العاصمة (Membre du Bureau Régional du Centre — Alger)',
    'ROLE;CHARSET=UTF-8:عضو المكتب الجهوي للوسط - الجزائر العاصمة',
    'TEL;TYPE=WORK,VOICE:+21339023769',
    'TEL;TYPE=CELL,VOICE:+213553609631',
    'TEL;TYPE=CELL,VOICE:+213552022868',
    'TEL;TYPE=CELL,VOICE:+213656127378',
    'EMAIL;TYPE=INTERNET,WORK:aocfdpdg02@gmail.com',
    'ADR;TYPE=WORK;CHARSET=UTF-8:;;شارع بوجمعة تميم 249 درارية سيراميك;الجزائر العاصمة;;;Algérie',
    'NOTE;CHARSET=UTF-8:بطاقة إطار رقم: 100114 | رقم التسجيل: 2026201601141018 | إعتماد وزارة الداخلية والجماعات المحلية والتهيئة العمرانية رقم: 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21 | تاريخ ومكان الإزدياد: 1999/08/01 بورقلة | رئيس الهيئة: القائد شريبط عبد الكريم',
    'REV:' + new Date().toISOString(),
    'END:VCARD'
  ].join('\r\n');

  // UTF-8 BOM ensures non-Latin characters (Arabic) render perfectly on all devices
  const blob = new Blob(['\uFEFF' + vcardData], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const tempLink = document.createElement('a');
  tempLink.href = url;
  tempLink.setAttribute('download', 'Nadir_Tammal_Executive_Card.vcf');
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);

  setTimeout(() => URL.revokeObjectURL(url), 2000);

  const successMsg = TRANSLATIONS[currentLang]?.vcardSuccess || 'vCard downloaded successfully';
  showToast(successMsg);
}

/* ==========================================================================
   3. CLIPBOARD COPY HANDLERS
   ========================================================================== */
function initClipboardHandlers() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        copyToClipboard(textToCopy);
      }
    });
  });

  const copyLinkBtn = document.getElementById('copy-link-btn');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', () => {
      copyToClipboard(window.location.href);
    });
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text)
      .then(() => {
        showToast(TRANSLATIONS[currentLang]?.copySuccess || 'Copied to clipboard');
      })
      .catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.top = '-9999px';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(TRANSLATIONS[currentLang]?.copySuccess || 'Copied to clipboard');
  } catch (err) {
    console.error('Copy failed', err);
  }
  document.body.removeChild(textArea);
}

/* ==========================================================================
   4. SHARE ACTION (WEB SHARE API WITH FALLBACK)
   ========================================================================== */
function initShareAction() {
  const shareBtn = document.getElementById('share-portal-btn');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async () => {
    const title = TRANSLATIONS[currentLang]?.pageTitle || document.title;
    const text = (TRANSLATIONS[currentLang]?.roleTitle || '') + ' - ' + (TRANSLATIONS[currentLang]?.orgName || '');
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        showToast(TRANSLATIONS[currentLang]?.shareSuccess || 'Portal shared successfully');
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard(url);
        }
      }
    } else {
      copyToClipboard(url);
    }
  });
}

/* ==========================================================================
   5. TOAST NOTIFICATION COMPONENT
   ========================================================================== */
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  // Clear existing toasts to prevent stacking
  container.innerHTML = '';

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.setAttribute('role', 'alert');
  toast.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode === container) {
      container.removeChild(toast);
    }
  }, 3200);
}
