/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  outline: 0;
  text-transform: uppercase;
  
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px 16px;
  
  width: 100%;

  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
