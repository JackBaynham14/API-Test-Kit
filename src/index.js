function submit() {
    // Handle and route submit press to proper method function
    const method = document.getElementById("method").value;
    switch(method) {
        case "GET": {
            httpGet();
            break;
        } case "POST": {
            httpPost();
            break;
        } case "PUT": {
            httpPut();
            break;
        } case "DELETE": {
            httpDelete();
            break;
        }
    }
}

function httpGet() {
    // Send a get request
    const url = document.getElementById("url").value;
    fetch(window.location + "api/" + url, {
        method: "GET",
        headers: {
            "content-type": "string"
        }
    }).then(resp => {
        return resp.text()
    }).then(text => {
        document.getElementById("output").innerHTML = text;
    }).catch(err => {
        console.log(err);
    });
}

function httpPost() {
    // Send a post request
    console.log("POST");
}

function httpPut() {
    // Send a put request
    console.log("PUT");
}

function httpDelete() {
    // Senda delete request
    console.log("DELETE");
}