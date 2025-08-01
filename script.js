// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 450000,
    location: "New York",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "123 Broadway, New York, NY",
  },
  {
    id: 2,
    title: "Luxury Beachfront Villa",
    price: 1200000,
    location: "Miami",
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "456 Ocean Dr, Miami, FL",
  },
  {
    id: 3,
    title: "Charming Suburban Home",
    price: 325000,
    location: "Chicago",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    image:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "789 Maple St, Chicago, IL",
  },
  {
    id: 4,
    title: "Stylish City Loft",
    price: 575000,
    location: "Los Angeles",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 950,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "321 Arts District, Los Angeles, CA",
  },
  {
    id: 5,
    title: "Spacious Family Home",
    price: 425000,
    location: "Houston",
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 2400,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "159 Oak Ln, Houston, TX",
  },
  {
    id: 6,
    title: "Penthouse with City Views",
    price: 850000,
    location: "New York",
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2200,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "100 Park Ave, New York, NY",
  },
  {
    id: 7,
    title: "Cozy Cottage",
    price: 275000,
    location: "Chicago",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1100,
    image:
      "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "246 Garden Rd, Chicago, IL",
  },
  {
    id: 8,
    title: "Modern Luxury Condo",
    price: 650000,
    location: "Los Angeles",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    address: "700 Sunset Blvd, Los Angeles, CA",
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

  propertiesToDisplay.forEach((property) => {
    const propertyCard = document.createElement("div");
    propertyCard.className = "property-card";
    propertyCard.innerHTML = `
                    <div class="property-img">
                        <img src="${property.image}" alt="${property.title}">
                    </div>
                    <div class="property-info">
                        <div class="property-price">$${property.price.toLocaleString()}</div>
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
document
  .getElementById("propertyFilter")
  .addEventListener("submit", function (e) {
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
