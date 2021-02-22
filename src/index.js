const output = document.getElementById("output");
const status = document.getElementById("status");

function submit() {
    // Handle and route submit press to proper method function
    const method = document.getElementById("method").value;
    const url = window.location + "api/" + document.getElementById("url").value;
    const body = document.getElementById("body").value;

    switch(method) {
        case "GET": {
            httpGet(url);
            break;
        } case "POST": {
            httpPost(url);
            break;
        } case "PUT": {
            httpPut(url, body);
            break;
        } case "DELETE": {
            httpDelete(url, body);
            break;
        }
    }
}

function httpGet(url) {
    // Send a get request
    fetch(url, {
        method: "GET"
    }).then(resp => {
        status.innerHTML = resp.status;
        return resp.text()
    }).then(text => {
        output.innerHTML = text;
    }).catch(err => {
        console.log(err);
    });
}

function httpPost(url, body) {
    // Send a put request
    body = JSON.stringify(body);
    fetch(url, {
        method: "POST",
        body: body
    }).then(resp => {
        return resp.text();
    }).then(text => {
        output.innerHTML = text;
    })
}

function httpPut(url, body) {
    // Send a put request
    body = JSON.stringify(body);
    fetch(url, {
        method: "PUT",
        body: body
    }).then(resp => {
        return resp.text();
    }).then(text => {
        output.innerHTML = text;
    })
}

function httpDelete(url, body) {
    // Senda delete request
    console.log("DELETE");
}