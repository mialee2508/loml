const envelope = document.getElementById("envelope");
const songBtn = document.getElementById("songBtn");

const photos = document.querySelectorAll(".photo");

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if(envelope.classList.contains("open")){

        setTimeout(()=>{
            songBtn.classList.add("show");
        },700);

        photos.forEach((photo,index)=>{

            setTimeout(()=>{
                photo.classList.add("show");
            },500 + index*300);

        });

    }else{

        songBtn.classList.remove("show");

        photos.forEach(photo=>{
            photo.classList.remove("show");
        });

    }

});