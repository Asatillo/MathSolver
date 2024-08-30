var MY_SCORE = 307;

var loc = (location.hash || "").substr(1);
loc = loc.replace(/[\?&].*/g, "");

function hackit(dataset, success) {
    var components = [];

    for (var i in dataset) {
        components.push(encodeURIComponent(i) + "=" + encodeURIComponent(dataset[i]));
    }

    fetch("/api/setScore", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: components.join("&")
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(data => {
            success(data);
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation:", error);
        });
}

hackit({
    data: loc,
    score: MY_SCORE || 0
}, function (a) {
    console.log("Success");
    console.log(a);
});
