import React from 'react';

class Header extends React.Component{

  render(){
    return(
      <header>
          <button> <i className="fa fa-arrow-left" aria-hidden="true"></i>返回</button>
          <h3>我的博客</h3>
          <button><i className="fa fa-home" aria-hidden="true"></i>首页</button>

      </header>
    )
  }
}


export default Header;
