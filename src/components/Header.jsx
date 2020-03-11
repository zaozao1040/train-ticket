import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

export default function Header(props) {
  const { onBack, title } = props;
  return (
    <div className="header">
      <div className="header-back" onClick={onBack}>
        <span className="iconfont icon-fanhui1"></span>
      </div>
      <h1 className="header-title">{title}</h1>
    </div>
  );
}

Header.propTypes = {
  onBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
