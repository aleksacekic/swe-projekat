import React from 'react';
import { useEffect, useState } from 'react';

function Komentari({ dogadjajId, prikazaniDogadjaj }) {

  const [komentari, setKomentari] = useState([]);
  const [noviKomentar, setNoviKomentar] = useState('');
  const [izmenjenKomentar, setIzmenjenKomentar] = useState('');
  const [izabraniKomentarId, setIzabraniKomentarId] = useState(null);
  const [izmenjenTekstKomentara, setIzmenjenTekstKomentara] = useState('');

  // GET KOMENTARA
  useEffect(() => {
    fetchKomentari();
  }, [dogadjajId]);

  const fetchKomentari = async () => {
    try {
      const response = await fetch(`https://localhost:7186/Komentar/VratiKomentare/${dogadjajId}`);
      //console.log(response);
      if (response.ok) {
        const komentari = await response.json();
        //console.log(komentari);
        setKomentari(komentari);
      } else {
        console.error('Zahtev nije uspeo!');
      }
    } catch (error) {
      console.error('Greska prilikom preuzimanja komentara!', error);
    }
  };
  //console.log(komentari);
  //console.log(typeof dogadjajId, typeof prikazaniDogadjaj);

  // POST KOMENTARA
  const handleInputChange = (event) => {
    setNoviKomentar(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://localhost:7186/Komentar/PostaviKomentar/${noviKomentar}/lord0160/${dogadjajId}`,
        {
          method: 'POST',
        }
      );
      if (response.ok) {
        fetchKomentari();
        setNoviKomentar('');
      } else {
        console.error('Slanje komentara nije uspelo!');
      }
    } catch (error) {
      console.error('Greska prilikom slanja komentara!', error);
    }
  };

  // DELETE KOMENTARA
  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://localhost:7186/Komentar/IzbrisiKomentar/${commentId}`,
        {
          method: 'DELETE',
        }
      );
      //console.log(response);
      if (response.ok) {
        fetchKomentari();
      } else {
        console.error('Brisanje komentara nije uspelo!');
      }
    } catch (error) {
      console.error('Greska prilikom brisanja komentara!', error);
    }
  };

  // PUT KOMENTARA
  const handleEditComment = (commentId, commentText) => {
    setIzabraniKomentarId(commentId);
    setIzmenjenTekstKomentara(commentText);
  };


  const handleUpdateComment = async (commentId) => {
    try {
      const response = await fetch(
        `https://localhost:7186/Komentar/IzmeniKomentar?id=${commentId}&tekst=${izmenjenTekstKomentara}`,
        {
          method: 'PUT',
        }
      );
      if (response.ok) {
        fetchKomentari();
        setIzabraniKomentarId(null);
        setIzmenjenTekstKomentara('');
      } else {
        console.error('Azuriranje komentara nije uspelo!');
      }
    } catch (error) {
      console.error('Greska prilikom azuriranja komentara!', error);
    }
  };


  return (
    <div>
      {komentari.length > 0 && dogadjajId === prikazaniDogadjaj ? (
        <div className="comment-sec">
          <ul>

            {komentari[0].komentari.map((komentar) => (  //MORA komentari[0] jer niz komentari sadrzi samo jedan objekat koji ima svoje polje komentari, a unutar tog polja se nalazi niz nasih komentara

              <li key={komentar.id}>
                <div className="comment-list">
                  <div className="bg-img">
                    <img src="http://via.placeholder.com/40x40" alt="" />
                  </div>
                  <div className="comment">
                    <h3>{komentar.username_korisnika}</h3>
                    <span>
                      <img src="images/clock.png" alt="" />
                      3 min ago
                    </span>
                    <p>
                      {izabraniKomentarId === komentar.id ? (
                        <input
                          type="text"
                          value={izmenjenTekstKomentara}
                          onChange={(e) => setIzmenjenTekstKomentara(e.target.value)}
                        />
                      ) : (
                        komentar.tekst
                      )}
                    </p>
                    <div className="comment-buttons">
                      {izabraniKomentarId === komentar.id ? (
                        <>
                          <button onClick={() => handleUpdateComment(komentar.id)}>
                            Sacuvaj
                          </button>
                          <button onClick={() => setIzabraniKomentarId(null)}>
                            Odustani
                          </button>
                        </>
                      ) : (
                        <button onClick={() => handleEditComment(komentar.id, komentar.tekst)}>
                          Izmeni
                        </button>
                      )}
                      <button onClick={() => handleDeleteComment(komentar.id)}>
                        Obrisi
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Trenutno nema komentara.</p>
      )}


      <div className="post-comment">
        <div className="cm_img">
          <img src="http://via.placeholder.com/40x40" alt="" />
        </div>
        <div className="comment_box">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Postavi komentar"
              value={noviKomentar}
              onChange={handleInputChange} />
            <button type="submit">Salji</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Komentari;
