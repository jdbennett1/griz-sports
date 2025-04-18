import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Page from './pages/Page';
import Home from './pages/Home';
import Parking from './pages/parking';
import EventsPage from './pages/Events';





import Login from './pages/login';
import Locations from './pages/locations';
import Schedules from './pages/schedules';
import Events from './pages/Events'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out 
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css'; 
*/
/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';







setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/" exact={true}>
            <Redirect to="/lg" />
          </Route>
          <Route path="/lg" exact={true}>
            <Login /> {/* Your Modal component */}
          </Route>
          <Route path="/home" exact={true}>
            <Home /> {/* Your Home component */}
          </Route>
          <Route path="/modal" exact={true}>
            <Modal /> {/* Your Modal component */}
          </Route>

          <Route path="/parking" exact={true}> <Parking /></Route>

          <Route path="/loc" exact={true}>
            <Locations /> {/* Your Modal component */}
          </Route>
          <Route path="/shd" exact={true}>
            <Schedules /> {/* Your Modal component */}
          </Route>


          <Route path="/events" exact={true}> <Events /></Route>

          <Route path="/events/:id" exact={true} component={EventsPage}>
            <Events />
          </Route>











        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
