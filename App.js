const rootElement = document.getElementById('root');
const element = React.createElement('h1', {id:"heading", xyz:"abc"}, 'Hello, world!');
const root = ReactDOM.createRoot(rootElement);
root.render(element);