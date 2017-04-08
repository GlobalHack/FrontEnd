import React from 'react';
import globalStyles from '../../styles';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <h1>Data</h1>
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;
