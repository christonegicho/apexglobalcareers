// Navbar scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(0, 0, 80, 0.95)";
  } else {
    header.style.background = "rgba(0, 0, 50, 0.85)";
  }
});

// Typing animation only on index.html
if (document.getElementById("typing-text")) {
  const text = "Welcome to Apex Global Careers";
  let index = 0;
  function typeEffect() {
    if (index < text.length) {
      document.getElementById("typing-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  window.onload = typeEffect;
}
 const modal = document.getElementById("reviewModal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");

    openBtn.onclick = () => modal.style.display = "flex";
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; }
    // common.js

document.addEventListener("DOMContentLoaded", function () {
    // Create image element
    const img = document.createElement("img");
    img.src = "map.jfif"; // Path to your image
    img.alt = "Site Watermark";
    img.className = "site-global-image";

    // Add to the top of the body
    document.body.prepend(img);
});
// Sample career data (replace with real API/data later)
const careers = [
    { title: "Software Engineer", industry: "tech", description: "Develop applications and systems.", country: "Global" },
    { title: "Doctor", industry: "health", description: "Diagnose and treat medical conditions.", country: "Global" },
    { title: "Financial Analyst", industry: "finance", description: "Analyze financial data.", country: "Global" },
    // Add 50+ more careers...
];

// Render careers
function renderCareers(filteredCareers = careers) {
    const grid = document.getElementById('careers-grid');
    grid.innerHTML = '';

    filteredCareers.forEach((career, index) => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="card-header">
                <h2>${career.title}</h2>
                <p>${career.country}</p>
            </div>
            <div class="card-body">
                <p>${career.description}</p>
                <span class="industry-tag">${career.industry}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter logic
document.getElementById('industry-filter').addEventListener('change', (e) => {
    const industry = e.target.value;
    const filtered = industry === 'all' ? careers : careers.filter(c => c.industry === industry);
    renderCareers(filtered);
});

// Search logic
document.getElementById('search').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = careers.filter(c => 
        c.title.toLowerCase().includes(term) || 
        c.description.toLowerCase().includes(term)
    );
    renderCareers(filtered);
});

// Initial render
renderCareers();
const searchInput = document.getElementById('search');
const jobCards = Array.from(document.querySelectorAll('.job-card'));
const filterButtons = document.querySelectorAll('.filter-btn');
const paginationContainer = document.getElementById('pagination');

let filteredJobs = [...jobCards];
let currentPage = 1;
const jobsPerPage = 4;

// Fade-in delay
jobCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Search functionality
searchInput.addEventListener('keyup', function() {
    const searchValue = this.value.toLowerCase();
    filteredJobs = jobCards.filter(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const location = card.getAttribute('data-location').toLowerCase();
        const company = card.getAttribute('data-company').toLowerCase();
        return title.includes(searchValue) || location.includes(searchValue) || company.includes(searchValue);
    });
    currentPage = 1;
    renderJobs();
});

// Filter by category
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');

        if (category === 'all') {
            filteredJobs = [...jobCards];
        } else {
            filteredJobs = jobCards.filter(card => card.getAttribute('data-category') === category);
        }
        currentPage = 1;
        renderJobs();
    });
});

// Pagination setup
function renderJobs() {
    jobCards.forEach(card => card.classList.add('hide'));

    const start = (currentPage - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    filteredJobs.slice(start, end).forEach(card => card.classList.remove('hide'));

    renderPagination();
}

function renderPagination() {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        if (i === currentPage) btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentPage = i;
            renderJobs();
        });
        paginationContainer.appendChild(btn);
    }
}

// Initial render
renderJobs();
// Fade-in delay for cards
document.querySelectorAll('.resource-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
});

