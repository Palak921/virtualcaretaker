import 'react-notifications/lib/notifications.css';
import React from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';


class Example extends React.Component {

  state = {
    change: true
  }

  componentDidMount() {
    if (this.props.curr % 2 == 0) {
      NotificationManager.info("It's time to hydrate");
    }
    // this.setState({ change: false });
    // this.props.Notify()
  }

  Not = () => {
    this.props.Notify()
  }

  componentDidUpdate() {
    // this.props.Notify()
  }

  render() {
    console.log(this.props.not)
    return (
      <div>
        {/* <p onClick={this.createNotification('info')}>i</p> */}
        {/* <p>{this.props.not}</p> */}
        <NotificationContainer/>
        {/* {this.props.curr % 2 == 0 && this.props.not == 0 ? <NotificationContainer /> : ''} */}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    // loading: state.auth.loading,
    // error: state.auth.error
    not: state.not
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Notify: () => dispatch({ type: 'update_not' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
// export default Example;
