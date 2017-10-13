import Paper from 'material-ui/Paper';
import React from 'react';
import globalStyles from '../../styles';
import OrganizationPermissionTable from '../organization/OrganizationPermissionTable';

const DashboardPage = () =>
  <Paper style={globalStyles.paper}>
    <OrganizationPermissionTable />
  </Paper>;

export default DashboardPage;
