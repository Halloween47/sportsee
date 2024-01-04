
import React, { useState } from 'react';

function BoutonOnOff() {
  const [etatBouton, setEtatBouton] = useState(false);

  const toggleOnOff = () => {
    setEtatBouton(!etatBouton);

    console.log('État actuel du bouton :', etatBouton);
  };

  return (
    <button id='switchButton' onClick={toggleOnOff}>
      {etatBouton ? 'On' : 'Off'}
    </button>
  );
}

export default BoutonOnOff;
