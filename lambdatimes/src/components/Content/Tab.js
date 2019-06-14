import React from 'react';

const Tab =({ tab, selectTabHandler, selectedTab }) => {
  console.log(tab)
  return (
    <div
      className={tab ===selectedTab ? 'tab active-tab':'tab'}
      onClick={() => selectTabHandler()}
    >
      {tab}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
