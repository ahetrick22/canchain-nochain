import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class CenterDashboardHeader extends Component {
    state = {
      dropdownOpen: false
    };


  updateDeliveryParams = async (paramStr) => {
    await this.props.setDeliveryParams(paramStr);
    await this.props.getDeliveries(this.props.paramStr);
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render () {
    const { id } = this.props.user
    return (
      <>
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Filter
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button className="dropdown-item btn-block" type="button" onClick={() => this.updateDeliveryParams(`/${id}`)} >All Deliveries</button>
    <button className="dropdown-item btn-block" type="button"onClick={() => this.updateDeliveryParams(`/${id}?unverified=true`)}>Unverified Deliveries</button>
    <button className="dropdown-item btn-block" type="button"onClick={() => this.updateDeliveryParams(`/${id}?verified=true`)}>Verified Deliveries</button>
    <button className="dropdown-item btn-block" type="button"onClick={() => this.updateDeliveryParams(`/${id}?discrepancy=true`)}>Deliveries with Discrepancy</button>

  </div>
</div>
        </>
    )
  }
}



const mapStateToProps = state => {
  return {
    paramStr: state.deliveryReducer.paramStr,
    user: state.authReducer.user
  }
}


export default connect(mapStateToProps, actions)(CenterDashboardHeader);
