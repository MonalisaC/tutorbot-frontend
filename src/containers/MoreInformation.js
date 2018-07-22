import { connect } from 'react-redux'
import MoreInformationComponent from '../components/MoreInformation'

function mapStateToProps(state) {
  return {
    moreInfo: state.moreInfo
  };
}

export const MoreInformation = connect(state => (mapStateToProps(state)), {})(MoreInformationComponent)
