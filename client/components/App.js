import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Main from './Main'
import * as actionCreators from '../actions/actionCreators'

function mapStateToProps(state){
    return state;
}

function mapDispatcherToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatcherToProps)(Main);