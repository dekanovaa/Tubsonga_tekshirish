

// SONNI TUB YOKI TUB SON EMASLIGIGA TEKSHIRISH


function tekshirish() { //tekshirish nomli funksiya ochamiz

  const n = parseInt(document.getElementById("number").value);  //inputni qiymatini olish uchun id orqali o'zgaruvchiga tenglaymiz
  const natijasi = document = document.getElementById("natija");  //natija chiquvchi tegni ham id orqali o'zgaruvchiga tenglab olamiz

  if (isNaN(n)) {  //inputning qiymatini son ekanligiga tekshiradi
    natijasi.textContent = "Iltimos, son kiriting!";  // textContent  bu JavaScriptda DOM (Document Object Model) elementining ichidagi matnni olish yoki o'zgartirish uchun ishlatiladigan xususiyatdir.
    return;
}

if (n <= 1){
  natijasi.textContent = "Tub son emas"; // 1 va 1 dan kichik sonlar tub hisoblanmaydi
  return;
}

let isPrime = true;   // isPrime avval true qiymat oladi ya'ni sonni tub deb qabul qiladi va keyin uni tekshiradi

for (let i=2; i<= Math.sqrt(n); i++) {  //for sikli n ning kvadrat ildizigacha aylanadi,tub songa tekshirish qoidasiga ko'ra
  if( n% i === 0) {   // qoldiqli bo'lishga tekshirish
    isPrime = false;  // agar n sonini i songa bo'lganda qoldiq 0 bo'lsa demak uning bo'luvchisi bor degani bu esa tub emasligini bildiradi
    break;   // agar tub son emasligi aniqlansa break siklni to'xtatadi 

  }

}

if(isPrime) {
  natijasi.textContent = `${n} tub son`;    //isaprime true bo'lsa tub son degan natija ekranda chiqadi
}
else{
  natijasi.textContent = `${n} tub son emas`;  // aksincha bo'lsa tub son emas yozuvi chiqadi
}

}

  













  
  






