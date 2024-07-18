import React, { useEffect, useState } from 'react'
import './App.css';

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  glasses: 17,
  clothingLayer1: 5,
  clothingLayer2: 5,
  clothingLayer3: 9,
  earrings: 32,
  hats: 28,
  neckwear: 18,
  facial_hair: 17
};
function getRandomInitialValue(total) { //min la: 1, max: total
  const randomNumber = Math.floor(Math.random() * (total - 1)) + 1;

  return randomNumber;
}





function App() {

  useEffect(() => {
    getRandom();
  }, [])

  const getRandom = () => {
    setBodyAvatar(getRandomInitialValue(total.body));
    setEyesAvatar(getRandomInitialValue(total.eyes));
    setHairAvatar(getRandomInitialValue(total.hair));
    setMouthAvatar(getRandomInitialValue(total.mouth));
    setEyebrowsAvatar(getRandomInitialValue(total.eyebrows));
    setGlassesAvatar(getRandomInitialValue(total.glasses));
    setClothingLayer1Avatar(getRandomInitialValue(total.clothingLayer1));
    setClothingLayer2Avatar(getRandomInitialValue(total.clothingLayer2));
    setClothingLayer3Avatar(getRandomInitialValue(total.clothingLayer3));
    setEarringsAvatar(getRandomInitialValue(total.earrings));
    setHatsAvatar(getRandomInitialValue(total.hats));
    setNeckwearAvatar(getRandomInitialValue(total.neckwear));
    setFacial_hairAvatar(getRandomInitialValue(total.facial_hair));
  }



  const [bodyAvatar, setBodyAvatar] = useState(0);
  const [eyesAvatar, setEyesAvatar] = useState(0);
  const [hairAvatar, setHairAvatar] = useState(0);
  const [mouthAvatar, setMouthAvatar] = useState(0);
  const [eyebrowsAvatar, setEyebrowsAvatar] = useState(0);
  const [glassesAvatar, setGlassesAvatar] = useState(0);
  const [clothingLayer1Avatar, setClothingLayer1Avatar] = useState(0);
  const [clothingLayer2Avatar, setClothingLayer2Avatar] = useState(0);
  const [clothingLayer3Avatar, setClothingLayer3Avatar] = useState(0);
  const [earringsAvatar, setEarringsAvatar] = useState(0);
  const [hatsAvatar, setHatsAvatar] = useState(0);
  const [neckwearAvatar, setNeckwearAvatar] = useState(0);
  const [facial_hairAvatar, setFacial_hairAvatar] = useState(0);



  //Add className "selected" into boxmini
  const addSelected = (e, body) => {
    const parentDiv = e.target.closest(`.${body}Part`);
    document.querySelectorAll(`.${body}Part`).forEach(div => div.classList.remove('selected'));
    parentDiv.classList.add('selected');
    switch (body) {
      case `body`:
        setBodyAvatar(e.target.name)
        break;
      case `eyes`:
        setEyesAvatar(e.target.name)
        break;
      case `hair`:
        setHairAvatar(e.target.name)
        break;
      case `mouth`:
        setMouthAvatar(e.target.name)
        break;
      case `eyebrows`:
        setEyebrowsAvatar(e.target.name)
        break;
      case `glasses`:
        setGlassesAvatar(e.target.name)
        break;
      case `clothingLayer1`:
        setClothingLayer1Avatar(e.target.name)
        break;
      case `clothingLayer2`:
        setClothingLayer2Avatar(e.target.name)
        break;
      case `clothingLayer3`:
        setClothingLayer3Avatar(e.target.name)
        break;
      case `earrings`:
        setEarringsAvatar(e.target.name)
        break;
      case `hats`:
        setHatsAvatar(e.target.name)
        break;
      case `neckwear`:
        setNeckwearAvatar(e.target.name)
        break;
      case `facial_hair`:
        setFacial_hairAvatar(e.target.name)
        break;

      default:
        console.log(`setState Error`)
    }
  }
  const getCharacterPart = (total, body, path, bodyAvatar) => {
    let content = [];
    for (let i = 1; i < total + 1; i++) {
      content.push(
        <div id={`${i}.${body}Part`} className={(bodyAvatar !== 0 && bodyAvatar === i) ? (`selected clickable boxmini ${body}Part`) : (`clickable boxmini ${body}Part`)}>
          <img name={i} onClick={(e) => addSelected(e, body)} src={`${path}/${i}.png`} alt="" value={`${body}Avatar`} />
        </div>
      );
    }
    return content;
  };


  return (
    <div className="App">
      <header>
        <p>CHARACTER</p>
        <p>🛠️CUSTOMIZATION🛠️
        </p>
        <hr />
      </header>
      <main>
        <div className="rightSide">

          <div className="display">

            <div className="avatar">
              {/* ADD img cua cac loai phu kien  */}
              <img style={{ zIndex: 1 }} src={`character/body/${bodyAvatar}.png`} alt="" />
              <img style={{ zIndex: 2 }} src={`character/eyes/${eyesAvatar}.png`} alt="" />
              <img style={{ zIndex: 3 }} src={`character/hair/${hairAvatar}.png`} alt="" />
              <img style={{ zIndex: 4 }} src={`character/mouths/${mouthAvatar}.png`} alt="" />
              <img style={{ zIndex: 5 }} src={`character/eyebrows/${eyebrowsAvatar}.png`} alt="" />
              <img style={{ zIndex: 6 }} src={`character/accessories/glasses/${glassesAvatar}.png`} alt="" />
              <img style={{ zIndex: 7 }} src={`character/clothes/layer_1/${clothingLayer1Avatar}.png`} alt="" />
              <img style={{ zIndex: 8 }} src={`character/clothes/layer_2/${clothingLayer2Avatar}.png`} alt="" />
              <img style={{ zIndex: 9 }} src={`character/clothes/layer_3/${clothingLayer3Avatar}.png`} alt="" />

              <img style={{ zIndex: 3 }} src={`character/facial_hair/${facial_hairAvatar}.png`} alt="" />
              <img style={{ zIndex: 100 }} src={`character/accessories/hats/${hatsAvatar}.png`} alt="" />
              <img style={{ zIndex: 16 }} src={`character/accessories/neckwear/${neckwearAvatar}.png`} alt="" />
              <img style={{ zIndex: 2 }} src={`character/accessories/earrings/${earringsAvatar}.png`} alt="" />

              <img style={{ zIndex: 20 }} src={`character/noses/1.png`} alt="" />
            </div>
            <button onClick={() => getRandom()} id='btnRandomize'>RANDOMIZE</button>
          </div>

        </div>
        <div className="leftSide">


          <div id="bodyList">
            <p>Body</p>
            <div className='boxLarge'>
              {getCharacterPart(total.body, `body`, `./character/body`, bodyAvatar)}
            </div>
          </div>

          <div id="eyesList">
            <p>Eyes</p>
            <div className='boxLarge'>
              {getCharacterPart(total.eyes, `eyes`, `./character/eyes`, eyesAvatar)}
            </div>
          </div>
          <div id="hairList">
            <p>Hair</p>
            <div className='boxLarge'>
              {getCharacterPart(total.hair, `hair`, `./character/hair`, hairAvatar)}
            </div>
          </div>
          <div id="mouthList">
            <p>Mouth</p>
            <div className='boxLarge'>
              {getCharacterPart(total.mouth, `mouth`, `./character/mouths`, mouthAvatar)}
            </div>
          </div>

          <div id="EyebrowsList">
            <p>Eyebrows</p>
            <div className='boxLarge'>
              {getCharacterPart(total.eyebrows, `eyebrows`, `./character/eyebrows`, eyebrowsAvatar)}
            </div>
          </div>

          <div id="glassesList">
            <p>Glasses</p>
            <div className='boxLarge'>
              {getCharacterPart(total.glasses, `glasses`, `./character/accessories/glasses`, glassesAvatar)}
            </div>
          </div>
          <div id="clothingLayer1List">
            <p>Clothing Layer 1</p>
            <div className='boxLarge'>
              {getCharacterPart(total.clothingLayer1, `clothingLayer1`, `./character/clothes/layer_1`, clothingLayer1Avatar)}
            </div>
          </div>
          <div id="clothingLayer2List">
            <p>Clothing Layer 2</p>
            <div className='boxLarge'>
              {getCharacterPart(total.clothingLayer2, `clothingLayer2`, `./character/clothes/layer_2`, clothingLayer2Avatar)}
            </div>
          </div>
          <div id="clothingLayer3List">
            <p>Clothing Layer 3</p>
            <div className='boxLarge'>
              {getCharacterPart(total.clothingLayer3, `clothingLayer3`, `./character/clothes/layer_3`, clothingLayer3Avatar)}
            </div>
          </div>
          <div id="earringsList">
            <p>Earrings</p>
            <div className='boxLarge'>
              {getCharacterPart(total.earrings, `earrings`, `./character/accessories/earrings`, earringsAvatar)}
            </div>
          </div>
          <div id="hatsList">
            <p>Hats</p>
            <div className='boxLarge'>
              {getCharacterPart(total.hats, `hats`, `./character/accessories/hats`, hatsAvatar)}
            </div>
          </div>
          <div id="neckwearList">
            <p>neckwear</p>
            <div className='boxLarge'>
              {getCharacterPart(total.neckwear, `neckwear`, `./character/accessories/neckwear`, neckwearAvatar)}
            </div>
          </div>
          <div id="facialHairList">
            <p>Facial Hair</p>
            <div className='boxLarge'>
              {getCharacterPart(total.facial_hair, `facial_hair`, `./character/facial_hair`, facial_hairAvatar)}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};


export default App;
