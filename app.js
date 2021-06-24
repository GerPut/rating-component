const stars = document.querySelectorAll(".stars")
const message = document.querySelector(".ptext")

for (let i = 0; i < stars.length; i++) {

    stars[i].starVal = (i + 1);
    ["click", "mouseover", "mouseout"].forEach(function (e) {
        stars[i].addEventListener(e, rateStar);

    })
}


function rateStar(e) {
    console.log(this.starVal)  //Gives the value 1 or 2 or 3 of the star "this"
    let eventType = e.type;
    let starVal = this.starVal
    if (eventType === "click") {
        if (starVal > 0) {
            message.innerHTML = `You left a ${starVal} star rating.`
        }
    }

    stars.forEach(function (element, index) {
        if (eventType === "click") {
            if (index < starVal) {
                element.classList.add("yellow");
            } else {
                element.classList.remove("yellow");
            }
        }
        if (eventType === "mouseover") {
            if (index < starVal) {
                element.classList.add("pink");
            } else {
                element.classList.remove("pink");
            }
        }
        if (eventType === "mouseout") {
            element.classList.remove("pink")
        }
    })
}



