import styled from 'styled-components'
const Header = () => {
  return (
      <HeaderComponent >
        <h1>Csv Comparator</h1>
      </HeaderComponent >
  );
};

export default Header;

const HeaderComponent = styled.header `
  display: flex;
  height: 40px;
  width: 100vw;
  align-items: center;
  padding: 0 20px;
  background-color: #333;
  color: #fff;
  box-shadow: 0 2px 10px rgba(0,0,0, .5);
`