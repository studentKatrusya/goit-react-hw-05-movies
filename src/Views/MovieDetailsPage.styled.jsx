import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Wrap = styled.div`
  display: flex;
`;
export const Box = styled.div`
  max-width: 50%;
  margin: 20px;
`;
export const Btn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 8px;
  background: #00a6ff;
  color: rgb(247, 241, 241);
  font-size: 14px;
  cursor: pointer;
  border: none;
  transform: scale(1);
  transition-duration: 300ms;
  margin-top: 10px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  margin: 20px;
  font-size: 24px;
  font-weight: 500;
  &.active {
    color: #00a6ff;
  }
`;
