import { Component } from 'react'

class Logout extends Component {
  constructor(props){
    super(props)
    this.triggerLogout = this.triggerLogout.bind(this)
  }

  triggerLogout(ev){
    ev.preventDefault()
    let {auth} = this.props
    auth.logout()
  }

  render(){
    return(
      <a href='#' onClick={this.triggerLogout}>
        <span className='bi_user-female-cross'></span>Logout
      </a>
    );
  }
}

export default Logout
