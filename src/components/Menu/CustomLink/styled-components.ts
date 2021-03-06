import styled from 'styled-components';

export const Item = styled.a<{ active?: boolean }>`
  font-size: 14px;
  position: relative;
  color: ${(props) => (props.active ? props.theme.colors.main : props.theme.colors.white)};
  text-decoration: none;
  margin-right: 30px;

  &:before {
    position: absolute;
    content: '';
    left: ${(props) => (props.active ? 0 : '50%')};
    top: calc(100% + 5px);
    height: 2px;
    width: ${(props) => (props.active ? '50%' : 0)};
    background-color: ${({ theme }) => theme.colors.main};
    transition: ${({ theme }) => theme.trns};
  }

  &:hover {
    &:before {
      left: 0;
      width: 100%;
    }
  }
`;
