import React, { useEffect, useState } from 'react'
import './App.css';
import PartList from "./components/PartList.js";
import AvatarCard from "./components/AvatarCard.js";

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

// function create a random number
function getRandomValue(total) { //min la: 1, max: total
  const randomNumber = Math.floor(Math.random() * (total - 1)) + 1;

  return randomNumber;
}




function App() {
  // Initial value for Part by random
  useEffect(() => {
    getRandom();
  }, [])

  // FUNCTION RANDOM
  const getRandom = () => {
    setBodyAvatar(getRandomValue(total.body));
    setEyesAvatar(getRandomValue(total.eyes));
    setHairAvatar(getRandomValue(total.hair));
    setMouthAvatar(getRandomValue(total.mouth));
    setEyebrowsAvatar(getRandomValue(total.eyebrows));
    setGlassesAvatar(getRandomValue(total.glasses));
    setClothingLayer1Avatar(getRandomValue(total.clothingLayer1));
    setClothingLayer2Avatar(getRandomValue(total.clothingLayer2));
    setClothingLayer3Avatar(getRandomValue(total.clothingLayer3));
    setEarringsAvatar(getRandomValue(total.earrings));
    setHatsAvatar(getRandomValue(total.hats));
    setNeckwearAvatar(getRandomValue(total.neckwear));
    setFacial_hairAvatar(getRandomValue(total.facial_hair));
  }


  // useState Part
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



  //FUNCTION Add className "selected" into boxmini
  const addSelected = (e, body) => {
    const avatarSet = {
      body: setBodyAvatar,
      eyes: setEyesAvatar,
      hair: setHairAvatar,
      mouth: setMouthAvatar,
      eyebrows: setEyebrowsAvatar,
      glasses: setGlassesAvatar,
      clothingLayer1: setClothingLayer1Avatar,
      clothingLayer2: setClothingLayer2Avatar,
      clothingLayer3: setClothingLayer3Avatar,
      earrings: setEarringsAvatar,
      hats: setHatsAvatar,
      neckwear: setNeckwearAvatar,
      facial_hair: setFacial_hairAvatar,
    };

    const setter = avatarSet[body];
    if (setter) {
      setter(Number(e.target.name));
    } else {
      console.error(`Invalid body part: ${body}`); // Handle invalid body part
    }
  };

  // FUNCTION Render Part
  const getCharacterPart = (total, body, path, bodyAvatar) => {
    let content = [];
    for (let i = 1; i < total + 1; i++) {
      content.push(
        <div id={`${i}.${body}Part`} className={(bodyAvatar === i) ? (`selected clickable boxmini ${body}Part`) : (`clickable boxmini ${body}Part`)}>
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
              <AvatarCard zIndex={1} path={`character/body`} updateState={bodyAvatar} />
              <AvatarCard zIndex={2} path={`character/eyes`} updateState={eyesAvatar} />
              <AvatarCard zIndex={3} path={`character/hair`} updateState={hairAvatar} />
              <AvatarCard zIndex={4} path={`character/mouths`} updateState={mouthAvatar} />
              <AvatarCard zIndex={5} path={`character/eyebrows`} updateState={eyebrowsAvatar} />
              <AvatarCard zIndex={6} path={`character/accessories/glasses`} updateState={glassesAvatar} />
              <AvatarCard zIndex={7} path={`character/clothes/layer_1`} updateState={clothingLayer1Avatar} />
              <AvatarCard zIndex={8} path={`character/clothes/layer_2`} updateState={clothingLayer2Avatar} />
              <AvatarCard zIndex={9} path={`character/clothes/layer_3`} updateState={clothingLayer3Avatar} />
              <AvatarCard zIndex={2} path={`character/accessories/earrings`} updateState={earringsAvatar} />
              <AvatarCard zIndex={100} path={`character/accessories/hats`} updateState={hatsAvatar} />
              <AvatarCard zIndex={10} path={`character/accessories/neckwear`} updateState={neckwearAvatar} />
              <AvatarCard zIndex={3} path={`character/facial_hair`} updateState={facial_hairAvatar} />
              <AvatarCard zIndex={100} path={`character/noses`} updateState={1} />
            </div>
            <button onClick={() => getRandom()} id='btnRandomize'>RANDOMIZE</button>
          </div>
        </div>
        <div className="leftSide">
          <PartList totalPics={total.body} part={`body`} path={`./character/body`} state={bodyAvatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.eyes} part={`eyes`} path={`./character/eyes`} state={eyesAvatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.hair} part={`hair`} path={`./character/hair`} state={hairAvatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.mouth} part={`mouth`} path={`./character/mouths`} state={mouthAvatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.eyebrows} part={`eyebrows`} path={`./character/eyebrows`} state={eyebrowsAvatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.glasses} part={`glasses`} path={`./character/accessories/glasses`} state={glassesAvatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.clothingLayer1} part={`clothingLayer1`} path={`./character/clothes/layer_1`} state={clothingLayer1Avatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.clothingLayer2} part={`clothingLayer2`} path={`./character/clothes/layer_2`} state={clothingLayer2Avatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.clothingLayer3} part={`clothingLayer3`} path={`./character/clothes/layer_3`} state={clothingLayer3Avatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.earrings} part={`earrings`} path={`./character/accessories/earrings`} state={earringsAvatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.hats} part={`hats`} path={`./character/accessories/hats`} state={hatsAvatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.neckwear} part={`neckwear`} path={`./character/accessories/neckwear`} state={neckwearAvatar} getCharacterPart={getCharacterPart} />
          <PartList totalPics={total.facial_hair} part={`facial_hair`} path={`./character/facial_hair`} state={facial_hairAvatar} getCharacterPart={getCharacterPart} />

        </div>
      </main>
    </div>
  );
};


export default App;
