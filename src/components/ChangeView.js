import { useMap } from 'react-leaflet';

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.flyTo(center)
    return null
}

export default ChangeView