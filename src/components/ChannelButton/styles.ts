import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover, &.active {
    background-color: var(--quinary);

    > div span {
      color: var(--white);
    }
  } 
`;

export const HashtagIcon = styled.div`
  display:none;
`;

export const InviteIcon = styled.div``;

export const SettingsIcon = styled.div``;
