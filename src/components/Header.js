import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import moment from 'moment';


function Header() {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [korisnik, setKorisnik] = useState(null);
  const [mojdatum, setmojdatum] = useState();



  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClickOutside = () => {
    setIsMenuOpen(false);
  };
  
  

  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef();

  function prikaziFormu() {
    var forma = document.querySelector('.notifikacije-forma');
    forma.style.display = 'flex';
  }

  

  async function handleSearchSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`https://localhost:7186/Korisnik/VratiKorisnikeSearch/${searchValue}`);
      const data = await response.json();
      console.log(response);
      console.log(data);
      if (data.kraj === 'KRAJ') {
        setSearchResults([]);
      } else {
        setSearchResults(data);
      }
    } catch (error) {
      console.error('Greška prilikom pretrage:', error);
    }
  }

  function handleClickOutside(event) {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchResults([]);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    async function searchUsers() {
      if (searchValue === '') {
        setSearchResults([]);
        return;
      }

      try {
        const response = await fetch(`https://localhost:7186/Korisnik/VratiKorisnikeSearch/${searchValue}`);
        const data = await response.json();
        if (data.kraj === 'KRAJ') {
          setSearchResults([]);
        } else {
          setSearchResults(data);
        }
      } catch (error) {
        console.error('Greška prilikom pretrage:', error);
      }
    }

    searchUsers();
  }, [searchValue]);

  useEffect(() => {
    ucitajKorisnika();
  }, []);

  const formatirajDatum = (datum) => {
    return moment(datum).format('DD.MM.YYYY');
  };
  
  const ucitajKorisnika = () => {
    const korisnik_Id = 1;
    const url = `https://localhost:7186/Korisnik/VratiKorisnika_ID/${korisnik_Id}`;
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
      <header>
        <div className="container">
          <div className="header-data">
            <div className="logo">
            <Link to="/pocetna"><a href="index.html"><img src="images/logosajt(4).ico" /></a></Link>
              
            </div>
            <div className="search-bar" ref={searchRef}>
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  autoComplete="off"
                />
                <button type="submit"><i className="la la-search" /></button>
                {/* Prikaz rezultata pretrage */}
                {searchResults.length > 0 && (
                  <div className="search-results">
                    <ul className="search-results-list">
                      {searchResults.map((result) => (
                        <li key={result.ID} className="search-result-item">
                          <div className='search-podaci'>
                            <span className='prvispansearch'>@{result.korisnicko_Ime}</span>
                            <span>{result.ime} {result.prezime}</span>
                          </div>
                          
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </form>
            </div>
            <nav className={isMenuOpen ? 'active' : ''} onClick={handleMenuClickOutside}>
              <h3 className="odeljcihamburgermenu" style={{ display: 'none' }}>Odeljci</h3>
              <ul>
                <li>
                  <a style={{ display: 'block' }}>
                    <span><img src="images/icon1.png" /></span>
                    <Link to="/pocetna">Pocetna</Link>
                  </a>
                </li>
                <li>
                  <a>
                    <span><img src="images/icon4.png" /></span>
                    <Link to="/profil">Profil</Link>
                  </a>
                </li>
                <li>
                  <a href="#" className="not-box-open">
                    <span><img src="images/icon6.png" /></span>
                    Poruke
                  </a>
                </li>
                <li>
                  <a href="#" className="not-box-open notifikacije-u-hederu" onClick={prikaziFormu} style={{ display: 'none' }}>
                    <span><img src="images/icon7.png" /></span>
                    Notifikacije
                  </a>
                </li>
              </ul>
            </nav>
            <div className="menu-btn">
            <a href="#" onClick={handleMenuToggle}><i className="fa fa-bars" /></a>
            </div>
            <div className="user-account">
            {korisnik ? (
              <div className="user-info">
                <img className="profilnaslikaheader"
                                    src={korisnik.korisnikImage ? `https://localhost:7186/resources/${korisnik.korisnikImage}` : "http://via.placeholder.com/50x50"} />
                <a href="#">{korisnik.ime}</a>
                <i className="la la-sort-down" />
              </div>) : (
                              <p>Korisnik nije dostupan</p>
                            )}
              <div className="user-account-settingss">         
                <h3>Podesavanja</h3>
                <ul className="us-links">
                  <li><a href="profile-account-setting.html">Podesavanja profila</a></li>
                  {/* <li><a href="#">Privacy</a></li>
                  <li><a href="#">Faqs</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li> */}
                </ul>
                <h3 className="tc"><a href="sign-in.html">Logout</a></h3>
              </div>
            </div>
          </div>
        </div>
      </header>


    </div>
  );
}

export default Header;
