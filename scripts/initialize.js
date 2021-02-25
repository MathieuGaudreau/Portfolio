/**
  * Initialisation de ma page 
  *
  * @param 	Aucun
  * @return	Aucun
  */
 (function() {

  //categories
  document.getElementById("web").addEventListener('mouseup',function () {
    document.getElementById("primary").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("ecranWeb").style.display = "flex";
    document.getElementById("ecranWeb").style.animation="popupOpen 0.2s"
  });

  document.getElementById("creation").addEventListener('mouseup',function () {
    document.getElementById("primary").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("ecranCreation").style.display = "flex";
    document.getElementById("ecranCreation").style.animation="popupOpen 0.2s"
  });

   document.getElementById("projetRecherche").addEventListener('mouseup',function () {
     document.getElementById("primary").style.display = "none";
     document.getElementById("footer").style.display = "none";
     document.getElementById("ecranProjetRecherche").style.display = "flex";
     document.getElementById("ecranProjetRecherche").style.animation="popupOpen 0.2s"
   });

  document.getElementById("jeux").addEventListener('mouseup',function () {
    document.getElementById("primary").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("ecranJeux").style.display = "flex";
    document.getElementById("ecranJeux").style.animation="popupOpen 0.2s"
  });


  //projets
  //last spark
  document.getElementById('lastSpark').addEventListener('mouseup',function () {
    document.getElementById("popupLastSpark").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupLastSpark").style.animation="popupOpen 0.2s"
  });


  //tim 2020
  document.getElementById('TIM2020').addEventListener('mouseup',function () {
    document.getElementById("popupTIM2020").style.display = "flex";
    document.getElementById('listePopWeb').style.display = "flex";
    document.getElementById("popupTIM2020").style.animation="popupOpen 0.2s"
  });


  //vieux four
  document.getElementById('VFM').addEventListener('mouseup',function () {
    document.getElementById("popupVFM").style.display = "flex";
    document.getElementById('listePopWeb').style.display = "flex";
    document.getElementById("popupVFM").style.animation="popupOpen 0.2s"
  });

  //site last spark
  document.getElementById('SLS').addEventListener('mouseup',function () {
    document.getElementById("popupSLS").style.display = "flex";
    document.getElementById('listePopWeb').style.display = "flex";
    document.getElementById("popupSLS").style.animation="popupOpen 0.2s"
  });
  

  //NIMH
  document.getElementById('NIMH').addEventListener('mouseup',function () {
    document.getElementById("popupNIMH").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupNIMH").style.animation="popupOpen 0.2s"
  });


  //ASSASINE
  document.getElementById('ASSASINE').addEventListener('mouseup',function () {
    document.getElementById("popupASSASINE").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupASSASINE").style.animation="popupOpen 0.2s"
  });
  

   //Veille annonce
  document.getElementById('MCDO').addEventListener('mouseup',function () {
    document.getElementById("popupMCDO").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupMCDO").style.animation="popupOpen 0.2s"
  });


  //TUTO
  document.getElementById('TUTO').addEventListener('mouseup',function () {
    document.getElementById("popupTUTO").style.display = "flex";
     document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupTUTO").style.animation="popupOpen 0.2s"
  });
  

  //Objets
  document.getElementById('OBJETS').addEventListener('mouseup',function () {
    document.getElementById("popupOBJETS").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupOBJETS").style.animation="popupOpen 0.2s"
  });
  
  //Rovesciato
  document.getElementById('ROVE').addEventListener('mouseup',function () {
    document.getElementById("popupROVE").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupROVE").style.animation="popupOpen 0.2s"
  });
      

  //Bloodville
  document.getElementById('BLOOD').addEventListener('mouseup',function () {
    document.getElementById("popupBLOOD").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupBLOOD").style.animation="popupOpen 0.2s"
  });
        

  //Manor
  document.getElementById('MANOR').addEventListener('mouseup',function () {
    document.getElementById("popupMANOR").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupMANOR").style.animation="popupOpen 0.2s"
  });
            

  //Obelisque
    document.getElementById('OBE').addEventListener('mouseup',function () {
      document.getElementById("popupOBE").style.display = "flex";
      document.getElementById('listePopCreation').style.display = "flex";
      document.getElementById("popupOBE").style.animation="popupOpen 0.2s"
  });
      

  //Sous-Marin
  document.getElementById('SM').addEventListener('mouseup',function () {
    document.getElementById("popupSM").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupSM").style.animation="popupOpen 0.2s"
  });

  //Tempus Fugit
  document.getElementById('TF').addEventListener('mouseup',function () {
    document.getElementById("popupTF").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupTF").style.animation="popupOpen 0.2s"
  });

  //Tempus Fugit
  document.getElementById('TOKYO').addEventListener('mouseup',function () {
    document.getElementById("popupTOKYO").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupTOKYO").style.animation="popupOpen 0.2s"
  });

  //Semaine 1
  document.getElementById('Sem1').addEventListener('mouseup',function () {
    document.getElementById("popupSem1").style.display = "flex";
    document.getElementById('listePopProjet').style.display = "flex";
    document.getElementById("popupSem1").style.animation="popupOpen 0.2s"
  });
              
  document.getElementById("iViewer").addEventListener('mouseup', closelb);

  const images = document.querySelectorAll(".slides img");

  for (let i = 0; i < images.length; i++) 
  {
    images[i].addEventListener("mouseup", function() 
    {
      prendImg(this);
    });
  }


  const boutonsPop = document.querySelectorAll(".boutonPop");

  for (let i = 0; i < boutonsPop.length; i++) 
  {
    boutonsPop[i].addEventListener("mouseup",function () 
    {
      fermePop();
    });       
  }

const popup = document.querySelectorAll(".popup");

function fermePop() 
{
  for (let i = 0; i < popup.length; i++) 
  {
    popup[i].style.animation="popupClose 0.3s"
    setTimeout(function() 
    {
      popup[i].style.display = "none";
    }, 300);
  }              
}  


let boutonsCat = document.getElementsByClassName('boutonCat');
let ecranCategories = document.getElementsByClassName('ecranCategorie');

for (let i = 0; i < boutonsCat.length; i++) {
  boutonsCat[i].addEventListener("mouseup",function () 
  {
    fermeCat();
  });       
}

function fermeCat() 
{
  for (let i = 0; i < ecranCategories.length; i++) 
  {
    ecranCategories[i].style.animation="popupClose 0.3s ease-out"
    
    setTimeout(function() {
    ecranCategories[i].style.display = "none";
    
    }, 300);

  }
  document.getElementById("primary").style.display = "flex";

  if (screen.width > 1000) {
    document.getElementById("footer").style.display = "flex";
  }
  
  
}  

document.getElementById("boutonMobile").addEventListener("mouseup", openNav);
  
})();