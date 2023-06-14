import ReactDOM from 'react-dom';
import '../src/i18n/i18n-config';
import App from './App';


ReactDOM.render(<App />, document.getElementById('root')); //Suporta versão React 17.


// Se mantivesse a versão 18 não poderia usar a biblioteca mui.
//ReactDOM.createRoot(document.getElementById('root')).render(

//  <App />

//);
