import React from 'react';
import PropTypes from 'prop-types'


const Tab =({ tab, selectTabHandler, selectedTab }) => {
  console.log(selectTabHandler)
  return (
    <div
      className={tab ===selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => selectTabHandler(tab)}
    >
      {tab}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tabs: PropTypes.string.isRequired
}

export default Tab;
