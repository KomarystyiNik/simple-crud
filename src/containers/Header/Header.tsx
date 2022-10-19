import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'antd/lib/button';
import './Header.scss';


const Header: React.FC = () => {

  return (
    <div className="header-container">
      <Button>
        <Link to='/create'>Create</Link>
      </Button>
    </div>
  );
};

export default Header;
export { Header };
