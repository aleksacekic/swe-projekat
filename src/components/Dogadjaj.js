import React from 'react'
import { useState, useEffect } from 'react';
import HideShowMapa from './Hide&ShowMapa';
import Komentari from './Komentari';
import Reakcije from './Reakcije'
import moment from 'moment';
import { format, isAfter } from 'date-fns';
import { Link } from 'react-router-dom';
import $, { error } from 'jquery';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';


function Dogadjaj({ primljenDatum, primljenNaziv}) {
  // console.log(filtriraniDogadjaji);
  const google = window.google;
  const navigate = useNavigate();
//#region 
  



  
  useEffect(() => {
    $(document).ready(function() {
      $(".zzatvaranje > ul > li > a").on("click", function(){
        $(".post-popup.pst-pj").addClass("active");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".zzatvaranje > ul > li > a").on("click", function(){
        $(".post-popup.pst-pj").removeClass("active");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    $(".zzatvaranje > ul > li > a").on("click", function(){
        $(".post-popup.job_post").addClass("active");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".zzatvaranje > ul > li > a").on("click", function(){
        $(".post-popup.job_post").removeClass("active");
        $(".wrapper").removeClass("overlay");
        return false;
    });
    

    //  ============= POST PROJECT POPUP FUNCTION =========

    $(".post_project").on("click", function(){
        $(".post-popup.pst-pj").addClass("active");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".post-project > a").on("click", function(){
        $(".post-popup.pst-pj").removeClass("active");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= POST JOB POPUP FUNCTION =========

    $(".post-jb").on("click", function(){
        $(".post-popup.job_post").addClass("active");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".post-project > a").on("click", function(){
        $(".post-popup.job_post").removeClass("active");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= SIGNIN CONTROL FUNCTION =========

    $('.sign-control li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.sign-control li').removeClass('current');
        $('.sign_in_sec').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#"+tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= SIGNIN TAB FUNCTIONALITY =========

    $('.signup-tab ul li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.signup-tab ul li').removeClass('current');
        $('.dff-tab').removeClass('current');
        $(this).addClass('current animated fadeIn');
        $("#"+tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= SIGNIN SWITCH TAB FUNCTIONALITY =========

    $('.tab-feed ul li').on("click", function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab-feed ul li').removeClass('active');
        $('.product-feed-tab').removeClass('current');
        $(this).addClass('active animated fadeIn');
        $("#"+tab_id).addClass('current animated fadeIn');
        return false;
    });

    //  ============= COVER GAP FUNCTION =========

    var gap = $(".container").offset().left;
    $(".cover-sec > a, .chatbox-list").css({
        "right": gap
    });

    //  ============= OVERVIEW EDIT FUNCTION =========

    $(".overview-open").on("click", function(){
        $("#overview-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function(){
        $("#overview-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= EXPERIENCE EDIT FUNCTION =========

    $(".exp-bx-open").on("click", function(){
        $("#experience-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function(){
        $("#experience-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= EDUCATION EDIT FUNCTION =========

    $(".ed-box-open").on("click", function(){
        $("#education-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function(){
        $("#education-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= LOCATION EDIT FUNCTION =========

    $(".lct-box-open").on("click", function(){
        $("#location-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function(){
        $("#location-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= SKILLS EDIT FUNCTION =========

    $(".skills-open").on("click", function(){
        $("#skills-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function(){
        $("#skills-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= ESTABLISH EDIT FUNCTION =========

    $(".esp-bx-open").on("click", function(){
        $("#establish-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function(){
        $("#establish-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= CREATE PORTFOLIO FUNCTION =========

    $(".gallery_pt > a").on("click", function(){
        $("#create-portfolio").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function(){
        $("#create-portfolio").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  ============= EMPLOYEE EDIT FUNCTION =========

    $(".emp-open").on("click", function(){
        $("#total-employes").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function(){
        $("#total-employes").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });

    //  =============== Ask a Question Popup ============

    $(".ask-question").on("click", function(){
        $("#question-box").addClass("open");
        $(".wrapper").addClass("overlay");
        return false;
    });
    $(".close-box").on("click", function(){
        $("#question-box").removeClass("open");
        $(".wrapper").removeClass("overlay");
        return false;
    });


    //  ============== ChatBox ============== 


    $(".chat-mg").on("click", function(){
        $(this).next(".conversation-box").toggleClass("active");
        return false;
    });
    $(".close-chat").on("click", function(){
        $(".conversation-box").removeClass("active");
        return false;
    });

    //  ================== Edit Options Function =================


    $(".ed-opts-open").on("click", function(){
        $(this).next(".ed-options").toggleClass("active");
        return false;
    });




    //  ============ Notifications Open =============

    $(".not-box-open").on("click", function(){
        $(this).next(".notification-box").toggleClass("active");
    });

    // ============= User Account Setting Open ===========

    $(".user-info").on("click", function(){
        $(this).next(".user-account-settingss").toggleClass("active");
    });

    //  ============= FORUM LINKS MOBILE MENU FUNCTION =========

    $(".forum-links-btn > a").on("click", function(){
        $(".forum-links").toggleClass("active");
        return false;
    });
    $("html").on("click", function(){
        $(".forum-links").removeClass("active");
    });


    });
  }, []);

//#endregion
 

  
  //#region JAVASCRIPT
  // ZA OTVORI KOMENTAR OBJAVE
 

  const prikaziPopupFormu = (event, id) => {
    event.preventDefault();
    const overlay = document.getElementById("popup-overlay" + id);
    const form = document.getElementById("popup-form" + id);

    overlay.style.display = "block";
    form.style.display = "block";
  };

  const sakrijPopupFormu = (id) => {
    sakrijTekstOstalo();
    const overlay = document.getElementById("popup-overlay" + id);
    const form = document.getElementById("popup-form" + id);

    overlay.style.display = "none";
    form.style.display = "none";
  };

  const otkaziPrijavu = (id) => {
    sakrijPopupFormu(id);
  };

  const submitForm = (id) => {
    // Logika za obradu forme
    console.log("Odabrana opcija:", selectedOption);
    console.log("Unesen tekst (Ostalo):", tekstOstalo);

    setSelectedOption('');
    setTekstOstalo('');

    if (selectedOption === 'ostalo') {
      setShowFormOstalo(true);
    } else {
      setShowFormOstalo(false);
    }

    sakrijPopupFormu(id);
  };

  const prikaziPopup = (id) => {
    const popup = document.getElementById("popup");
    const overlay1 = document.getElementById("overlay1");

    popup.style.display = "block";
    overlay1.style.display = "block";
  };

  const zatvoriPopup = () => {
    const popup = document.getElementById("popup");
    const overlay1 = document.getElementById("overlay1");

    popup.style.display = "none";
    overlay1.style.display = "none";
  };

  const submitIprikazipopup = (id) => {
    submitForm(id);
    prikaziPopup(id);
  };



  // Dodali smo event listener na promenu odabira opcije
  // var options = document.querySelectorAll('input[name="opcija"]');
  // options.forEach(function (option) {
  //   option.addEventListener("change", function () {
  //     if (option.value !== "ostalo") {
  //       sakrijTekstOstalo();
  //     }
  //   });
  // });
  //#endregion

  const [dogadjaji, setDogadjaji] = useState([]);
  const [brojPosiljke, setBrojPosiljke] = useState(1);
  const [ukupnoElemenata, setUkupnoElemenata] = useState(0);

  const [brojPosiljkeDatum, setBrojPosiljkeDatum] = useState(1);
  const [ukupnoElemenataDatum, setUkupnoElemenataDatum] = useState(0);

  const [brojPosiljkeNaziv, setBrojPosiljkeNaziv] = useState(1);
  const [ukupnoElemenataNaziv, setUkupnoElemenataNaziv] = useState(0);
  const [trenutno, setTrenutno] = useState(0); //0 - HomePage  1 - Datum   2 - Naziv

  const [prikazaniDogadjaj, setPrikazaniDogadjaj] = useState(null);
  const [prikaziKomentare, setPrikaziKomentare] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);

  const [selectedOption, setSelectedOption] = useState('Nepozeljan dogadjaj');
  const [opis, setOpis] = useState('');
  const [tekstOstalo, setTekstOstalo] = useState('');
  const [showFormOstalo, setShowFormOstalo] = useState(false);

  const [IDucitanidogadjaji, setIDucitanidogadjaji] = useState([]); // ZA POTREBE PROSLEDJIVANJA ID-JEVA DOGADJAJA u Reakcije.js


  const [korisnik, setKorisnik] = useState(null);
  const [mojdatum, setmojdatum] = useState();


  function prikaziTekstOstalo() {
    setShowFormOstalo(true);
  }
  function sakrijTekstOstalo() {
    setShowFormOstalo(false);
  }

  const UcitajDalje = () => {
    if(trenutno === 0)
      setBrojPosiljke(prevBrojPosiljke => prevBrojPosiljke + 1);
    else if(trenutno === 1)
      setBrojPosiljkeDatum(prevBrojPosiljkeDatum => prevBrojPosiljkeDatum + 1);
    else if(trenutno === 2)
      setBrojPosiljkeNaziv(prevBrojPosiljkeNaziv => prevBrojPosiljkeNaziv + 1);
  }

  const refresujSve = async () => {
    await Promise.all([
      setBrojPosiljkeDatum(1),
      setUkupnoElemenataDatum(0),
      setBrojPosiljkeNaziv(1),
      setUkupnoElemenataNaziv(0),
      setDogadjaji([]),
    ]);
    //console.log("Pozvan je refresh");
  };

 
  useEffect(() => {
    const fetchClassic = async () => {
      fetchDogadjaji();
    }
    fetchClassic();
  }, [brojPosiljke]);


  useEffect(() => {
    const fetchDatum = async () => {
      await refresujSve();
      fetchDogPoDatum(primljenDatum);
    };

    fetchDatum();
  }, [primljenDatum]);


  useEffect(() => {
    const fetchNaziv = async () => {
      await refresujSve();
      fetchDogPoNaziv(primljenNaziv);
    };

    fetchNaziv();
  }, [primljenNaziv]);

  useEffect(() => {
    fetchDogPoDatum(primljenDatum);
  }, [brojPosiljkeDatum]) 

  useEffect(() => {
    fetchDogPoNaziv(primljenNaziv);
  }, [brojPosiljkeNaziv])


  const fetchDogadjaji = () => {
    //console.log("Usao sam u ClassicFetch");
    const url = `http://localhost:7186/Dogadjaj/VratiDogadjajeZaHomePage/${brojPosiljke}/${ukupnoElemenata}`;
    fetch(url, {
      method: 'GET',
      credentials: 'include',
    })
      .then(res => {
        if (res.status === 401){
          navigate('/')
        }
        else{
          return res.json();
        }
        
      })
      .catch(error =>{
        console.log("");
      })
      .then(data => {
        console.log(data);
        if (data.kraj === undefined) {
          if (brojPosiljke === 1)
          setDogadjaji(data.dogadjaji.map(dogadjaj => ({ ...dogadjaj, formattedDatum: moment(dogadjaj.datum_Objave).format("DD.MM.YYYY") })));
          else
          setDogadjaji(prevDogadjaji => [...prevDogadjaji, ...data.dogadjaji.map(dogadjaj => ({ ...dogadjaj, formattedDatum: moment(dogadjaj.datum_Objave).format("DD.MM.YYYY") }))]);


          setUkupnoElemenata(data.ukupno_elemenata);
          // sada dodato za potrebe Reakcije.js
          const dogadjajIds = data.dogadjaji.map(dogadjaj => dogadjaj.id);
          setIDucitanidogadjaji(prevIds => [...prevIds, ...dogadjajIds]);
        }
      }
      ).catch(error =>{
        console.log("");
      })
    setTrenutno(0);
    //console.log("Izlazim iz ClassicFetch");
  };




  const fetchDogPoDatum = (prosledjenDatum) => {
    //console.log("Usao sam u DatumFetch");
    if (primljenDatum.getTime() !== (new Date("2000-01-01")).getTime()) {
      const formattedDate = format(prosledjenDatum, 'yyyy-MM-dd');
      const url = `http://localhost:7186/Dogadjaj/VratiDogadjajePoDatumu/${formattedDate}/${brojPosiljkeDatum}/${ukupnoElemenataDatum}`;
      fetch(url, {
        method: 'GET',
        credentials: 'include',
      })
        .then(res => res.json())
        .then(data => {
          if (data.kraj === undefined) {
          if (brojPosiljkeDatum === 1)
          setDogadjaji(data.dogadjaji.map(dogadjaj => ({ ...dogadjaj, formattedDatum: moment(dogadjaj.datum_Objave).format("DD.MM.YYYY") })));
          else
          setDogadjaji(prevDogadjaji => [...prevDogadjaji, ...data.dogadjaji.map(dogadjaj => ({ ...dogadjaj, formattedDatum: moment(dogadjaj.datum_Objave).format("DD.MM.YYYY") }))]);

          setUkupnoElemenataDatum(data.ukupno_elemenata);

          const dogadjajIds = data.dogadjaji.map(dogadjaj => dogadjaj.id);
          setIDucitanidogadjaji(prevIds => [...prevIds, ...dogadjajIds]);
          }
        });
      setTrenutno(1);

    }
    //console.log("Izlazim iz DatumFetch");
  }

  const fetchDogPoNaziv = async (prosledjenNaziv) =>
    {

      if(primljenNaziv !== "default")
      { 
        console.log("Usao sam u NazivFetch:" +"Posiljka: " +brojPosiljkeNaziv +"  ukupno: "+ ukupnoElemenataNaziv);
        const url = `http://localhost:7186/Dogadjaj/VratiDogadjajePoNazivu/${prosledjenNaziv}/${brojPosiljkeNaziv}/${ukupnoElemenataNaziv}`;
        await fetch(url, {
          method: 'GET',
          credentials: 'include',
        })
        .then(res => res.json())
        .then(data => {
          if(data.kraj === undefined)
          {
            if (brojPosiljkeNaziv === 1)
              setDogadjaji(data.dogadjaji);
            else 
              setDogadjaji(prevDogadjaji => [...prevDogadjaji, ...data.dogadjaji]);

            setUkupnoElemenataNaziv(data.ukupno_elemenata);
          }
        });
        setTrenutno(2);
        console.log("Izlazim iz NazivFetch");
      }
    }

  // ZA KOMENTARE
  function otvoriDiv(event, dogadjajId) {
    event.preventDefault();
    if (prikazaniDogadjaj === dogadjajId) {
      setPrikaziKomentare(!prikaziKomentare);
    } else {
      setPrikaziKomentare(true);
      setPrikazaniDogadjaj(dogadjajId);
    }
  }

  // BRISANJE OBJAVE
  const obrisiObjavu = (id,index) => {
    const url = `http://localhost:7186/Dogadjaj/IzbrisiDogadjaj/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // sad se azurira stanje dogadjaja tako da se ukloni izbrisn dogadjaj
          setDogadjaji(prevDogadjaji => prevDogadjaji.filter(dogadjaj => dogadjaj.id !== id));
        }
      })
      .catch(error => {
        console.log('Doslo je do greske prilikom brisanja objave:', error);
      });
      setActiveIndex(null);
  };

  const toggleOptions = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Zatvori opciju ako je već otvorena
    } else {
      setActiveIndex(index); // Otvori opciju
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => { // ZA SLUCAJ DA NISTA NIJE SLEKTOVANO (da ne pukne)
    if (!selectedOption) {
      setSelectedOption('nepozeljan'); // Postavite podrazumevanu vrednost ako nijedno dugme nije označeno
    }
  }, [selectedOption]);

  const handleOpisChange = (event) => {
    setOpis(event.target.value);
  };

  const prijava = async (id,event) => {
    event.preventDefault();

    if (!selectedOption) {
      alert('Molimo odaberite razlog prijave.');
      return;
    }

    const apiUrl = `http://localhost:7186/Pr_dog/PrijaviDogadjaj/${id}`;
    let razlogUrl = `http://localhost:7186/Razlog/KreirajRazlog/${id}/${selectedOption}/${opis}`;
    if (selectedOption === "ostalo" && opis === "") {
      razlogUrl += "bezOpisa";
    }

    if (selectedOption !== "ostalo") {
      razlogUrl += "nema"; // da stavi nema na opis ako je bilo sta drugo selektovano osim OSTALO
    }
    

    try {
      const response1 = await fetch(apiUrl, {
        method: 'POST',
        credentials: 'include',
      });
      console.log(response1);

      if(response1.ok){
        console.log("sve okej brt")
      }
      if (!response1.ok) {
        console.log('Greska prilikom slanja prijave objave.');
      }
      if(response1.status === 401)
      {
        navigate('/')
      }

      
        const response2 = await fetch(razlogUrl, {
          method: 'POST',
        });
        console.log(response2);
        if (!response2.ok) {
          
          console.log('Greška prilikom slanja razloga prijave.');
        }
      

      // Resetuj polja nakon uspešnog slanja
      setSelectedOption('');
      setOpis('');
      //alert('Objava je uspesno prijavljena.');

    } catch (error) {
      console.error(error);
      //alert('Doslo je do greske prilikom prijave objave.');
    }
  };

  useEffect(() => {
    ucitajKorisnika();
  }, []);

  const formatirajDatum = (datum) => {
    return moment(datum).format('DD.MM.YYYY');
  };
  
  const ucitajKorisnika = () => {
    const korisnik_Id = Cookies.get('userID');
    const url = `http://localhost:7186/Korisnik/VratiKorisnika_ID/${korisnik_Id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.datum_rodjenja);
        const formatiranDatum = formatirajDatum(data.datum_rodjenja);
        data.datumrodjenja = formatiranDatum;
        console.log(formatiranDatum);
        setKorisnik(data);
        setmojdatum(formatiranDatum);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div>
      {dogadjaji.map((dogadjaj,index) => (
        <div className="post-bar" key={dogadjaj.id}>
          <div className="post_topbar">
            <div className="usy-dt">
            {korisnik ? (
                              <img
                              className="profilnaslikaobjava"
                              src={dogadjaj.slikaKorisnika ? `http://localhost:7186/resources/${dogadjaj.slikaKorisnika}` : "http://via.placeholder.com/50x50"}
                       />
                            ) : (
                              <p>Korisnik nije dostupan</p>
                            )}
            
              <div className="usy-name">
                <h3>@{dogadjaj.userName_Kreatora}</h3>
                <span><img src="images/clock.png" />{dogadjaj.formattedDatum}</span>
              </div>
            </div>
            {/* <div className={`ed-opts ${activeIndex === index ? 'active' : ''}`}>
              <a className="ed-opts-open" onClick={() => toggleOptions(index)}><i className="la la-ellipsis-v" /></a>
              <ul className={`ed-options ${activeIndex === index ? 'active' : ''}`}>
                <li><a className='opcijeobjava' onClick={() => obrisiObjavu(dogadjaj.id)}>Obrisi objavu</a></li>
              </ul>
            </div> */}
          </div>
          <div className="job_descp">
            <h3>{dogadjaj.naslov}</h3>
            <ul className="job-dt">
              <li><a href="#">{dogadjaj.kategorija}</a></li>
              <li><span>{new Date(dogadjaj.datum_Dogadjaja).toLocaleDateString()} od {dogadjaj.vreme_pocetka}</span></li>
            </ul>
            <p>{dogadjaj.opis}</p>
            {/* SLIKA DOGADJAJA */}
            {/* <img src={dogadjaj.dogadjajImage} className="rounded float-left dogadjaj-slika" /> */}
            {dogadjaj.dogadjajImage && (
              <img src={`http://localhost:7186/resources/${dogadjaj.dogadjajImage}`} className="rounded float-left dogadjaj-slika" />
            )}
            {/* MAPA POCETAK */}
            <HideShowMapa
              latitude={dogadjaj.x}
              longitude={dogadjaj.y}
            />
            {/* POCETAK REAKCIJE */}
            <Reakcije dogadjaj_Id={dogadjaj.id} IDucitanidogadjaji={IDucitanidogadjaji}/>
            {/* KRAJ REAKCIJE */}
            {/* MAPA KRAJ */}
          </div>
          <div className="job-status-bar">
            <ul className="like-com d-flex">
              <li className="komentardiv" onClick={(event) => otvoriDiv(event, dogadjaj.id)}>
                <img src="images/com.png" className="com-slika" />
                <a href="#" className="com">Komentar</a>
              </li>
              {/* <li className="posaljidiv">
                <img src="images/share1.png" />
                <a href="#" className="share">Posalji prijatelju</a>
              </li> */}
              <li className="prijavidiv" onClick={(event) => prikaziPopupFormu(event, dogadjaj.id)}>
                <img src="images/report17.png" />
                <a href="#" className="report-to-admin">Prijavi objavu</a>
              </li>
              <div id={"popup-overlay"+ dogadjaj.id} className="popup-overlay" />
              <div id={"popup-form"+ dogadjaj.id} className="popup-form">
                {/* HTML kod forme */}
                <div className="form-options">
                  <label>
                    <input type="radio" name="opcija" defaultValue="nepozeljan" onChange={handleOptionChange} defaultChecked/> Nepozeljan sadrzaj
                  </label>
                  <label>
                    <input type="radio" name="opcija" defaultValue="nasilje" onChange={handleOptionChange} /> Nasilje
                  </label>
                  <label>
                    <input type="radio" name="opcija" defaultValue="terorizam" onChange={handleOptionChange} /> Terorizam
                  </label>
                  <label>
                    <input type="radio" name="opcija" defaultValue="govor_mrznje" onChange={handleOptionChange} /> Govor mrznje
                  </label>
                  <label>
                    <input type="radio" name="opcija" defaultValue="lazne_informacije" onChange={handleOptionChange} /> Lazne informacije
                  </label>
                  <label>
                    <input type="radio" name="opcija" defaultValue="uznemiravanje" onChange={handleOptionChange} /> Uznemiravanje
                  </label>
                  <label>
                    <input type="radio" name="opcija" defaultValue="ostalo" onChange={handleOptionChange}  onClick={prikaziTekstOstalo} /> Ostalo
                  </label>
                </div>
                {selectedOption === 'ostalo' && (
                  <div id="form-ostalo" className="form-ostalo">
                    <label htmlFor="tekst-ostalo">Opisite nam razlog prijave:</label>
                    <textarea id="tekst-ostalo" name="tekst-ostalo" rows={3} value={opis} onChange={handleOpisChange} />
                  </div>
                )}
                <div className="form-buttons">
                  <button className="btn-otkazi" onClick={() => otkaziPrijavu(dogadjaj.id)}> Otkazi</button>
                  <button className="btn-prijavi" onClick={(event) => { prijava(dogadjaj.id, event); submitIprikazipopup(dogadjaj.id); }}>Prijavi</button>
                </div>

              </div>
              <div id="popup" className="popup">
                <span className="close" onClick={zatvoriPopup}>×</span>
                <p>Uspesno ste prijavili objavu koja krsi pravila zajednice. Administrator ce uskoro pregledati vasu prijavu. Hvala!</p>
              </div>
              <div id="overlay1" className="overlay1" />
            </ul>
          </div>
          {/* DEO ZA KOMENTARE ! ! !  */}
          {prikaziKomentare && prikazaniDogadjaj === dogadjaj.id && (
            <div className="comment-section">
              <Komentari dogadjajId={dogadjaj.id} prikazaniDogadjaj={prikazaniDogadjaj} korisnikovaSlika={korisnik.korisnikImage}/>
            </div>)}
        </div>))}
      <button className='ucitajjosdogadjaja' onClick={() => UcitajDalje()}>Ucitaj jos dogadjaja...</button>
    </div>
  );

}

export default Dogadjaj