let dontOrder = [
    {
        name: "Asqar",
        email: "asqarabdusamatov2@gmail.com",
        phone: "+998 99 825 68 25",
        data: "08.06.2021",
        time: "17:00",
        people: 7,
        message: "dostimnig tugilgan kuni"
    }
]

function checkGuest() {
    let guest = document.getElementById('name').value;
    let temp = false;
    for (let i = 0; i < dontOrder.length; i++) {
        if (dontOrder[i].name === guest) {
            temp = true;
            if (dontOrder[i].people <= 20) {
                if (dontOrder[i].time === "09:00" || "00:00") {
                    alert('Hurmatli  ' + dontOrder[i].name + " siz yozilgansiz");
                }
            }
        }
    }
    guest = document.getElementById('name').value = "";
    if (temp === false) {
        alert("Siz yoqsiz")
    }
}


function register() {
    let newName = document.querySelector("#name").value;
    let newEmail = document.querySelector("#email").value;
    let newPhone = document.querySelector("#phone").value;
    let newData = document.querySelector("#date").value;
    let newTime = document.querySelector("#time").value;
    let newPeople = document.querySelector("#people").value;
    let newMessage = document.querySelector("#message").value;

    if (newName === "" || newEmail === "" || newPhone === "" || newData === "" || newTime === "" || newPeople === "" || newMessage === "") {
        let a = document.querySelector(".error-message");
        a.innerHTML = `<p style="color: #fff;  background: #ed3c0d; padding: 15px; font-weight: 600;">Malumotni toliq kriting</p>`
    } else {
        let NewPerson = {
            name: newName,
            email: newEmail,
            phone: newPhone,
            data: newData,
            time: newTime,
            people: newPeople,
            message: newMessage
        }
        dontOrder.push(NewPerson)
        let b = document.querySelector(".error-message");
        b.innerHTML = `<p style="color: #fff;  background: #18d26e; padding: 15px; font-weight: 600;">Siznig buyrtmangiz qabul qlindi</p>`
    }

    newName = document.querySelector("#name").value="";
    newEmail = document.querySelector("#email").value="";
    newPhone = document.querySelector("#phone").value="";
    newData = document.querySelector("#date").value="";
    newTime = document.querySelector("#time").value="";
    newPeople = document.querySelector("#people").value="";
    newMessage = document.querySelector("#message").value="";
}