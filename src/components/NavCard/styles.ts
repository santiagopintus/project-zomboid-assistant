import styled from "@emotion/styled";

export const NavCardStyle = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 300px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }

  label {
    margin-top: 8px;
    font-size: 16px;
    color: #333;
  }
`;
