import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import App from '../ui/app';
import store from './store';


class AppShell extends React.Component {

    render() {

        return (
            <ReduxProvider store={store} >
                <App />
            </ReduxProvider>
        );

    }

}


export default AppShell;