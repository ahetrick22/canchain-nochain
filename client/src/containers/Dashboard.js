import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardTable from './DashboardTable';
import FullModal from './FullModal';
import { Redirect } from 'react-router-dom';
import CenterDashboardHeader from './CenterDashboardHeader';
import PlantDashboardHeader from './PlantDashboardHeader';

//can either be a center dashboard or plant dashboard - there are few differences in conditionals
class Dashboard extends Component {
  
  componentDidMount = () => {
    //give the logged in user time to be assigned
    if (this.props.user) {
      if (this.props.user.account_type === "Center") {
        //if it's a center, get all the deliveries for it, or else get all the deliveries total
        this.props.setDeliveryParams(`/${this.props.user.id}`)
      } else {
        this.props.setDeliveryParams('')
      }
      this.props.getDeliveries(this.props.paramStr);
      //make sure the user's Metamask account is correct
    }
  }

  generateRandId = () => {
    return Math.floor(Math.random()*1000000);
  }

  //used by center only to create a new delivery
  createDelivery = async (count) => {
    this.props.toggleFetch();
    //the center that is creating the delivery
    const deliveryInfo = {
      centerId: this.props.user.id,
      centerCount: count,
      contractId: this.generateRandId()
    }
    setTimeout( () =>{this.props.createDelivery(deliveryInfo);
    }, 5000);
  }

  //used by plant accounts only to verify center deliveries
  verifyDeliveryContract = async (contract_id, count) => {
    await this.props.toggleFetch();
    //show them a modal to be able to put in the plant count & verify
    //send the verifyCount method & also update the DB
    const deliveryVerification = {
      contract_id : contract_id,
      plantCount: count
    }
    await fetch(`/deliveries?unverified`, 
    {
      headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then(res => res.json())
      .then(async (data) => {
        console.log(data);
       let selectedDelivery = await data.find(delivery => {
          return (delivery.contract_id === contract_id)
        });
        deliveryVerification.discrepancy = await Math.abs(selectedDelivery.center_count-count);
        console.log(deliveryVerification);
        await this.props.verifyDelivery(deliveryVerification);
      })
      .catch(error => {
        console.log(error);
      });  
      await this.props.getDeliveries(this.props.paramStr);
  }

  render() {
    if (!this.props.user) {
      return (<Redirect to="/login" />)
    } else {
      const { account_type } = this.props.user;
      return(
        <div className="main-class">
           <div className ="container">
            <div className = "row">
              <div className="col dashboard-page">
                <h1><strong>{account_type} Dashboard</strong></h1> 
               
                {account_type === "Center" ?  
                <>  
                <CenterDashboardHeader />
                <FullModal account_type={account_type} onClickFunc={this.createDelivery} buttonLabel="Create New Delivery"/>          
                <DashboardTable   /> 
                </> 
                
                :
                <>
                <PlantDashboardHeader />
                <DashboardTable verifyDeliveryContract={this.verifyDeliveryContract}   />
                </>
                }
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.authReducer.user,
    deliveries: state.deliveryReducer.deliveries,
    paramStr: state.deliveryReducer.paramStr
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
