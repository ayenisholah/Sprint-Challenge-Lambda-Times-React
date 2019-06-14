import React from 'react';
import Tab from './Tab';
import uuid from 'uuid';
const Tabs = ({ selectTabHandler, selectedTab, tabs }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          // map over the tabs provided on your props, create a new Tab component for each one.
          // give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props
          tabs.map(tab => (
            <Tab
              key={uuid()}
              tab={tab}
              selectTabHandler={selectTabHandler}
              selectedTab={selectedTab}
            />
          ))
        }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
