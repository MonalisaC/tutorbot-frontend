import React from 'react';
import PropTypes from 'prop-types';
import './Chatroom.css';

// const MoreInformation = (moreInfo) => (
//   <div className="more">
//     HERE IS MORE INFORMATION {moreInfo.detail}
//     <div dangerouslySetInnerHTML={{__html: moreInfo.detail}}></div>
//     <div><a href={moreInfo.source}>Source</a></div>
//   </div>
// );

class MoreInformation extends React.Component {
    render() {
      const moreInfo = this.props.moreInfo;
      var detailDiv = <div className="detailintro"><p>
          This is a web app that allows you to talk to TutorCurieBot.<br/>
          Ask her any type of questions 🤔 from about her, jokes, to ruby, ruby-on-rails, react and javascript.<br/>
          Say hello to TutorCurie in English, Spanish, Chinese and Bangla.😁
        </p></div>
      if (moreInfo.detail !== '') {
        detailDiv = <div className="detail" dangerouslySetInnerHTML={{__html: moreInfo.detail}}></div>
      }
      var sourceDiv = <div></div>
      if (moreInfo.source !== '') {
        sourceDiv = <div className="source"><a href={moreInfo.source} target='_blank'><span>Source</span></a></div>
      }
      return (
          <div className="more">
            {detailDiv}
            {sourceDiv}
          </div>
      );
    }
}

MoreInformation.propTypes = {
  moreInfo: PropTypes.shape({
    detail: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
  })
}

export default MoreInformation;
