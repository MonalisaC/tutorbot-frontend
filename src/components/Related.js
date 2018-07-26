import React from 'react';
import PropTypes from 'prop-types';
import './Chatroom.css';

class Related extends React.Component {
    render() {
      const moreInfo = this.props.moreInfo;
      let relatedQns = <div></div>
      if (moreInfo.related_questions && Array.isArray(moreInfo.related_questions)) {
        const relatedQuestionsListItems = moreInfo.related_questions.slice(0, 10).map((item,i) => <li key={i}>{item}</li>)
        relatedQns = <div className="questions">
          <div className="header">Related Questions</div>
          <div className="items"><ul>{relatedQuestionsListItems}</ul></div>
          </div>
      }
      return (
        <div className="related">
          {relatedQns}
        </div>
      );
    }
}

export default Related;
