import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setLogIn, setLogOut } from '../reducers/admin'

class Login extends React.Component {

  componentDidMount(){
    window.gapi.load('client:auth2',() => {
      window.gapi.client.init({
        clientId: '122893238691-isau3oime10dju13jst02gntg8mtejvi.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.handleAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.handleAuthChange)
      })
    })
  }

  handleAuthChange = (isSignedIn) => {
    if (isSignedIn){
      this.props.setLogIn(this.auth.currentUser.get().getId())
    }else{
      this.props.setLogOut()
    }
  }

  handleLogin = () => {
    this.auth.signIn()
  }
  handleLogout = () => {
    this.auth.signOut()
  }
  renderAuthButton(){
    if (this.props.user === null){
      return null
    }
    if (this.props.user){
      return <div onClick= {this.handleLogout}>Logout</div>
    }else{
      return(
        <div onClick= {this.handleLogin}>Login</div>
      )
    }
  }
  render(){
    return(
      <div>
      {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    user: state.admin.user
  })
}

export default connect(mapStateToProps, { setLogIn, setLogOut })(Login)
