import React, { useEffect, useState } from 'react';
import bubble from '../../assets/images/bubble.png';
import giona from '../../assets/images/giona-web.png';

function Hero() {
  const [joke, setJoke] = useState({});

  const getJoke = () => {
    fetch(
      'https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,racist,sexist',
      {
        headers: {
          Accept: 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getJoke();
  }, []);

  const JokeText = ({ joke, ...rest }) => {
    if (joke.type === 'twopart') {
      return (
        <div {...rest}>
          <h1>{joke.setup}</h1>
          <h2>{joke.delivery}</h2>
        </div>
      );
    } else {
      return (
        <div {...rest}>
          <h1 className='text-center'>{joke.joke}</h1>
        </div>
      );
    }
  };

  const Joke = ({ joke }) => {
    return (
      <div className='relative max-w-[35rem] w-full flex items-center justify-center'>
        <img
          className='object-contain max-w-[35rem] w-full'
          src={bubble}
          alt=''
        />
        <JokeText
          joke={joke}
          className='bubble-joke absolute text-xs sm:text-sm lg:text-lg max-w-[80%]'
        />
      </div>
    );
  };
  return (
    <section className='hero bg-white'>
      <div className='container flex h-full'>
        {joke && (
          <div className='text-black'>
            <Joke joke={joke} />
          </div>
        )}
        <div className='w-1/2 mt-auto'>
          <img src={giona} alt='Giona' className='object-contain' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
