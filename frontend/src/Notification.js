import 'react-notifications/lib/notifications.css';
import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

 
class Example extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info("It's time to hydrate");
          break;
        // case 'success':
        //   NotificationManager.success('Success message', 'Title here');
        //   break;
        // case 'warning':
        //   NotificationManager.warning('Warning message', 'Close after 3000ms', 3000); 
        //   break;
        // case 'error':
        //   NotificationManager.error('Error message', 'Click me!', 5000, () => {
        //     alert('callback');
        //   });
        //   break;
      }
    };
  };
 
  render() {
    return (
      <div>
          <p onClick={this.createNotification('info')}>i</p>
        {/* <button className='btn btn-info'
          >i
        </button> */}
        {/* <hr/>
        <button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </button>
        <hr/>
        <button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </button>
        <hr/>
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button>
  */}
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Example;
