import React, {Component} from 'react';

class EmployeeRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roleId: this.props.role.id,
      disabledState: this.props.disabled
    }
  }

  componentWillMount(){ }

  handleChangeRole(event) {
    var _this = this;
    var new_role = event.target.value
    $.post('/api/employee/' + _this.props.id + '/roles', {role:new_role})
      .done(function(response){
        _this.setState({
          roleId: new_role
        })
      })
      .fail(function(err){})
  }

  handleChangeDisabled(event){
    var _this = this;
    var new_disabled = event.target.checked
    $.post('/api/employee/' + _this.props.id + '/disable', {disabled: new_disabled})
      .done(function(response){
        _this.setState({
          disabledState: new_disabled
        })
      })
      .fail(function(err){})
  }
  
  populateRoles(){
    var { roles } = this.props

    let el = []
    for (let i = 0; i < roles.length; i ++) {
      el.push(<option key={roles[i].id} value={roles[i].id}>{roles[i].name}</option>)
    }
    return el
  }


  render() {
    if (!this.props) return null
    var _this = this;
    return (
      <tr>
        <td>
          { this.props.firstName } { this.props.lastName }
        </td>
        <td>
          { this.props.email }
        </td>
        <td>
          <select value={_this.state.roleId} onChange={this.handleChangeRole.bind(this)}>
            { this.populateRoles() }
          </select>
        </td>
        <td>
          <input type="checkbox" checked={_this.state.disabledState} onChange={this.handleChangeDisabled.bind(this)}/>
        </td>
      </tr>
    );
  }
}

export default EmployeeRow;
