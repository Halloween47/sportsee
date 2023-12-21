import Meditate from '../../assets/meditate.svg'
import Natation from '../../assets/natation.svg'
import Bicycle from '../../assets/bicycle.svg'
import Muscle from '../../assets/muscle.svg'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_icons">
            <img src={ Meditate } alt="meditate" />
            <img src={ Natation } alt="natation" />
            <img src={ Bicycle } alt="bicycle" />
            <img src={ Muscle } alt="muscle" />
            </div>
        </div>
    )
}
export default Sidebar