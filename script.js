/* ==========================================================
   Skullberry Tattoo Studio
   EDIT YOUR ARTISTS AND NEWS BELOW
   (photo = path to the artist's image inside your images folder)
   ========================================================== */

const artists = [
  { name: 'Inday Daucus Bonsai', photo: 'image/inday.jpg',   role: 'Tattoo Artist and Piercer',            tags: ['Black and Grey Surrealism', 'Micro Realism', 'Piercing'],
    bio: `Inday Daucus Bonsai is a tattoo artist renowned for her exceptional mastery in Black and Grey Surrealism and Micro Realism, which has distinguished her in the tattoo community.

She is celebrated for crafting breathtaking, lifelike designs that showcase astonishing attention to detail. As one of the few female tattoo artists in Negros Oriental, Inday brings her incredible talent and years of experience to the table.` },
  { name: 'Alvin Amores', photo: 'image/alvin.jpg',   role: 'Tattoo Artist',            tags: ['Black and Grey', 'Colored Realism'],
    bio: `a highly talented tattoo artist renowned for his versatility and skill.

Whether you're looking for vibrant color or striking black and grey pieces, intricate small designs or bold large tattoos, Alvin has the expertise to bring your vision to life. His precise craftsmanship and creative flair make every piece a unique work of art.` },
  { name: 'Severino Santino', photo: 'image/severino.jpg', role: 'Tattoo Artist',            tags: ['Colored Realism', 'Black & grey'],
    bio: `is a tattoo artist renowned for his expertise in both black and colored realism.

His work is a testament to his skill—bold, imaginative, and executed with precision. With a distinctive style and a keen eye for detail, he truly stands out in his craft.` },
  { name: 'Mark Anthony Briones', photo: 'image/mark.jpg',  role: 'Tattoo Artist and Piercer',            tags: ['Black and Grey', 'Colored Realism', 'Piercing'],
    bio: `A highly acclaimed artist celebrated for his stunning black and grey tattoos. Whether you're looking for a striking large piece to make a statement or a smaller design for a subtle touch,

  Mark has the skill to bring your vision to life with exceptional artistry.` },
  { name: 'Lordz Anito', photo: 'image/lordx.jpg',  role: 'Tattoo Artist', tags: ['Black and Grey', 'finelines'],
    bio: `a master tattoo artist renowned for his exceptional black and grey works. Lordz effortlessly adapts to any style—from bold, large-scale pieces to elegant minimalist tattoos.

His artistic vision and attention to detail ensure that each tattoo is not just body art, but a personal story brought to life.

  Whether you're a first-timer or a seasoned collector, Lordz is dedicated to making your tattoo dreams a reality.` },
  { name: 'Ryan Llagas', photo: 'image/ryan.jpg',   role: 'Tattoo Artist',                  tags: ['Black and Grey', 'Colored Realism',],
    bio: `is one of the finest artists in town, renowned for his expertise in colored tattoos and his passion for his craft.

His distinctive style harmoniously merges precision with creativity. With remarkable attention to detail, he consistently creates pieces that leave a lasting impression.` }
];

const news = [
  { tag: 'GUEST ARTIST', img: 'image/news.jpg', title: '𝐃𝐮𝐦𝐚𝐠𝐮𝐞𝐭𝐞’𝐬 𝐩𝐫𝐢𝐝𝐞 𝐬𝐭𝐫𝐢𝐤𝐞𝐬 𝐚𝐠𝐚𝐢𝐧‼️',
    body: `Miss Inday Daucus Bonsai, also known as “Bonsai,” made Dumaguete City, Negros Oriental proud once again after winning Best Female Tattoo Artist at the Kapatik World Tattoo Expo 2026 held at the IEC Convention Center in Cebu City, Philippines.

She competed against talented artists from different countries. The Netherlands placed second, while Japan finished third. This is her second time winning the title, as she also received the same award in 2025.

Because of her achievement, the Sangguniang Panlungsod of Dumaguete gave her a resolution of commendation during their regular session.`, by: 'Skullberry Studio' },
  { tag: 'PROMO', img: 'image/minimalist.jpg', title: 'Flash day: walk-ins welcome.',
    body: 'Replace this with the details of your next flash day, pricing and available hours.', by: 'Skullberry Studio' },
  { tag: 'CARE TIPS', img: 'image/aftercare.jpg', title: 'How to heal your new tattoo.',
    body: 'Replace this with short aftercare guidance for your clients.', by: 'Skullberry Studio' }
];

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);

/* ---------- Artists ---------- */
const roster = $('roster');

function showArtist(index) {
  const artist = artists[index];

  $('artistName').textContent = artist.name;
  $('artistRole').textContent = artist.role;
  $('artistBio').textContent = artist.bio;
  $('artistPhoto').src = artist.photo;
  $('artistPhoto').alt = `Photo of ${artist.name}`;
  $('artistTags').replaceChildren(...artist.tags.map((tag) => {
    const li = document.createElement('li');
    li.textContent = tag;
    return li;
  }));

  [...roster.children].forEach((button, i) => {
    button.setAttribute('aria-selected', String(i === index));
  });
}

artists.forEach((artist, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('role', 'tab');
  button.textContent = artist.name;
  button.addEventListener('click', () => showArtist(index));
  roster.append(button);
});

showArtist(0);

/* ---------- News ---------- */
const dots = $('newsDots');

// the news picture is created here, so index.html only needs the empty #newsPic box
const newsImg = document.createElement('img');
$('newsPic').append(newsImg);

// if a news picture can't be found, show the logo and print the bad path in the browser console (F12)
newsImg.addEventListener('error', () => {
  console.warn('News image not found:', newsImg.getAttribute('src'));
  if (!newsImg.src.endsWith('image/logo.jpg')) newsImg.src = 'image/logo.jpg';
});

function showNews(index) {
  const item = news[index];

  $('newsTag').textContent = item.tag;
  newsImg.src = item.img;
  newsImg.alt = `${item.tag} - ${item.title}`;
  $('newsTitle').textContent = item.title;
  $('newsBody').textContent = item.body;
  $('newsBy').textContent = item.by;

  [...dots.children].forEach((dot, i) => {
    dot.setAttribute('aria-current', String(i === index));
  });
}

news.forEach((item, index) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.setAttribute('aria-label', `Show news ${index + 1}`);
  dot.addEventListener('click', () => showNews(index));
  dots.append(dot);
});

showNews(0);

/* ---------- Forms ---------- */

// Paste your Google Apps Script web app URL here (see google-apps-script.gs).
const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1O_4otUehBQw8DR1P652cd1fTRBE-R0OA0LBLn4K3YPw/edit?gid=0#gid=0';

$('contactForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
  const status = $('formStatus');

  if (!SHEET_URL.startsWith('https://script.google.com/')) {
  status.textContent = 'Form is not connected yet. Add your Google Apps Script web app URL in script.js.';
  return;
}

  button.disabled = true;
  status.textContent = 'Sending...';

  try {
    // no-cors: the request reaches Google Sheets, the reply is just not readable by the browser
    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: new URLSearchParams(new FormData(form))
    });
    status.textContent = 'Thanks! We received your inquiry and will reply soon.';
    form.reset();
  } catch (error) {
    status.textContent = 'Sorry, something went wrong. Please try again or message us on Facebook.';
  } finally {
    button.disabled = false;
  }
});

$('newsletterForm').addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});

// Skullberry Tattoo Studio - saves contact form entries into this Google Sheet.
// Paste into Extensions > Apps Script in your Google Sheet, then Deploy as a Web app.

const SHEET_NAME = 'Inquiries';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const spreadsheet = SpreadsheetApp.openById('1O_4otUehBQw8DR1P652cd1fTRBE-R0OA0LBLn4K3YPw');
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // First time: create the sheet with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(['Date', 'Full Name', 'Email', 'Contact Number', 'Subject', 'Message']);
      sheet.getRange('D:D').setNumberFormat('@');   // keep phone numbers starting with 0
      sheet.setFrozenRows(1);
    }

    const p = e.parameter;
    sheet.appendRow([
      new Date(),
      p.name || '',
      p.email || '',
      p.phone || '',
      p.subject || '',
      p.message || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}