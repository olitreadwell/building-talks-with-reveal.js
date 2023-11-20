import React from 'react';
import Slide from '../Components/RevealComponents/Slide';
import JSX from '../Components/Highlight/JSX';
import Note from '../Components/Notes/note';
import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';

const revealExample = `
import React from 'react';

const AboutRevealSlide = () => (
  <section data-transition="fade">
    <h3>What is Reveal.js?</h3>
    <ul>
      <li>Framework for creating presentations with HTML</li>
      <li>My demos will be using React, but this is optional!</li>
      <li>Open source 🥳</li>
    </ul>
    <aside class="notes">What is Reveal.js?</aside>
  </section>
);

export default AboutRevealSlide;
`;

const AboutRevealSlides = () => (
  <>
    <SlideWithTitle title="What is Reveal.js?">
      <ul>
        <li>Framework for creating presentations with HTML</li>
        <li>My demos will be using React, but this is optional!</li>
        <li>Open source 🥳</li>
      </ul>
      <Note>
        So let's get into it! What is Reveal.js? A framework. In this talk I
        will be using React as my HTML rendering library of choice but this is
        completely optional
      </Note>
    </SlideWithTitle>
    <Slide>
      <h3>Features of Reveal</h3>
      <ul>
        <li>
          HTML presentation - so you can use all your favourite web libraries
          and frameworks (like React)
        </li>
        <li>Has plugins and themes built in + allows custom ones</li>
        <ul>
          <li>Code snippets</li>
          <li>Markdown</li>
          <li>Math</li>
        </ul>
        <li>No-code editor available online</li>
      </ul>
      <Note>
        <ul>
          <li>So what are some of the features of reveal?</li>
          <li>
            For example, both in previous jobs and my current one, I use React
            with some libraries like styled components so I'm very comfortable
            with them, therefore I can use them while I built these slides and
            it felt very intuitive.
          </li>
          <li>
            If you don't want to create your colour scheme from scratch, there
            are some lovely themes built in
          </li>
          <li>
            There is also the option to use this library with no code! So you
            can make use of all the great features without needing to code
            yourself
          </li>
        </ul>
      </Note>
    </Slide>
    <Slide>
      {/* todo: make this the right code */}
      <JSX code={revealExample} />
      <Note>
        <ul>
          <li>This is what this slide looks like in React.</li>
          <li>You can see ....</li>
        </ul>
      </Note>
    </Slide>
  </>
);

export default AboutRevealSlides;
