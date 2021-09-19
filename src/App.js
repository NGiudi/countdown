import { Fragment, useState } from 'react';

import Countdown from './components/Countdown';

function App() {
  const [trigger, setTrigger] = useState(false);

  const finish = () => {
    console.log("termino la cuenta");
    setTrigger(false);
  };

  const onClick = () => {
    setTrigger(true);
  };

  return (
    <Fragment>
      <Countdown 
        initValue={10}
        trigger={trigger}
        onFinishCount={finish}
      />
      
      <button onClick={onClick}>
        Iniciar
      </button>
    </Fragment>
  );
}

export default App;
