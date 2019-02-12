var lebenslauf = document.getElementById("header");
var bewerbung = document.getElementById("main");
var kontakts = document.getElementById("footer");
var buttons = document.querySelectorAll(".button")

var mnus = document.getElementsByClassName("menu_me");
console.log(mnus);

for (var i = 0; i < mnus.length; i++) {
    mnus[i].onclick = function (e) {
        var z = (e.target.id);
        if (z == "lebenslauf") {
            console.log(1);
            lebenslauf.style.right = "35%";
            lebenslauf.style.transform = 'rotate(0)';
            bewerbung.style.right = "0px";
            kontakts.style.right = "0px";

            bewerbung.style.transform = 'rotateY(-45deg) rotateX(10deg)';
            kontakts.style.transform = 'rotateY(-45deg) rotateX(10deg)';

        }

        if (z == "bewerbung") {
            console.log(2);
            bewerbung.style.right = "35%";
            bewerbung.style.transform = 'rotate(0)';
            lebenslauf.style.right = "0px";
            kontakts.style.right = "0px";

            lebenslauf.style.transform = 'rotateY(-45deg) rotateX(10deg)';
            kontakts.style.transform = 'rotateY(-45deg) rotateX(10deg)';
        }

        if (z == "kontakts") {
            console.log(3);
            kontakts.style.right = "35%";
            kontakts.style.transform = 'rotate(0)';
            bewerbung.style.right = "0px";
            lebenslauf.style.right = "0px";

            lebenslauf.style.transform = 'rotateY(-45deg) rotateX(10deg)';
            bewerbung.style.transform = 'rotateY(-45deg) rotateX(10deg)';

        }

        //        var ziel = e.target.dataset.name;
        //        console.log(ziel);
        ////        Show(ziel);
        //        if(e.target=="lebenslauf"){
        //            
        //           lebenslauf.style.display="none";
        //         

    }


}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (e) {
        
         for (let ee = 0; ee < buttons.length; ee++) {
             buttons[ee].style.left = "0px";
         }
        e.target.style.left = "70px";

    }

}

//mnus.addEventListener('click', function(e){
//    console.log(e.target);
//});
//this.style.transform = 'rotateX(' + e.pageY * 5 + 'deg) rotateY(' + -e.pageX * 5 + 'deg)';
