// Sample Portfolio Data
const portfolioItems = [
  {
    title: "Chan -Kenya Vs Morocco",
    category: "entertainment",
    image: "assets/chan_field.jpg",
  },
  {
    title: "Chan 2024 Finals",
    category: "entertaiment",
    image: "assets/chan2.jpg",
  },
  {
    title: "Wedding Ceremony",
    category: "wedding",
    image: "assets/wedding.jpg",
  },
  {
    title: "Corporate ",
    category: "corporate",
    image: "assets/corp.jpg",
  },
  {
    title: "Garissa County Public Holiday",
    category: "corporate",
    image: "assets/gari.jpg",
  },
  {
    title: "Team Building",
    category: "entertainment",
    image: "assets/team.jpg",
  },
  {
    title: "Graduation Ceremony",
    category: "entertainment",
    image: "assets/gradu.jpg",
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
