const baseURL = "https://ci-swapi.herokuapp.com/api/";
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

xhr.send();

function setData (jsonData) {
    data =jsonData;
    console.log(data)
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       setData(JSON.parse(this.responseText));
    }
};

