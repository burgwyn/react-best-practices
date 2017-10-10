import React from 'react';

import '../../sass/app.scss';
import Code from '../components/Code';
import Slide from '../components/Slide';
import TableOfContents from '../components/TableOfContents';
import Title from '../components/Title';
import SlideShow from './SlideShow';

const App = () => (
    <SlideShow>
        <Title />
        <TableOfContents />
    </SlideShow>
);

export default App;