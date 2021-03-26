/**
  * Initialisation de ma page 
  *
  * @param 	Aucun
  * @return	Aucun
  */
(function () {

  //categories
  document.getElementById("web").addEventListener('mouseup', function () {
    document.getElementById("primary").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("ecranWeb").style.display = "flex";
    document.getElementById("ecranWeb").style.animation = "catOpen 0.3s"
    document.getElementById("categories").style.height = "100%";
  });

  document.getElementById("creation").addEventListener('mouseup', function () {
    document.getElementById("primary").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("ecranCreation").style.display = "flex";
    document.getElementById("ecranCreation").style.animation = "catOpen 0.3s"
    document.getElementById("categories").style.height = "100%";
  });

  document.getElementById("projetRecherche").addEventListener('mouseup', function () {
    document.getElementById("primary").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("ecranProjetRecherche").style.display = "flex";
    document.getElementById("ecranProjetRecherche").style.animation = "catOpen 0.3s"
    document.getElementById("categories").style.height = "100%";
  });

  document.getElementById("jeux").addEventListener('mouseup', function () {
    document.getElementById("primary").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("ecranJeux").style.display = "flex";
    document.getElementById("ecranJeux").style.animation = "catOpen 0.3s"
    document.getElementById("categories").style.height = "100%";
  });


  //projets
  //last spark
  document.getElementById('lastSpark').addEventListener('mouseup', function () {
    document.getElementById("popupLastSpark").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupLastSpark").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //tim 2020
  document.getElementById('TIM2020').addEventListener('mouseup', function () {
    document.getElementById("popupTIM2020").style.display = "flex";
    document.getElementById('listePopWeb').style.display = "flex";
    document.getElementById("popupTIM2020").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //vieux four
  document.getElementById('VFM').addEventListener('mouseup', function () {
    document.getElementById("popupVFM").style.display = "flex";
    document.getElementById('listePopWeb').style.display = "flex";
    document.getElementById("popupVFM").style.animation = "popOpen 0.3s";
    fermeListe();
  });

  //site last spark
  document.getElementById('SLS').addEventListener('mouseup', function () {
    document.getElementById("popupSLS").style.display = "flex";
    document.getElementById('listePopWeb').style.display = "flex";
    document.getElementById("popupSLS").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //NIMH
  document.getElementById('NIMH').addEventListener('mouseup', function () {
    document.getElementById("popupNIMH").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupNIMH").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //ASSASINE
  document.getElementById('ASSASINE').addEventListener('mouseup', function () {
    document.getElementById("popupASSASINE").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupASSASINE").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //Veille annonce
  document.getElementById('MCDO').addEventListener('mouseup', function () {
    document.getElementById("popupMCDO").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupMCDO").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //TUTO
  document.getElementById('TUTO').addEventListener('mouseup', function () {
    document.getElementById("popupTUTO").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupTUTO").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //Objets
  document.getElementById('OBJETS').addEventListener('mouseup', function () {
    document.getElementById("popupOBJETS").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupOBJETS").style.animation = "popOpen 0.3s";
    fermeListe();
  });

  //Rovesciato
  document.getElementById('ROVE').addEventListener('mouseup', function () {
    document.getElementById("popupROVE").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupROVE").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //Bloodville
  document.getElementById('BLOOD').addEventListener('mouseup', function () {
    document.getElementById("popupBLOOD").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupBLOOD").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //Manor
  document.getElementById('MANOR').addEventListener('mouseup', function () {
    document.getElementById("popupMANOR").style.display = "flex";
    document.getElementById('listePopJeux').style.display = "flex";
    document.getElementById("popupMANOR").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //Obelisque
  document.getElementById('OBE').addEventListener('mouseup', function () {
    document.getElementById("popupOBE").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupOBE").style.animation = "popOpen 0.3s";
    fermeListe();
  });


  //Sous-Marin
  document.getElementById('SM').addEventListener('mouseup', function () {
    document.getElementById("popupSM").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupSM").style.animation = "popOpen 0.3s";
    fermeListe();
  });

  //Tempus Fugit
  document.getElementById('TF').addEventListener('mouseup', function () {
    document.getElementById("popupTF").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupTF").style.animation = "popOpen 0.3s";
    fermeListe();
  });

  //TTokyo
  document.getElementById('TOKYO').addEventListener('mouseup', function () {
    document.getElementById("popupTOKYO").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupTOKYO").style.animation = "popOpen 0.3s";
    fermeListe();
  });

  //JKM
  document.getElementById('JKM').addEventListener('mouseup', function () {
    document.getElementById("popupJKM").style.display = "flex";
    document.getElementById('listePopCreation').style.display = "flex";
    document.getElementById("popupJKM").style.animation = "popOpen 0.3s";
    fermeListe();
  });

  //Semaine 1
  document.getElementById('Sem1').addEventListener('mouseup', function () {
    document.getElementById("popupSem1").style.display = "flex";
    document.getElementById('listePopProjet').style.display = "flex";
    document.getElementById("popupSem1").style.animation = "popOpen 0.3s";
    fermeListe();
  });

  document.getElementById("iViewer").addEventListener('mouseup', closelb);

  const images = document.querySelectorAll(".slides img");

  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseup", function () {
      prendImg(this);
    });
  }


  const boutonsPop = document.querySelectorAll(".boutonPop");

  for (let i = 0; i < boutonsPop.length; i++) {
    boutonsPop[i].addEventListener("mouseup", function () {
      fermePop();
    });
  }

  const popup = document.querySelectorAll(".popup");

  function fermePop() {
    for (let i = 0; i < popup.length; i++) {
      popup[i].style.animation = "popClose 0.3s";
      setTimeout(function () {
        popup[i].style.display = "none";
      }, 300);
    }
    OuvreListe()
  }


  let boutonsCat = document.getElementsByClassName('boutonCat');
  let ecranCategories = document.getElementsByClassName('ecranCategorie');

  for (let i = 0; i < boutonsCat.length; i++) {
    boutonsCat[i].addEventListener("mouseup", function () {
      fermeCat();
    });
  }

  function fermeCat() {
    for (let i = 0; i < ecranCategories.length; i++) {
      ecranCategories[i].style.animation = "catClose 0.3s";

      setTimeout(function () {
        ecranCategories[i].style.display = "none";

      }, 300);

    }
    document.getElementById("primary").style.display = "flex";
    document.getElementById("categories").style.height = "0%";
    if (screen.width > 1000) {
      document.getElementById("footer").style.display = "flex";
    }


  }

  document.getElementById("boutonMobile").addEventListener("mouseup", openNav);


  function fermeListe() {
    let ecranCat = document.querySelectorAll(".ecranCat");
    let listeProjet = document.querySelectorAll(".listeProjet");
    let listePop = document.querySelectorAll(".listePop");
    for (let i = 0; i < ecranCat.length; i++) {
      ecranCat[i].style.display = "none";
    }
    for (let i = 0; i < listeProjet.length; i++) {
      listeProjet[i].style.display = "none";
    }

    for (let i = 0; i < listePop.length; i++) {
      listePop[i].style.display = "flex";
    }
  }

  function OuvreListe() {
    let ecranCat = document.querySelectorAll(".ecranCat");
    let listeProjet = document.querySelectorAll(".listeProjet");
    let listePop = document.querySelectorAll(".listePop");
    for (let i = 0; i < ecranCat.length; i++) {
      ecranCat[i].style.display = "flex";
    }

    for (let i = 0; i < listeProjet.length; i++) {
      listeProjet[i].style.display = "flex";
    }

    for (let i = 0; i < listePop.length; i++) {
      listePop[i].style.display = "none";
    }
  }

})();