let data = [
    {
        id: 1,
        name: "Osh",
        img: "https://i.ytimg.com/vi/OJUHFispPS0/maxresdefault.jpg",
        cost: "90 000 sum",
        food: "Choyhona palov",
        filter: "Starters"
    },
    {
        id: 2,
        name: "Chushvara",
        img: "https://pasta.uz/upload/products/lagman-1.jpg.png",
        cost: "60 000 sum",
        food: "Toshkentski chuchvara",
        filter: "Salads"
    },
    {
        id: 3,
        name: "Somsa",
        img: "https://i.ytimg.com/vi/R-9WcyDgKFc/mqdefault.jpg",
        cost: "70 000 sum",
        food: "Yallama somsasi",
        filter: "Starters"
    },
    {
        id: 4,
        name: "Shorva",
        img: "https://pasta.uz/upload/products/Shurpa-min.jpg",
        cost: "50 000 sum",
        food: "Toshkent Sorvasi",
        filter: "Salads"
    },
    {
        id: 5,
        name: "Kavob",
        img: "https://pasta.uz/upload/products/Schas%20mol%20guschti.png",
        cost: "35 000 sum",
        food: "Samarqand Kavobi",
        filter: "Starters"
    },
    {
        id: 6,
        name: "Non",
        img: "https://static.zarnews.uz/crop/0/9/736_736_80_09a852112f27abb1e17003be9eecb666.jpg?img=self&v=1586449629",
        cost: "10 000 sum",
        food: "Samarqnd Noni",
        filter: "Starters"
    },
    {
        id: 7,
        name: "Galupsi",
        img: "https://pasta.uz/upload/products/guzlama-assorti-400gr-350r-min.jpg",
        cost: "45 000 sum",
        food: "Galupsi yangi",
        filter: "Starters"
    },
    {
        id: 8,
        name: "Choy",
        img: "http://geografiya.uz/uploads/posts/2017-05/1495109264_qora-choy.jpg",
        cost: "5 000 sum",
        food: "Qora choy 95",
        filter: "Specialty"
    },
    {
        id: 9,
        name: "Choy",
        img: "http://static.xabar.uz/crop/9/7/250_145_95_977671775.jpeg",
        cost: "5 000 sum",
        food: "Ko'k Choy",
        filter: "Specialty"
    },
    {
        id: 10,
        name: "Garox Shorva",
        img: "https://fastly.4sqi.net/img/general/600x600/70474248_maJuLVLUqBfNNyt4uTnB71e2uMhqy-yzg9mkXLl2yb4.jpg",
        cost: "70 000 sum",
        food: "Garox Shorva",
        filter: "Salads"
    },
    {
        id: 11,
        name: "Dimlama",
        img: "https://apollo-olx.cdnvideo.ru/v1/files/o4x3dfvjghpk1-UZ/image;s=644x461",
        cost: "80 000 sum",
        food: "Dimlama Toshkentcha",
        filter: "Starters"
    },
    {
        id: 12,
        name: "Besh barmoq",
        img: "https://fastly.4sqi.net/img/general/200x200/51959685_dKAj3TQeUq3v7SrpBB5OmbrPR3x11YqMDDbK9EiEHlg.jpg",
        cost: "90 000 sum",
        food: "Besh barmoq Qozoqch",
        filter: "Starters"
    }
]


let row = document.getElementById("Menue")

function add() {
    let html;
    html = ``;
    data.map(el => {
        html += `
        <div class="col-lg-6 menu-item filter-starters">
            <img src=${el.img} class="menu-img" alt="">
            <div class="menu-content">
                <a href="#">${el.name}</a><span>${el.cost}</span>
            </div>
            <div class="menu-ingredients">${el.food}</div>
        </div>
        `
        row.innerHTML = html;
    })
}

add(data)
