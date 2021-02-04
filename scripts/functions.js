function openlb() {
    
    //var image = document.querySelectorAll(".slides img").getAttribute("src");
    
    document.getElementById("iViewer").style.display = "block";
    document.getElementById("iViewerimg").style.display = "block";
    document.getElementById("iViewerimg").setAttribute("src", image);
    }

    function closelb(){
        
        document.getElementById("iViewer").style.animationName = "fondFerme";
        document.getElementById("iViewerimg").style.animationName = "lightboxFerme";

        setTimeout(function() {
            document.getElementById("iViewer").style.display = "none";
            document.getElementById("iViewerimg").style.display = "none";
              }, 300);

       
    }

    function prendImg(element){
        var imgSrc = element.src;

        document.getElementById("iViewer").style.animationName = "fondOuvre";
        document.getElementById("iViewerimg").style.animationName = "lightboxOuvre";
        document.getElementById("iViewer").style.display = "flex";
        document.getElementById("iViewerimg").style.display = "block";
        document.getElementById("iViewerimg").setAttribute("src", imgSrc);
    }


    function openNav() {
        document.getElementById("navigationMobile").style.width = "30%";
        document.getElementById("boutonMobile").style.transform = "rotate(-90deg)";
      }
      
      /* Close/hide the sidenav */
      function closeNav() {
        document.getElementById("navigationMobile").style.width = "0";
        document.getElementById("boutonMobile").style.transform = "rotate(0deg)";
      }