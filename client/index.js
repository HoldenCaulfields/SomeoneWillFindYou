
//1.CANVAS
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = document.getElementById("img");

canvas.width = 556;
canvas.height = 626;

ctx.drawImage(img, 0, 0, 556, 626);

//clear background --> to transparent:
/* function cleanbackground () {
    for(let i=0; i<560; i++) {
        for(let j=0; j<630; j++) {
            if (ctx.getImageData(i,j,1,1).data[0] > 245 
            ) {
                ctx.clearRect(i,j,1,1);
            }
        }
    }
} */
//cleanbackground();


//2. function to change color on map:
const colorcitys = [
    [165, 530],
    [240, 515],
    [210, 90],
    [190,60],
    [190,548],
    [200,110],
    [200,540],
    [300,380],
    [230,490],
    [230,480],
    [267,500],
    [165,570],
    [180,540],
    [190,40],
    [253,300],
    [270,420],
    [270,450],
    [93,77],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60],
    [190,60]
]
function changecolorcity (city) {
    ctx.drawImage(img, 0, 0, 556, 626); //no more cleancolor function
    //cleanbackground(); //clean background

    ctx.fillStyle = "rgb(255, 94, 0)";
    ctx.beginPath();
    ctx.arc(colorcitys[city][0], colorcitys[city][1], 10, 0, 2 * Math.PI); //fill circle
    ctx.fill();
}
// function cleancolor(city) {
//     ctx.clearRect(colorcitys[city][0]-10, colorcitys[city][1]-10, 20, 20);
// }


//3. HANDLE Citys to change colors on MAP:
//Handle options in select button:
const options = document.getElementById('city');
const citys = ['An Giang','Bà Rịa - Vũng Tàu','Bắc Giang','Bắc Kạn','Bạc Liêu','Bắc Ninh','Bến Tre','Bình Định','Bình Dương','Bình Phước','Bình Thuận','Cà Mau','Cần Thơ','Cao Bằng','Đà Nẵng','Đắk Lắk','Đắk Nông','Điện Biên','Đồng Nai','Đồng Tháp','Gia Lai','Hà Giang','Hà Nam','Hà Nội','Hà Tĩnh','Hải Dương','Hải Phòng','Hậu Giang','Hòa Bình','Hưng Yên','Khánh Hòa','Kiên Giang','Kon Tum','Lai Châu','Lâm Đồng','Lạng Sơn','Lào Cai','Long An','Nam Định','Nghệ An','Ninh Bình','Ninh Thuận','Phú Thọ','Phú Yên','Quảng Bình','Quảng Nam','Quảng Ngãi','Quảng Ninh','Quảng Trị','Sóc Trăng','Sơn La','Tây Ninh','Thái Bình','Thái Nguyên','Thanh Hóa','Thừa Thiên Huế','Tiền Giang','TP Hồ Chí Minh','Trà Vinh','Tuyên Quang','Vĩnh Long','Vĩnh Phúc','Yên Bái'
];

window.addEventListener("load", (e) => {
    citys.map( (item, index) => {
        options.innerHTML += "<option value="+index+">"+item+"</option>";
    } );
    
});

//Handle change colors on map:
const city = document.getElementById('city');
//let prev = 0;
var username = '';
var address = '';  /////====> get address value ->> post data in .5.
var searchdata = [];

city.addEventListener('change', (e) => {
    let cityindex = e.target.value;
    address = citys[cityindex];
    postdata();
    //cleancolor(prev);
    changecolorcity(cityindex);
    //prev = cityindex;
    
});



//4. Handle Search input -> change result: ADD and DELETE:
const searchinput = document.getElementById('search-input');
const searchresult = document.getElementById('search-result');

//ADD:
searchinput.addEventListener("change", (e) => {
    searchresult.innerHTML += "<span class='span'>"+ e.target.value +"</span>" ;
    searchdata.push(e.target.value); ////====> update data ->>> send to server
    postdata();
});
//DELETE: (and update data hoppies)
searchresult.addEventListener("click", (e) => {
    e.target.remove();
    
    searchdata =[];
    for (let i=0; i<searchresult.childElementCount; i++) { 
        searchdata.push(searchresult.childNodes[i].innerHTML);  ////====> update data ->>> send to server
    }

    postdata();
});



//5.Send data to server:
function postdata() {
    const data = {
        username: username,
        address: address,
        hoppies: searchdata
    };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(data)
    };
    fetch('/user', options);
}
//post:
const inputname = document.getElementById('name');
inputname.addEventListener('change', (e) => {
    username = e.target.value
    postdata();
});



//5. Fetch API: 
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

