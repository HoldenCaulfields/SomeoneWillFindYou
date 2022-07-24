
//1.CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = document.getElementById("img");

canvas.width = 556;
canvas.height = 626;

ctx.drawImage(img, 0, 0, 556, 626);


//2. EXECUTE INPUT -> color in map:
function changecolorcity (city) {
    if (city === "hanoi") {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(190, 100, 10, 0, 2 * Math.PI); //fill circle
        ctx.fill();

        //ctx.clearRect(100,110,20,20);
    }
    else {
        // ctx.fillStyle = "red";
        // ctx.beginPath();
        // ctx.arc(110, 120, 10, 0, 2 * Math.PI);
        // ctx.fill();

        ctx.clearRect(180,90,20,20);
    }
}

//4*. TEST POST FORM without app.post in server:
const address = document.getElementById('address');

address.addEventListener('change', (e) => {
    console.log(e.target.value);

    const data = {address: e.target.value};
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data) 
    }
    //post data address to server:
    fetch('/api2', options)
        .then(res => res.json())
        .then(data => {
            changecolorcity(data.address);
            text1.innerHTML = data.address;
        })
        .catch(err => console.error(err));
});



//3. Fetch API: 
// const inputname = document.getElementById('name');
// const inputaddress = document.getElementById('address');
// const text1 = document.getElementById('text1');

//     fetch('/api')
//         .then(res => res.json())
//         .then(data => {
//             changecolorcity(data.address);
//             text1.innerHTML = data.address;
//             inputname.value = data.username;
//             inputaddress.value = data.address;
//         })
//         .catch(err => console.error(err));

//Handle options in select button:
const options = document.getElementById('city');
const citys = ['An Giang','Bà Rịa - Vũng Tàu','Bắc Giang','Bắc Kạn','Bạc Liêu','Bắc Ninh','Bến Tre','Bình Định','Bình Dương','Bình Phước','Bình Thuận','Cà Mau','Cần Thơ','Cao Bằng','Đà Nẵng','Đắk Lắk','Đắk Nông','Điện Biên','Đồng Nai','Đồng Tháp','Gia Lai','Hà Giang','Hà Nam','Hà Nội','Hà Tĩnh','Hải Dương','Hải Phòng','Hậu Giang','Hòa Bình','Hưng Yên','Khánh Hòa','Kiên Giang','Kon Tum','Lai Châu','Lâm Đồng','Lạng Sơn','Lào Cai','Long An','Nam Định','Nghệ An','Ninh Bình','Ninh Thuận','Phú Thọ','Phú Yên','Quảng Bình','Quảng Nam','Quảng Ngãi','Quảng Ninh','Quảng Trị','Sóc Trăng','Sơn La','Tây Ninh','Thái Bình','Thái Nguyên','Thanh Hóa','Thừa Thiên Huế','Tiền Giang','TP Hồ Chí Minh','Trà Vinh','Tuyên Quang','Vĩnh Long','Vĩnh Phúc','Yên Bái'
];

console.log(citys[62]);
window.addEventListener("load", (e) => {
    citys.map( (item, index) => {
        options.innerHTML += "<option value="+index+">"+item+"</option>";
    } );
    
});