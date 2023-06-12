const zainteresovanBtn = document.querySelector('.zainteresovan');
const mozdaBtn = document.querySelector('.mozda');
const nisamZainteresovanBtn = document.querySelector('.nisamzainteresovan');

zainteresovanBtn.addEventListener('click', () => {
  zainteresovanBtn.classList.toggle('active');
  mozdaBtn.classList.remove('active');
  nisamZainteresovanBtn.classList.remove('active');
});

mozdaBtn.addEventListener('click', () => {
  mozdaBtn.classList.toggle('active');
  zainteresovanBtn.classList.remove('active');
  nisamZainteresovanBtn.classList.remove('active');
});

nisamZainteresovanBtn.addEventListener('click', () => {
  nisamZainteresovanBtn.classList.toggle('active');
  zainteresovanBtn.classList.remove('active');
  mozdaBtn.classList.remove('active');
});