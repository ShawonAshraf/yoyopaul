
var numberOfClicks = 0;

function clkPaulClick() {
    numberOfClicks++;

    if (numberOfClicks == 1) {
        document.getElementById("statusHead").innerHTML = "ধুর বাল! ক্লিক ও করতে জানো না দেখি! লেইম!";
        document.getElementById("mainImg").src = "/images/paulApp.PNG";
    }
    if (numberOfClicks > 1) {
        document.getElementById("statusHead").innerHTML = "ভালই তো পারো! চালিয়ে যাও!";
        document.getElementById("mainImg").src = "/images/kupiyeApp.PNG";
        document.getElementById("clkPaul").innerHTML = "কুপিয়ে যাওওওওও তুমিইইই";
    }
}

function quitAppClick() {
    var score = numberOfClicks;
    var showMessage = "";
    var imageRef = document.getElementById("mainImg");

    if (score > 10) {
        showMessage = "কুপিয়ে তো দিলে! আমি তো বাঁশ খেয়ে যাচ্ছি।";
        imageRef.src = "/images/kupiyeApp.PNG";
    }
    else {
        showMessage = "নাহ তোমারে দিয়ে কিছু হবে না । হা লেইম!!!!!";
        imageRef.src = "/images/paulApp.PNG";
    }

    alert("Your Score is : " + score);
    document.getElementById("statusHead").innerHTML = showMessage;
}

