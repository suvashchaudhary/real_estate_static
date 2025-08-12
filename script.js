// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Kathmandu Apartment",
    price: 450000,
    location: "Kathmandu",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image:
      "https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.jpg?s=612x612&w=0&k=20&c=6n08rcEdza9Vehf5cHzk1uS0UKAN0qr3o884mbDvD5o=",
    address: "Durbar Marg, Kathmandu, Nepal",
  },
  {
    id: 2,
    title: "Luxury Pokhara Lakeside Villa",
    price: 120000,
    location: "Pokhara",
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "Lakeside, Pokhara, Nepal",
  },
  {
    id: 3,
    title: "Charming Bhaktapur Heritage Home",
    price: 325000,
    location: "Bhaktapur",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "Dattatreya Square, Bhaktapur, Nepal",
  },
  {
    id: 4,
    title: "Simple Biratnagar Apartment",
    price: 10000000,
    location: "Biratnagar",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    image:
      "https://media.istockphoto.com/id/1628908291/photo/kraton-palace-of-the-sultans-yogyakarta-java-island-indonesia.jpg?s=2048x2048&w=is&k=20&c=qZMyQ1_FeIP-EP6pi1n6IcII55p5HZLMRUiBJTa2kYo=",
    address: "Khunyakatta, Biratnagar, Nepal",
  },
  {
    id: 5,
    title: "Spacious Lalitpur Family Home",
    price: 425000,
    location: "Lalitpur",
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 2400,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "Jawalakhel, Lalitpur, Nepal",
  },
  {
    id: 6,
    title: "Penthouse with Himalayan Views",
    price: 85000,
    location: "Kathmandu",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "Park Road, Kathmandu, Nepal",
  },
  {
    id: 7,
    title: "Cozy Dhulikhel Cottage",
    price: 27500,
    location: "Dhulikhel",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1100,
    image:
      "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "Panoramic Hill Rd, Dhulikhel, Nepal",
  },
  {
    id: 8,
    title: "Modern Luxury Chitwan Condo",
    price: 65000,
    location: "Chitwan",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    image:
      "https://images.unsplash.com/photo-1623204918735-e34e4cb2d731?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    address: "Bharatpur, Chitwan, Nepal",
  },
  {
    id: 9,
    title: "Luxury Patan Heritage House",
    price: 650000,
    location: "Patan",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
    address: "Durbar Square, Patan, Nepal",
  },
];

// Function to display properties
function displayProperties(propertiesToDisplay) {
  const propertyList = document.getElementById("propertyList");
  propertyList.innerHTML = "";

  if (propertiesToDisplay.length === 0) {
    propertyList.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem;">No properties match your filters. Please try different criteria.</p>';
    return;
  }

  /**
   *
   * @param {number} price
   * @returns Formatted price string in NPR currency
   */
  const priceFormat = (price) =>
    Intl.NumberFormat("en-NP", {
      style: "currency",
      currency: "NPR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(price * 100);

  propertiesToDisplay.forEach((property) => {
    const propertyCard = document.createElement("div");
    propertyCard.className = "property-card";
    propertyCard.innerHTML = `
                    <div class="property-img">
                        <img src="${property.image}" alt="${property.title}">
                    </div>
                    <div class="property-info">
                        <div class="property-price">${priceFormat(
                          property.price
                        )}</div>
                        <div class="property-address">${property.address}</div>
                        <div class="property-features">
                            <div class="feature"><i class="fas fa-bed"></i> ${
                              property.bedrooms
                            } beds</div>
                            <div class="feature"><i class="fas fa-bath"></i> ${
                              property.bathrooms
                            } baths</div>
                            <div class="feature"><i class="fas fa-ruler-combined"></i> ${
                              property.sqft
                            } sqft</div>
                        </div>
                        <a href="#" class="btn">View Details</a>
                    </div>
                `;
    propertyList.appendChild(propertyCard);
  });
}

// Filter properties based on form inputs
function filterProperties() {
  const locationFilter = document.getElementById("location").value;
  const priceFilter =
    parseInt(document.getElementById("price").value) || Infinity;
  const bedroomsFilter =
    parseInt(document.getElementById("bedrooms").value) || 0;

  const filteredProperties = properties.filter((property) => {
    return (
      (locationFilter === "" || property.location === locationFilter) &&
      property.price <= priceFilter &&
      property.bedrooms >= bedroomsFilter
    );
  });

  displayProperties(filteredProperties);
}

// Event listener for form submission
document.getElementById("propertyFilter").addEventListener("submit", (e) => {
  e.preventDefault();
  filterProperties();
});

// Event listener for contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! An agent will contact you shortly.");
  this.reset();
});

// Initialize by displaying all properties
displayProperties(properties);
