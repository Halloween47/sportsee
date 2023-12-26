import React, { useState } from 'react';
import {DataService} from '../../services/dataService';


function SwitchButton() {
    const [isChecked, setChecked] = useState(false);
    const dataService = new DataService();
    // console.log(dataService.isMocked);


    const handleToggle = () => {
        setChecked(!isChecked); 

        if (!isChecked) {
          console.log('Données API');
          dataService.isMocked = false;
          console.log(dataService.isMocked);
        } else {
          console.log('Donnée Mocké');
          dataService.isMocked = true;
          console.log(dataService.isMocked);
        }
      };

    return (
        <div className="onoffswitch">
            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" tabIndex="0" checked={isChecked}
        onChange={handleToggle} />
            <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
            </label>
        </div>
    );
}

export default SwitchButton;

