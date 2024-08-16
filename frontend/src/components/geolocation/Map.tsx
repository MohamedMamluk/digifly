'use client';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useLocale, useTranslations } from 'next-intl';
const coords: [number, number] = [30.061444, 31.336885];
const Map = () => {
  const locale = useLocale();
  const markerIcon = new Icon({
    iconUrl: '/markerIcon.png',
    iconSize: [38, 38],
  });
  return (
    <MapContainer
      center={coords}
      zoom={24}
      scrollWheelZoom={false}
      className='h-[300px]'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={coords} icon={markerIcon}>
        <Popup>{RenderMarkerMessage(locale as 'ar' | 'en')}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
const RenderMarkerMessage = (locale: 'ar' | 'en') => {
  const t = useTranslations('task_2');

  if (locale == 'en') {
    return (
      <p className='text-white max-w-32'>
        <span className='text-[#47BC8A]'>{t('digi')}</span>
        <span className='font-bold '>{t('fly')}</span> Company welcomes you
      </p>
    );
  }

  return (
    <p className='text-white max-w-32 font-lg'>
      شركة
      <span className='text-[#47BC8A] inline-block mx-1'>{t('digi')}</span>
      <span className='font-bold '>{t('fly')}</span> ترحب بكم
    </p>
  );
};
