//membuat teks ke halaman html 
const judul = document.getElementById('judul')
judul.innerText = "Java Script by Zointa ras bangun"



//membuat elemen html p
const newP = document.createElement('p');
const newPText = document.createTextNode('Judul 4 (dari java script)');
newP.appendChild(newPText);

//memasukkan elemen p kedalam id= 'container'
const divP = document.getElementById('container');
divP.appendChild(newP);




// menginisialisasikan batas penambahan
let i = 5

// fungsi ketika tombol + di klik maka paragrap akan bertambah
function tambahP (){
    if (i>10){
        alert('Maaf boleh diulangi lagi');
    }
    else {
        const newPs = document.createElement('p');
        const newPTexts = document.createTextNode('Judul ' + i + ' (dari java script)');
        newPs.appendChild(newPTexts);

        //memasukkan elemen p kedalam id= 'container'
        const divPs = document.getElementById('container');
        divPs.appendChild(newPs);
    }
    i++;

}
//menggunakan addeventlistener untuk eventhanler nya
const button = document.getElementById('tombol');
button.addEventListener('click', tambahP);