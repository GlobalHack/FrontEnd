import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { ACTIONS } from '../../Setup';
import PageBase from '../base/PageBase';
import ReferralTable from './ReferralTable';

class ReferralPage extends React.Component {
  componentDidMount() {
    //loadreferral ({id: this.props.params.id}) // have this reducer call the apis for orgs and employees to put in state.referral
  }

  render() {
    const { referral, consumers, intakes, organization } = this.props;
    return (
      <PageBase
        title={`Referral ${referral.name || 'Loading...'}`}
        navigation="Application / Referral Page"
      >
        <ConsumerList consumers={consumers} />
        <IntakeList intakes={intakes} />
        <OrganizationCard organization={organization} />
      </PageBase>
    );
  }
}

ReferralTablePage.propTypes = {
  referral: PropTypes.object.isRequired,
  consumers: PropTypes.array,
  intakes: PropTypes.array,
  organizationTo: PropTypes.object,
  organizationFrom: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    referral: state.referral.information,
    consumers: state.referral.consumers,
    intakes: state.referral.intakes,
    organization: state.referral.organization
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(ACTIONS, dispatch) };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ReferralTablePage)
);
