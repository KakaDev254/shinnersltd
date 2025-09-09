// Sample Portfolio Data
const portfolioItems = [
  {
    title: "Corporate Gala",
    category: "corporate",
    image: "assets/hero2.jpg",
  },
  {
    title: "Wedding Reception",
    category: "wedding",
    image: "assets/hero1.jpg",
  },
  {
    title: "Charity Fundraiser",
    category: "charity",
    image: "assets/hero3.jpg",
  },
  {
    title: "Music Concert",
    category: "entertainment",
    image: "assets/portfolio4.jpg",
  },
  {
    title: "Corporate Conference",
    category: "corporate",
    image: "assets/portfolio5.jpg",
  },
  {
    title: "Luxury Wedding",
    category: "wedding",
    image: "assets/portfolio6.jpg",
  },
];

// Render Portfolio Items
const portfolioGrid = document.getElementById("portfolio-grid");

function renderPortfolio(category = "all") {
  portfolioGrid.innerHTML = "";

  const filteredItems =
    category === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === category);

  filteredItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("portfolio-card");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="portfolio-info">
        <h3>${item.title}</h3>
      </div>
    `;
    portfolioGrid.appendChild(card);
  });
}

// Initial render
renderPortfolio();

// Filter Button Functionality
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");
    renderPortfolio(category);
  });
});

// Example function to "upload" (add) a new portfolio item dynamically
function addPortfolioItem(title, category, image) {
  portfolioItems.push({ title, category, image });
  renderPortfolio("all");
}

// Example usage: addPortfolioItem("New Event", "charity", "assets/newEvent.jpg");
