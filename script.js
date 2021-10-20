// Global Variables
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Photo array
let photosArray = [];


// Unsplash API
const photoCount = 10;
const apiKey = 'zF-QCy7sL3cg4TMr3vuHYjNEaBnFe9-L6ZOjt6dCAN8';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photoCount}`;


// Helper function to set attributes on photos
function setAttributes(ele, attributes) {
  for (const key in attributes) {
    ele.setAttribute(key, attributes[key]);
  }
}


// Create elements for links and photos and add to DOM
function displayPhotos() {
  // Run forEach func to grab data from API call
  photosArray.forEach((photo) => {
    // Create link to Unsplash 
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create img for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.description,
      title: photo.description,
    });
    // Put img inside ancvhor element, then both into image-container
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}


// Get photos from Unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayPhotos();
  } catch (error) {
    // Catch error 
    console.log(error);
  }
}


// On Load
getPhotos();