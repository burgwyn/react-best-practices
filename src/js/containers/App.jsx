import React from 'react';

import '../../sass/app.scss';
import Gist from '../components/Gist';
import Slide from '../components/Slide';
import TableOfContents from '../components/TableOfContents';
import Title from '../components/Title';
import SlideShow from './SlideShow';

const App = () => (
    <SlideShow>
        <Title />
        <Slide title="Overview">
            <TableOfContents />
        </Slide>
        <Slide title="JS vs JSX">
            <div className="half">
                <span>Files that should end with .js</span>
                <ul>
                    <li>Redux Reducers</li>
                    <li>Redux Actions</li>
                    <li>Helpers</li>
                    <li>Data Mappings</li>
                    <li>Tests</li>
                </ul>
            </div>
            <div className="half">
                <span>Files that should end with .jsx</span>
                <ul>
                    <li>Components</li>
                    <li>Containers</li>
                    <li>Any file that includes JSX</li>
                </ul>
            </div>
        </Slide>
        <Slide title="Container / Component Pattern">
           <div className="half">
               <h2>Container Components</h2>
               <span>A container component is a React component that connects to Redux</span>
               <ul>
                    <li>Are “smart” in that they receive data directly from Redux</li>
                    <li>Interface directly with Redux actions and properties</li>
                    <li>Render a single Presentation Component</li>
                    <li>Do not render DOM</li>
                    <li>Have names ending with Container.jsx, ex. StyleGuideContainer.jsx</li>
                </ul>
            </div>
            <div className="half">
                <h2>Presentation Components</h2>
                <span>A presentational component is a generic React component that displays data</span>
                <ul>
                    <li>Presentational components are “dumb” in that they don’t know where the data from props is coming from</li>
                    <li>Do not interface with Redux</li>
                        <ul>
                            <li>Instead, they call methods in the parent component, received via props, that interface with Redux</li>
                            <li>Make minimal use of state</li>
                        </ul>
                    <li>Render as many Presentation Components and additional Container Components as necessary</li>
                    <li>Render DOM</li>
                    <li>Are named after either their parent, if their parent is a Container, or their function, ex. StyleGuideContainer.jsx renders StyleGuide.jsx</li>
                </ul>
            </div>
        </Slide>
        <Slide title="Small Components">
            <div>
                <h2>Components should be small and, if possible, reusable</h2>
                <span>Entire pages should not be contained in a single file</span>
                <ul>
                    <li>A React component should do one thing</li>
                    <li>If it does more than one thing, break it up into multiple components that each do one thing</li>
                    <li>Your components should be smaller than you think</li>
                    <li>Small components help with understanding, testing, and maintaining</li>
                    <li>Every component gets its own file. No exceptions.</li>
                </ul>
            </div>
        </Slide>
        <Slide title="Stateless Functional Components">
            <div className="full">
                <span>Less is more</span>
                <Gist key={'83017ef672391bcb8c1061ea0dec5df6'} rawUrl={'https://gist.githubusercontent.com/burgwyn/83017ef672391bcb8c1061ea0dec5df6/raw/1370e61b0cfa50e2568826899d3037df15af4347/StatelessFunctionalComponent.jsx'} />
            </div>
        </Slide>
        <Slide title="PropTypes &amp; DefaultProps - Bad">
            <div className="full">
                <span>Including anything like this is completely anti-pattern</span>
                <Gist key={'de4bea5d7f3df8c6778dcd1e2c7130c6'} rawUrl={'https://gist.githubusercontent.com/burgwyn/de4bea5d7f3df8c6778dcd1e2c7130c6/raw/d327b8da50f4ddff86b80fcac1fabf8d6b97cfe6/BadPropTypes.jsx'} />
            </div>
        </Slide>
        <Slide title="PropTypes &amp; DefaultProps - Good">
            <div className="full">
            <span>Use propTypes and defaultProps to specify what prop names and types your component is expecting, along with defaultProps to define them if they are not provided</span>
                <Gist key={'d0ce1e4877d7c7e81604e0ae29db9cab'} rawUrl={'https://gist.githubusercontent.com/burgwyn/d0ce1e4877d7c7e81604e0ae29db9cab/raw/f0359b262388d9d97b40e756280c3529857c7252/GoodPropTypes.jsx'} />
            </div>
        </Slide>
        <Slide title="Keep styles out of JSX">
            <div className="full">
                <h2>Bad</h2>
                <span>Explicitly setting style tags of JSX components should be avoided in almost all circumstances</span>
                <ul>
                    <li>JSX belongs in JSX files. CSS belongs in CSS files.</li>
                    <li>Styling rules should come from one place to act as a single source of truth.</li>
                    <li>Use className instead of style</li>
                    <li>You are permitted to use a style tag only when setting numeric values based on JS calculations</li>
                </ul>
            </div>
        </Slide>
        <Slide title="No logic in render()">
            <div className="full">
            <h2>Don’t Do it</h2>
            <span>Seriously</span>
            <ul>
                <li>Don’t change state in render</li>
                <li>Use functions to load blocks of content</li>
                <li>Avoid conditional rendering</li>
                <li>Ternary operators before return are fine</li>
                <li>Don’t need to display a component?</li>
                <li>return null</li>
                <li>Be mindful in your management of state</li>
                <li>Update state in single blocks</li>
                <li>Consider callbacks (see example)</li>
                <li>If you require additional logic to render then you may need…</li>
                <li>A Container</li>
                <li>Multiple Components</li>
                <li>Consider moving logic elsewhere in the component lifecycle</li>
                <li>componentWillUpdate can prevent unnecessary updates</li>
            </ul>
            </div>
        </Slide>
        <Slide title="Redux state vs component state">
            <div className="half">
                <h2>Redux state</h2>
                <span>Application-level data</span>
                <p>Redux state should be used for</p>
                <ul>
                    <li>Persisting data across multiple screens</li>
                    <li>Semi-permanent data that may end up in a database</li>
                </ul>
            </div>
            <div className="half">
                <h2>Component state</h2>
                <span>Component-level data</span>
                <p>Component state should be used forr</p>
                <ul>
                    <li>Short-lived data that affects only the component at hand</li>
                    <li>Data that is required for functionality, but will not end up in a database</li>
                </ul>
            </div>
        </Slide>
        <Slide title="React and Redux dev tools">
            <div className="half">
            <h2>Chrome Extensions</h2>
            <p>Life altering goodness, free of charge in the Chrome Web Store.</p>
            </div>
        </Slide>
        <Slide title="Unit Tests">
            <div className="full">
            <ul>
                <li>Container Components should be fully tested</li>
                <li>Redux Reducers should be fully tested</li>
                <li>Helper Files (API calls, convenience functions, etc.) should be fully tested</li>
                <li>Presentation Components require at least a render test</li>
                <li>Additional tests are highly suggested for interactive, component-specific functionality</li>
            </ul>
            </div>
        </Slide>
        <Slide title="Make a MESS">
        <div className="full">
            <ul>
                <li>Mount</li>
                <li>Enzyme</li>
                <li>Shallow</li>
                <li>Sinon</li>
            </ul>
            </div>
        </Slide>
        <Slide title="Mocking">
        <div className="full">
            <ul>
                <li>Create spies for callbacks</li>
                <li>Learn called and calledOnce</li>
                <li>Timer events</li>
                <li>Support for AJAX too</li>
            </ul>
            </div>
        </Slide>
        <Slide title="Linting">
        <div className="full">
            <ul>
                <li>Indentation</li>
                <li>Max line length</li>
                <li>Quotes</li>
                <li>Brackets</li>
                <li>Comma dangle</li>
            </ul>
            </div>
        </Slide>
        <Slide title="Additional Reading">
        <div className="full">
            <ul>
                <li>React’s Advanced Guides: https://facebook.github.io/react/docs/jsx-in-depth.html</li>
                <li>https://camjackson.net/post/9-things-every-reactjs-beginner-should-know</li>
                <li>https://medium.com/front-end-hacking/writing-clean-and-concise-react-components-by-making-full-use-of-es6-7-features-and-the-container-4ba0473b7b01</li>
                <li>https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44</li>
                <li>https://medium.com/@jeffbski/where-do-i-put-my-business-logic-in-a-react-redux-application-9253ef91ce1</li>
                <li>https://css-tricks.com/learning-react-container-components/</li>
            </ul>
            </div>
        </Slide>
    </SlideShow>
);

export default App;