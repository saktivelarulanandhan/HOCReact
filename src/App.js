import React, { useState, useEffect, Fragment } from 'react';
import { UserInput } from './UserInput';
import HOCReact from './hoc';

const App = () => {
  const [userInfo, setUserInfo] = useState({ userTyped: 'Sakti' });
  let howManyTimes = ['Y'];

  // react hook that works as componentWillMount method
  useEffect( () => {
    console.log("React hook that works as componentWillMount method in App.js");
   
  }, []);

  
  useEffect( ()=> {
    console.log("React hook that works as ShouldComponentUpdate method in App.js");
    return () => {
      console.log("React hook that works as componentDidUnMount method in App.js");
    }
   
  });

  useEffect( ()=> {
    console.log("React Hook that works as getDerivedStateFromProps method in App.js");
  }, howManyTimes);



  const onuserTyped = (userValue) => {
    console.log(userValue.target.value);
    howManyTimes[0] = userValue.target.value;
    console.log(howManyTimes);
    setUserInfo({userTyped: userValue.target.value});
  };

  return (
    <Fragment>
      What you have typed? {userInfo.userTyped}
      {
        userInfo.userTyped.indexOf('Y') === -1 ? <UserInput onuserTyped={onuserTyped} />: null
      }
     
     </Fragment>
  );
}

export default App;
