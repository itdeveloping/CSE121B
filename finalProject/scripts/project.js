function RenderDoc() {
    const DocInfo = {
        docTitle: 'Javascript project',
        title: 'Javascript project',
        lblDate: 'Pick a date:',
        btnView: ' Retrieve information ',
        author: 'Author: Oscar Jose Rodriguez Alfaro'
    };
    document.title = DocInfo.docTitle;
    document.querySelector("#title").innerHTML = DocInfo.title;
    document.querySelector("#lblDate").innerHTML = DocInfo.lblDate;
    document.querySelector("#btnView").innerHTML = DocInfo.btnView;
    document.querySelector("#author").innerHTML = DocInfo.author;
    const today = new Date();
    document.querySelector("#inputDate").value = today.toISOString().split('T')[0];

    document.querySelector("#btnView").addEventListener("click", function () {
        const datePicked = document.querySelector("#inputDate").value;
        getPicture(datePicked);
    }
    )
}

//console.log(today.toISOString().split('T')[0]);
let url;

async function getPicture(datePicked) {
    url = "https://api.nasa.gov/planetary/apod?api_key=hgelbc5KNkfj1Xqd9oNJD3CzBKVWmvMJFFa9cabS&start_date=" + datePicked + "&end_date=" + datePicked;
    const response = await fetch(url);
    console.log(datePicked);
    if (response.ok) {
        let pictureInfo = await response.json();
        //console.log(pictureInfo.length);
        if (pictureInfo.length != 0) {

            let result = pictureInfo.map((picture) =>
                table = `<h2>${picture.title}</h2><p><a href="${picture.url}" target="_blank"><img src="${picture.url}" width="250px" alt="${picture.title}" /></a></p><p>Copyright: ${picture.copyright}</p><p>${picture.explanation}</p><p><a href="${picture.url}" target="_blank"> Open in new window </a></p>`
            );
            document.querySelector("#results").innerHTML = table;


        }
        else alert("No picture found in " + datePicked);
    }

}

RenderDoc();