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

  document.getElementById("photoshop").addEventListener('mouseup',function () {
    document.getElementById("primary").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("ecranPhotoshop").style.display = "flex";
    document.getElementById("ecranPhotoshop").style.animation="popupOpen 0.2s"
  });

  // document.getElementById("illustrator").addEventListener('mouseup',function () {
  //   document.getElementById("primary").style.display = "none";
  //   document.getElementById("ecranIllustrator").style.display = "flex";
  //   document.getElementById("ecranIllustrator").style.animation="popupOpen 0.2s"
  // });

  document.getElementById("jeux").addEventListener('mouseup',function () {
    document.getElementById("primary").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("ecranJeux").style.display = "flex";
    document.getElementById("ecranJeux").style.animation="popupOpen 0.2s"
  });

  let boutons = document.getElementsByClassName('boutonCat');
  let ecranCategories = document.getElementsByClassName('ecranCategorie');

  for (let i = 0; i < boutons.length; i++) {
    boutons[i].onclick = fermeCat;
  }

  function fermeCat() {
    for (let i = 0; i < ecranCategories.length; i++) 
    {
      ecranCategories[i].style.animation="popupClose 0.3s"
      setTimeout(function() {
      ecranCategories[i].style.display = "none";
        }, 300);
    }

    document.getElementById("primary").style.display = "flex";
    document.getElementById("footer").style.display = "flex";

  }  
  

  //projets
  //last spark
  document.getElementById('lastSpark').addEventListener('mouseup',function () {
    document.getElementById("popupLastSpark").style.display = "flex";
    document.getElementById('listeProjetJeux').style.display = "none";
    document.getElementById('listePopJeux').style.display = "flex";
  });

  document.getElementById('boutonLS').addEventListener('mouseup',function () {
    document.getElementById('popupLastSpark').style.display = "none";
    document.getElementById("listeProjetJeux").style.display = "flex";
  });



  //tim 2020
  document.getElementById('TIM2020').addEventListener('mouseup',function () {
    document.getElementById("popupTIM2020").style.display = "flex";
    document.getElementById('listeProjetWeb').style.display = "none";
    document.getElementById('listePopWeb').style.display = "flex";
  });

  document.getElementById('boutonTIM').addEventListener('mouseup',function () {
    document.getElementById('popupTIM2020').style.display = "none";
    document.getElementById("listeProjetWeb").style.display = "flex";
  });


  //vieux four
  document.getElementById('VFM').addEventListener('mouseup',function () {
    document.getElementById("popupVFM").style.display = "flex";
    document.getElementById('listeProjetWeb').style.display = "none";
    document.getElementById('listePopWeb').style.display = "flex";
  });

  document.getElementById('boutonVFM').addEventListener('mouseup',function () {
    document.getElementById('popupVFM').style.display = "none";
    document.getElementById("listeProjetWeb").style.display = "flex";
  });



  //site last spark
  document.getElementById('SLS').addEventListener('mouseup',function () {
    document.getElementById("popupSLS").style.display = "flex";
    document.getElementById('listeProjetWeb').style.display = "none";
    document.getElementById('listePopWeb').style.display = "flex";
  });
  
  document.getElementById('boutonSLS').addEventListener('mouseup',function () {
    document.getElementById('popupSLS').style.display = "none";
    document.getElementById("listeProjetWeb").style.display = "flex";
  });


  //NIMH
  document.getElementById('NIMH').addEventListener('mouseup',function () {
    document.getElementById("popupNIMH").style.display = "flex";
    document.getElementById('listeProjetJeux').style.display = "none";
    document.getElementById('listePopJeux').style.display = "flex";
  });

  document.getElementById('boutonNIMH').addEventListener('mouseup',function () {
    document.getElementById('popupNIMH').style.display = "none";
    document.getElementById("listeProjetJeux").style.display = "flex";
  });

  //ASSASINE
    document.getElementById('ASSASINE').addEventListener('mouseup',function () {
      document.getElementById("popupASSASINE").style.display = "flex";
      document.getElementById('listeProjetJeux').style.display = "none";
      document.getElementById('listePopJeux').style.display = "flex";
    });
  
    document.getElementById('boutonASSASINE').addEventListener('mouseup',function () {
      document.getElementById('popupASSASINE').style.display = "none";
      document.getElementById("listeProjetJeux").style.display = "flex";
    });

   //Veille annonce
   document.getElementById('MCDO').addEventListener('mouseup',function () {
    document.getElementById("popupMCDO").style.display = "flex";
    document.getElementById('listeProjetPhoto').style.display = "none";
    document.getElementById('listePopPhoto').style.display = "flex";
  });

  document.getElementById('boutonMCDO').addEventListener('mouseup',function () {
    document.getElementById('popupMCDO').style.display = "none";
    document.getElementById("listeProjetPhoto").style.display = "flex";
  });

     //TUTO
     document.getElementById('TUTO').addEventListener('mouseup',function () {
      document.getElementById("popupTUTO").style.display = "flex";
      document.getElementById('listeProjetPhoto').style.display = "none";
      document.getElementById('listePopPhoto').style.display = "flex";
    });
  
    document.getElementById('boutonTUTO').addEventListener('mouseup',function () {
      document.getElementById('popupTUTO').style.display = "none";
      document.getElementById("listeProjetPhoto").style.display = "flex";
    });

     //Objets
     document.getElementById('OBJETS').addEventListener('mouseup',function () {
      document.getElementById("popupOBJETS").style.display = "flex";
      document.getElementById('listeProjetPhoto').style.display = "none";
      document.getElementById('listePopPhoto').style.display = "flex";
    });
  
    document.getElementById('boutonOBJETS').addEventListener('mouseup',function () {
      document.getElementById('popupOBJETS').style.display = "none";
      document.getElementById("listeProjetPhoto").style.display = "flex";
    });

         //Rovesciato
         document.getElementById('ROVE').addEventListener('mouseup',function () {
          document.getElementById("popupROVE").style.display = "flex";
          document.getElementById('listeProjetPhoto').style.display = "none";
          document.getElementById('listePopPhoto').style.display = "flex";
        });
      
        document.getElementById('boutonROVE').addEventListener('mouseup',function () {
          document.getElementById('popupROVE').style.display = "none";
          document.getElementById("listeProjetPhoto").style.display = "flex";
        });

  })();