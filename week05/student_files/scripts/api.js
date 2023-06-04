async function getPicture(url1) {
  const response = await fetch(url1);

  if (response.ok) {
    const pictureInfo = await response.json();
    console.log(pictureInfo);
    const result = pictureInfo.map( (picture)=>
        console.log(picture.title+', '+picture.date+', '+picture.url)
    )
  }
}
/*copyright
: 
"T. Rector"
date
: 
"2017-07-08"
explanation
: 
"Similar in size to large, bright spiral galaxies in our neighborhood, IC 342 is a mere 10 million light-years distant in the long-necked, northern constellation Camelopardalis. A sprawling island universe, IC 342 would otherwise be a prominent galaxy in our night sky, but it is hidden from clear view and only glimpsed through the veil of stars, gas and dust clouds along the plane of our own Milky Way galaxy. Even though IC 342's light is dimmed by intervening cosmic clouds, this sharp telescopic image traces the galaxy's own obscuring dust, blue star clusters, and glowing pink star forming regions along spiral arms that wind far from the galaxy's core. IC 342 may have undergone a recent burst of star formation activity and is close enough to have gravitationally influenced the evolution of the local group of galaxies and the Milky Way."
hdurl
: 
"https://apod.nasa.gov/apod/image/1707/ic342_rector2048.jpg"
media_type
: 
"image"
service_version
: 
"v1"
title
: 
"Hidden Galaxy IC 342"
url
: 
"https://apod.nasa.gov/apod/image/1707/ic342_rector1024s.jpg" */
const url1 = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2017-07-08&end_date=2017-07-30";
getPicture(url1);