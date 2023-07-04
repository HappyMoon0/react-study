import React from "react";

function Header({ color, name }) {
  const divTag = <div>TEST</div>;
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };

  return (
    <div>
      <div style={style}>
        {name}
        {name}
      </div>
      <div style={{ color: color }}>HI!~!</div>
      <div className="gray-box">{divTag}</div>
    </div>
  );
}

Header.defaultProps = {
  name: '이름없음'
}

export default Header;
