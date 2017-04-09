import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import OrganizationPermissionRow from './OrganizationPermissionRow';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import * as actions from '../../actions/organizationActions';
import PageBase from '../base/PageBase';

class OrganizationPermissionTable extends React.Component {
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

OrganizationPermissionTable.propTypes = {
  organizations: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  if (state.organizations.length > 0) {
    return {
      organizations: state.organizations
    };
  } else {
    return {
      organizations: [{id: '', name: '', address: '', permissions: '', expiration: '', delete: ''}]
    };
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationPermissionTable);
