function openlb() {
    
    //var image = document.querySelectorAll(".slides img").getAttribute("src");
    
    document.getElementById("iViewer").style.display = "block";
    document.getElementById("iViewerimg").style.display = "block";
    document.getElementById("iViewerimg").setAttribute("src", image);
    }

    function closelb(){
        document.getElementById("iViewer").style.display = "none";
        document.getElementById("iViewerimg").style.display = "none";
    }

    function prendImg(element){
        var imgSrc = element.src;

        document.getElementById("iViewer").style.display = "flex";
        document.getElementById("iViewerimg").style.display = "block";
        document.getElementById("iViewerimg").setAttribute("src", imgSrc);
    }