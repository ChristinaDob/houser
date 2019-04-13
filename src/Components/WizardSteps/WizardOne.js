import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStepOne } from './../../ducks/reducer';

class WizardOne extends Component {
  render() {
    return (
      <div>
        <div>
          Name:
          <input onChange={e => this.props.updateStepOne(e.target.value)} />
        </div>
        <div>
          Address:
          <input onChange={e => this.props.updateStepOne(e.target.value)} />
        </div>
        <div>
          City:
          <input onChange={e => this.props.updateStepOne(e.target.value)} />
        </div>
        <div>
          State:
          <input onChange={e => this.props.updateStepOne(e.target.value)} />
        </div>
        <div>
          Zip:
          <input onChange={e => this.props.updateStepOne(e.target.value)} />
        </div>
        <button>Next</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    propertyAddress: state.propertyAddress,
    propertyCity: state.propertyCity,
    propertyState: state.propertyState,
    propertyZip: state.propertyZip
  };
}

export default connect(
  mapStateToProps,
  { updateStepOne }
)(WizardOne);
