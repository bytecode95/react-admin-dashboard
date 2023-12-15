import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import {registerLicense} from '@syncfusion/ej2-base';
registerLicense('ORg4AjUWIQA/Gnt2VlhiQlVPd0BDWXxLflFyVWJbdVxwfldOcC0sT3RfQF5iS39WdkVhWn5fdHZRQA==');
import { BrowserRouter } from 'react-router-dom';
import { ContextPrvide } from './contexts/ContextProvide'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ContextPrvide>
        <App />
      </ContextPrvide>
    </React.StrictMode>
  </BrowserRouter>
)
