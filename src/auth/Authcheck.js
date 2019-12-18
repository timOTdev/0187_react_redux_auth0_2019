// PACKAGE IMPORTS
import React, { Component } from 'react'
import { connect } from 'react-redux'

// LOCAL IMPORTS
import history from '../routes/history'
import * as ACTIONS from '../store/actions/actions'

class Authcheck extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.login_success()
      history.replace('/')
    }
    else {
      this.props.login_failure()
      history.replace('/')
    }
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

function mapStateToProps(dispatch) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    login_success: () => dispatch(ACTIONS.login_success()),
    login_failure: () => dispatch(ACTIONS.login_failure())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authcheck)
