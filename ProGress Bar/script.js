
  document.addEventListener("scroll", function (){
    // calculating scroll position vertically
    const scroll_pos = window.scrollY;
    const total_height = document.body.scrollHeight - window.innerHeight;
    const progress = (scroll_pos/total_height)*100;

    document.querySelector(".progress-bar").style.width=progress+"%";
  })