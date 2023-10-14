// import logo from './logo.svg';
import './App.css';

import { Tabs } from './components/tabs';
// import { MulDatePicker } from './components/MulDatePicker';
// import { MuiButton } from './components/MuiButton';
// import { MulSelect } from './components/MulSelect';
// import { MuiTypography } from './components/MuiTypography';
import Nav from './components/nav';
// import Tips from './components/tips';

// import { LocalizationProvider } from '@mui/x-date-pickers';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-full flex flex-col justify-center">
        <Nav/>
        <Tabs/>
        
      </div>
    // </LocalizationProvider>
  );
}

export default App;
