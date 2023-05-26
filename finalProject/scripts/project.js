
document.title = 'Final project';
document.querySelector("#title").innerHTML = 'NASA - Picture of the day';
document.querySelector("#lblDate").innerHTML = 'Pick a date:';
document.querySelector("#btnView").innerHTML = ' Retrieve information ';

const today = new Date();
document.querySelector("#inputDate").value = today.toISOString().split('T')[0];

document.querySelector("#btnView").addEventListener("click", function () {
    const datePicked = document.querySelector("#inputDate").value;
    getPicture(datePicked);
}
)
//console.log(today.toISOString().split('T')[0]);
let url;

async function getPicture(datePicked) {
    url = "https://api.nasa.gov/planetary/apod?api_key=hgelbc5KNkfj1Xqd9oNJD3CzBKVWmvMJFFa9cabS&start_date=" + datePicked + "&end_date=" + datePicked;
    const response = await fetch(url);
    console.log(datePicked);
    if (response.ok) {
        const pictureInfo = await response.json();
        //console.log(pictureInfo.length);
        if (pictureInfo.length != 0) {

            const result = pictureInfo.map((picture) => function () {
                console.log(picture.title + ', ' + picture.date + ', ' + picture.url)
            }
            )                
            document.querySelector("#results").innerHTML =result;

        }
        else {
            alert("No picture found in " + datePicked);
        }

    }

}
//getPicture(url);