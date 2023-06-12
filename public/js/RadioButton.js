import React, { useState } from 'react';

function RadioButton() {
  const [showFirstDiv, setShowFirstDiv] = useState(true);

  const handleRadioChange = (event) => {
    setShowFirstDiv(event.target.value === "first");
  }

  return (
    <div>
      <label>
        <input type="radio" value="first" checked={showFirstDiv} onChange={handleRadioChange} />
        Show first div
      </label>
      <label>
        <input type="radio" value="second" checked={!showFirstDiv} onChange={handleRadioChange} />
        Show second div
      </label>

      {showFirstDiv ? (
        <div>
          {
            <div class="pretrazivanje-datum">
            <div class="div-naslov">
              <h3>Pretrazi po datumu:</h3>
            </div>
              <p class="suggestion-usd">
                <input class="datum-input" type = "text" id = "datepicker-13"></input>
              </p>
              <button class="pretrazi-button">Pretrazi</button>		
          </div>
          }
        </div>
      ) : (
        <div>
          {
            <div class="pretrazivanje-naziv">
            <div class="div-naslov">
              <h3>Pretrazi po nazivu:</h3>
            </div>
              <p class="suggestion-usd">
                <input class="datum-input" type = "text"></input>
              </p>
              <button class="pretrazi-button">Pretrazi</button>		
          </div>
          }
        </div>
      )}
    </div>
  );
}

export default RadioButton;