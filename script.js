// Unsplash API
const photoCount = 10;
const apiKey = 'zF-QCy7sL3cg4TMr3vuHYjNEaBnFe9-L6ZOjt6dCAN8';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${photoCount}`;


// Get photos from Unsplash api
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error 
    console.log(error);
  }
}


// On Load
getPhotos();