import { useState, useEffect } from "react";


function Message({ featherCount, size }) {

  const [sizeClass, setsizeClass] = useState('small');
  const [message, setmessage] = useState('');

  useEffect(() => {
    console.log('Message', size);
  }, [size]);

  useEffect(() => {
    if (featherCount === 0){
      setmessage('Oh my! Your bird is naked!');
    }
    else if (featherCount > 0 && featherCount < 10){
      setmessage('Coming along...');
    }
    else{
      setmessage('Full turkey!');
    }
  }, [featherCount]);

  useEffect(() => {
    switch(size){
      case 's':
        setsizeClass('small');
        break;
      case 'm':
        setsizeClass('medium');
        break;
      case 'l':
        setsizeClass('large');
        break;
      case 'xl':
        setsizeClass('xlarge');
        break;
      default:
        setsizeClass('small');
        break;
    }
  }, [size]);

  return (
    <div className={`message ${sizeClass}`}>
      {message}
    </div>
  );
};

export default Message;
