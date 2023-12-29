// import React, { useState } from 'react';


// function SwitchButton() {
//     const [isChecked, setChecked] = useState(false);

//     const handleToggle = () => {
//         setChecked(!isChecked); 

//         if (!isChecked) {
//           console.log('Données API');
//           process.env.REACT_APP_USE_MOCK_DATA = 'false';
//         } else {
//           console.log('Donnée Mocké');
//           process.env.REACT_APP_USE_MOCK_DATA = 'true';
//         }
//       };

//     return (
//         <div className="onoffswitch">
//             <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" tabIndex="0" checked={isChecked}
//         onChange={handleToggle} />
//             <label className="onoffswitch-label" htmlFor="myonoffswitch">
//                 <span className="onoffswitch-inner"></span>
//                 <span className="onoffswitch-switch"></span>
//             </label>
//         </div>
//     );
// }

// export default SwitchButton;

///////////////////////////////////////
import React, { useState } from 'react';

function BoutonOnOff() {
  // Utilisez l'état (state) de React pour suivre l'état du bouton
  const [etatBouton, setEtatBouton] = useState(false);

  // Fonction pour basculer l'état On/Off
  const toggleOnOff = () => {
    // Inverse l'état du bouton en utilisant setEtatBouton
    setEtatBouton(!etatBouton);

    // Faites quelque chose avec l'état, par exemple, imprimez dans la console
    console.log('État actuel du bouton :', etatBouton);
  };

  return (
    <button id='switchButton' onClick={toggleOnOff}>
      {etatBouton ? 'On' : 'Off'}
    </button>
  );
}

export default BoutonOnOff;
