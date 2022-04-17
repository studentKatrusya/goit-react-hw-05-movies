import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  margin: 20px;
  font-size: 24px;
  font-weight: 500;
  &.active {
    color: #00a6ff;
  }
`;
