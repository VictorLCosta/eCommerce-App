import './Overlay.css'
import { useStore } from './../../stores/store';
import { observer } from 'mobx-react-lite';

const Overlay = () => {
    const { commonStore: {isOverlayActive, toggleDesktopMenuVisibility} } = useStore()

    return <div className={`overlay ${isOverlayActive ? 'active' : ''}`} onClick={toggleDesktopMenuVisibility}></div>
}

export default observer(Overlay)