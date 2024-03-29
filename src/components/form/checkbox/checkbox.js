import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckboxWrapper,
  StyledCheckbox,
  Icon,
  Title
} from './checkbox.styled';
import {
  FieldWrapper,
  Label,
  HiddenInput
} from '../form.styled';

const Checkbox = ({refFunc, title, name, checked}) => (
  <FieldWrapper>
    <Label htmlFor={name}>
      <CheckboxWrapper>
        <HiddenInput id={name}
                     name={name}
                     ref={refFunc}
                     type="checkbox"/>
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24" >
            <polyline points="20 6 9 17 4 12"/>
          </Icon>
        </StyledCheckbox>
        <Title>{title}</Title>
      </CheckboxWrapper>
    </Label>
  </FieldWrapper>
);

Checkbox.propTypes = {
  refFunc: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired
};

export default Checkbox;
