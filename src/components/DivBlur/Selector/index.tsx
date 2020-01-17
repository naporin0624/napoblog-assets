import React, { useState, useCallback } from "react";
import { Container, Button, Menu, OptionsGroup, Option } from "./styles";

export interface OptionType {
  label: string;
  value: string | number;
}

interface Props {
  options: OptionType[];
  value?: OptionType;
  onChange?: (option: OptionType) => void;
}
export const Selector = (props: Props) => {
  const { options, value, onChange } = props;
  const [isFocus, setIsFocus] = useState(false);
  const onClick = useCallback(
    (option: OptionType) => {
      setIsFocus(false);
      onChange && onChange(option);
    },
    [onChange],
  );
  const isActive = useCallback((option: OptionType) => option.value === value?.value, [value]);

  return (
    <Container>
      <Button onClick={() => setIsFocus(f => !f)}>{value?.label || "click"}</Button>
      <Menu unmountOnExit timeout={300} in={isFocus}>
        <OptionsGroup>
          {options.map(option => (
            <Option key={option.label} onClick={() => onClick(option)} active={isActive(option)}>
              {option.label}
            </Option>
          ))}
        </OptionsGroup>
      </Menu>
    </Container>
  );
};
