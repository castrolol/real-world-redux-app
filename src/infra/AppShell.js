import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from '../ui/app';
import store from './store';

const history = createHistory()

class AppShell extends React.Component {

    render() {

        return (
            <ReduxProvider store={store} >
                <App history={history} />
            </ReduxProvider>
        );

    }

}


export default AppShell;