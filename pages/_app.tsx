import '@/styles/globals.scss';
import 'normalize.css';
import 'animate.css';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import MenuIcon from '@/components/menu-icon';
import LeftMenu from '@/components/left-menu';
import useStore from '@/store'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  const { store, persistor} = useStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => (
          <div className="flex">
            <MenuIcon />
            <LeftMenu />
            <div style={{ flex: 1 }}>
              <Component {...pageProps} />
            </div>
         </div>
        )}
      </PersistGate>
    </Provider>
  )
}
export default MyApp
