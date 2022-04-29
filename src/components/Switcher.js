import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import chatStore from '../store/chat';

function Switcher() {
  const [chatState, setChatState] = useState(chatStore.initialState);
  const location = window.location.href.split('/')[3];

  useEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  const messageNotification = chatState.newDataCount > 0 && (
    <span className="notify">{chatState.newDataCount}</span>
  );

  return (
    <div className="switcher-div">
      <NavLink
        className="switcher"
        style={({ isActive }) => ({
          border: isActive ? '2px solid #00ade7' : '2px solid #fff',
          padding: '5px',
        })}
        to={'/first-person'}
      >
        Person 1{location !== 'first-person' && location.length > 1 && messageNotification}
      </NavLink>
      <NavLink
        className="switcher"
        style={({ isActive }) => ({
          border: isActive ? '2px solid #00ade7' : '2px solid #fff',
          padding: '5px',
        })}
        to={'/second-person'}
      >
        Person 2{location !== 'second-person' && messageNotification}
      </NavLink>
    </div>
  );
}
export default Switcher;
