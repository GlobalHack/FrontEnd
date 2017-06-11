import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/organizationActions';
import PageBase from '../base/PageBase';
import OrganizationPermissionRow from './OrganizationPermissionRow';

class RuleTable extends React.Component {
  componentWillMount() {
    this.props.actions.loadOrganizations();
  }

  render() {
    const organizations = this.props.organizations;
    return (
      <PageBase title="Organization Permissions">
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Address</TableHeaderColumn>
              <TableHeaderColumn>Permission</TableHeaderColumn>
              <TableHeaderColumn>Expiration</TableHeaderColumn>
              <TableHeaderColumn>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} stripedRows={true}>
            {organizations.map(organization =>
              <OrganizationPermissionRow key={organization.id} organization={organization}/>
            )}
          </TableBody>
        </Table>
      </PageBase>
    );
  }
}

RuleTable.propTypes = {
  actions: PropTypes.array.isRequired,
  organizations: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    rules: state.rules
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(RuleTable);
