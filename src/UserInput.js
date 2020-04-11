import React, { useEffect, Fragment } from 'react';
import HOCReact from './hoc';

export const UserInput = (props) => {

  useEffect(() => {
    return () => {
      console.log("React hook that works as componentDidUnMount method in UserInput.js");
    }

  });


  return (
    <HOCReact className="textColor">
      <input type="text" name="Type" placeholder="Type Something" onChange={props.onuserTyped.bind(this)} />
      <br /> <br /> <span>
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span>
    </HOCReact>
  );
}