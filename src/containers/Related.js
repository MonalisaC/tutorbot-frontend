import { connect } from 'react-redux'
import RelatedComponent from '../components/Related'

function mapStateToProps(state) {
  return {
    moreInfo: state.moreInfo
  };
}

export const Related = connect(state => (mapStateToProps(state)), {})(RelatedComponent)
