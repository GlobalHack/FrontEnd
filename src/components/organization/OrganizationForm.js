import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ACTIONS } from '../../Setup';

class OrganizationForm extends React.Component {
  handleUpdateInput = (searchText, e, type) => {
    console.log(searchText.id);
    console.log(e);
    console.log(type);
  };

  dataSourceConfig = {
    text: 'name',
    value: 'id'
  };

  render() {
    return (
      <div>
        <Row>
          <h1>
            {'It looks like you don\'t belong to an organization yet'}
          </h1>
        </Row>
        <Row>
          <Col xs={12} sm={12}>
            <form>
              <AutoComplete
                hintText="Search"
                dataSource={this.props.organizations}
                dataSourceConfig={this.dataSourceConfig}
                filter={AutoComplete.fuzzyFilter}
                maxSearchResults={30}
                floatingLabelText="Search for Organization"
                fullWidth
                openOnFocus
                onUpdateInput={this.handleUpdateInput}
              />
              <RaisedButton label="Request Access" primary />
            </form>
          </Col>
          {/* <Col xs={12} sm={1}> */}
          {/* <h1>-Or-</h1> */}
          {/* </Col> */}
          {/* <Col xs={12} sm={6}> */}
          {/* <form> */}
          {/* <TextField */}
          {/* hintText="Organization" */}
          {/* floatingLabelText="Organization Name" */}
          {/* fullWidth={true} */}
          {/* /> */}
          {/* <TextField */}
          {/* hintText="Address" */}
          {/* floatingLabelText="Address" */}
          {/* fullWidth={true} */}
          {/* /> */}
          {/* <RaisedButton */}
          {/* label="Create" */}
          {/* primary={true} */}
          {/* /> */}
          {/* </form> */}
          {/* </Col> */}
        </Row>
      </div>
    );
  }
}

OrganizationForm.propTypes = {
  organizations: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    organizations: state.organizations || []
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ACTIONS, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationForm);
