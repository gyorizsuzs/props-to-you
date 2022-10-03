function IntroductionCard(props) {
  const name = props.name;
  const school = props.school;
  const age = props.age;
  const hobbyList = props.hobbyList;
  const favouriteAnimal = props.favouriteAnimal;
  const eyeColor = props.eyeColor;
  const zodiacSign = props.zodiacSign;

  let content = (
    <div className='introduction'>
      <p className='introduction__text'>
        <b>Hello</b>, <br /> my name is <u>{name[0]}</u>. <br />
        <br />I am a student at {school[0]}, and I would like to be the best
        React developer in the world :).
        <br />
        <br /> I'm {age[0]} years old, and my hobby is {hobbyList[0]}. My
        favourite animal is the {favouriteAnimal[0]}, I have {eyeColor[0]} eyes
        and my Zodiac Sign is {zodiacSign[0]}.
      </p>
      <p className='introduction__text'>
        <b>Hello</b>,
        <br /> my name is <u>{name[1]}</u>. <br />
        <br />I am a student at {school[1]}, and I would like to be the best
        React developer in the world :).
        <br />
        <br /> I'm {age[1]} years old, and my hobby is {hobbyList[1]}. My
        favourite animal is the {favouriteAnimal[1]}, I have {eyeColor[1]} eyes
        and my Zodiac Sign is {zodiacSign[1]}.
      </p>
    </div>
  );

  return content;
}

export default IntroductionCard;
