import store, {persistor} from "./Redux/store.js";
import {PersistGate} from "redux-persist/integration/react";
import {RouterProvider} from "react-router-dom";
import router from "./Routes/router.jsx";
import {Provider} from "react-redux";

function App() {


    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router}/>
            </PersistGate>
        </Provider>
    )
}

export default App;