// Sample data (you can replace with your own flats later)
const flats = [
  {
    title: "2 BHK Luxury Flat",
    location: "Andheri East, Mumbai",
    price: "₹99,000 / month",
    size: "1250 sq.ft",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    owner: "Dileep Mishra",
    mobile: "7208441932"
  },
  {
    title: "3 BHK Fully Furnished",
    location: "Andheri west, Mumbai",
    price: "₹95,000 / month",
    size: "1600 sq.ft",
    img: "https://images.unsplash.com/photo-1597047084897-51e81819a499",
    owner: "Dileep mishra Owner",
    mobile: "7208441932"
  },
  {
    title: "1 BHK Budget Friendly",
    location: "Goregaon west new link road, Mumbai-400104",
    price: "₹80,000 / month",
    size: "650 sq.ft",
    img: "https://dyimg2.realestateindia.com/prop_images/2009648/1176031_8-350x350.jpg",
    owner: "Mishra ji",
    mobile: "9123456780"
  }
];

// Rendering function
function renderFlats() {
  const list = document.getElementById("flatList");
  list.innerHTML = "";

  flats.forEach(flat => {
    list.innerHTML += `
      <div class="flat-card">
        <img class="flat-img" src="${flat.img}" alt="Flat Image" />
        <div class="flat-info">
          <h2>${flat.title}</h2>
          <p><strong>Location:</strong> ${flat.location}</p>
          <p><strong>Price:</strong> ${flat.price}</p>
          <p><strong>Size:</strong> ${flat.size}</p>

          <div class="contact-box">
            <strong>For Contact:</strong><br>
            ${flat.owner}<br>
            Mobile: ${flat.mobile}
          </div>
        </div>
      </div>
    `;
  });
}

renderFlats();
