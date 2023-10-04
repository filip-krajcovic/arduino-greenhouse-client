import rajcinaImageUrl from '../assets/RAJCINA.png'
import paprikaImageUrl from '../assets/PAPRIKA.png'
import chilliImageUrl from '../assets/Chilli2.png'
import bazalkaImageUrl from '../assets/Bazalka.png'
import mataImageUrl from '../assets/Mata.png'
import redkovkaImageUrl from '../assets/Redkovka.png'

export const items = [
    {
      id: 1,
      url: rajcinaImageUrl,
      name: {
        sk: 'Rajčiak jedlý',
        latin: 'Solanum lycopersicum',
      },
      class: 'w-20 h-22 pt-4',
      conditions: [
        'Pre klíčenie semien rajčiaka je ideálna teplota medzi 20 a 30 °C.',
        'Po vzniku sadeníc sa odporúča udržiavať teplotu medzi 18 a 24 °C v noci a medzi 24 a 30 °C počas dňa.',
        'Pre optimálny rast a tvorbu plodov sa odporúča udržiavať teplotu okolo 21 až 27 °C počas dňa a okolo 16 až 18 °C v noci',
      ]
    },
    {
      id: 2,
      url: paprikaImageUrl,
      name: {
        sk: 'Paprika ročná',
        latin: 'Capsicum annuum',
      },
      class: 'w-18 h-24',
      conditions:[
        'Ideálna teplota pre klíčenie semien je medzi 24 a 29 °C.',
        'Vyžaduje dobre priepustnú pôdu s pH hodnotou medzi 6,0 a 7,0.',
        'Paprika ročná sa často pestuje zo semien, ktoré sa pred sadením môžu namočiť na 24 hodín, aby sa urýchlil proces klíčenia.',
        'Pri pestovaní papriky ročnej je dôležité udržiavať primeranú vlhkosť pôdy a vyhnúť sa nadmernému zavlažovaniu, aby sa predišlo hnilobe koreňov a chorobám.',
      ]
    },
    {
      id: 3,
      url: chilliImageUrl,
      name: {
        sk: 'Chilli',
        latin: 'Capsicum',
      },
      class: 'w-28 h-22 pt-3'
    },
    {
      id: 4,
      url: redkovkaImageUrl,
      name: {
        sk: 'Reďkev siata',
        latin: 'Raphanus sativus',
      },
      class: 'h-28 w-22' 
    },
    {
      id: 5,
      url: mataImageUrl,
      name: {
        sk: 'Mäta pieporná',
        latin: 'Mentha piperita ',
      },
      class: 'w-28 h-20'
    },
    { id: 6,
      url: bazalkaImageUrl,
      name: {
        sk: 'Bazalka pravá',
        latin: 'Ocimum basilicum',
      },
      class: 'w-28 h-20'
    },
  ]