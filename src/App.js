import { useEffect, useState } from 'react';

import './App.css';

import Header from './components/Header';
import IntroductionCard from './components/IntroductionCard';
import Footer from './components/Footer';

function App() {
  const [showDate, setShowDate] = useState(true);

  const logoName = "Zsu's Logo";

  const name = ['Zsu', 'Janos'];
  const school = ['SZTE', 'ELTE'];
  const age = [18, 20];
  const hobbyList = ['travelling', 'taking photos'];

  const favouriteAnimal = ['dog', 'cat'];
  const eyeColor = ['blue', 'brown'];
  const zodiacSign = ['Scorpio', 'Libra'];

  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = new Date();
  const date =
    day.getFullYear() + '/' + (day.getMonth() + 1) + '/' + day.getDate();
  const today = weekday[day.getDay()];

  /*   useEffect(() => {
    setTimeout(() => setShowDate(false), 2000);
  }); */

  const handleClick = () => {
    setShowDate(false);
  };

  setTimeout(() => {
    setShowDate(true);
  }, 3000);

  return (
    <div className='App'>
      <Header logo={logoName} />
      <IntroductionCard
        name={name}
        school={school}
        age={age}
        hobbyList={hobbyList}
        favouriteAnimal={favouriteAnimal}
        eyeColor={eyeColor}
        zodiacSign={zodiacSign}
      />
      <Footer
        date={date}
        today={today}
        showDate={showDate}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
