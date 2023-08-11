import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const BtnItem = styled.div`
  padding: 8px 16px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
`;
