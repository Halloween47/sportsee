import React, { useState } from 'react';
import { DataService } from '../../services/dataService';


function SwitchButton() {
    const [isChecked, setChecked] = useState(false);

    let dataService = new DataService();
    let data = dataService.getUser();

    const handleToggle = () => {
        setChecked(!isChecked); 

        if (!isChecked) {
          console.log('Données API');
        } else {
          console.log('Donnée Mocké');
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
