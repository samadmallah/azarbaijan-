document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Dynamic itinerary content
  const itineraryData = [
    {
      icon: "plane-arrival",
      day: "Day 1",
      title: "Arrival and Welcome",
      theme: "Kickstarting Connections",
      activities: [
        "Airport transfers",
        "Hotel check-in",
        "Welcome dinner with Azerbaijani cuisine",
        "Icebreaker activities",
      ],
    },
    {
      icon: "map-marked-alt",
      day: "Day 2",
      title: "City Tour & Cultural Immersion",
      theme: "Discovering Baku's Charm",
      activities: [
        "Guided tour of Baku's Old City",
        "Visit to Heydar Aliyev Center",
        "Evening walk along Baku Boulevard",
      ],
    },
    {
      icon: "mountain",
      day: "Day 3",
      title: "Day Trip to Shahdag",
      theme: "Adventure in the Mountains",
      activities: ["Scenic cable car ride", "Roller coaster ride", "Optional: Hiking, ziplining, skiing"],
    },
    {
      icon: "briefcase",
      day: "Day 4",
      title: "Workshops & Business Activities",
      theme: "Learning and Growing Together",
      activities: [
        "Workshop: Scaling Internationally",
        "Panel: Innovation & Technology",
        "Business Showcasing",
        "Networking Session",
      ],
    },
    {
      icon: "shopping-bag",
      day: "Day 5",
      title: "Shopping, Fun & Gala Dinner",
      theme: "Celebrating Success",
      activities: ["Shopping at Nizami Street", "Visit to Carpet Museum", "Gala Dinner & Awards"],
    },
    {
      icon: "plane-departure",
      day: "Day 6",
      title: "Goodbye & Departure",
      theme: "Until We Meet Again",
      activities: ["Farewell speeches", "Feedback session", "Airport transfers"],
    },
  ]

  const itineraryContainer = document.getElementById("itinerary-cards")
  itineraryData.forEach((item, index) => {
    const card = document.createElement("div")
    card.className = "col-md-6 mb-4"
    card.innerHTML = `
            <div class="card h-100 itinerary-card">
                <div class="card-body">
                    <h3 class="card-title h5"><i class="fas fa-${item.icon} me-2 text-primary"></i>${item.day}: ${item.title}</h3>
                    <p class="card-text fw-bold text-muted">"${item.theme}"</p>
                    <ul class="list-unstyled">
                        ${item.activities.map((activity) => `<li><i class="fas fa-check me-2 text-success"></i>${activity}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `
    itineraryContainer.appendChild(card)
  })
})

