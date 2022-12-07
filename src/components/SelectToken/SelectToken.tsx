import { Select } from "antd";
import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { SelectTokenStyled } from "./style";

const { Option } = Select;

const SelectToken: React.FC<any> = ({
  showTokens,
  handleTokensToggle,
  tokens,
  index,
  name,
  formik,
}) => {
  const inputElement = useRef<any>();

  useEffect(() => {
    inputElement.current.focus();
  }, [showTokens]);

  const tokenInputRemove = () => {
    inputElement.current.blur();
  };

  return (
    <SelectTokenStyled>
      <Select
        ref={inputElement}
        showSearch
        style={{ width: 410 }}
        placeholder="Select Token"
        defaultValue={formik.values.tokensData[index].token}
        optionFilterProp="children"
        optionLabelProp="label"
        onBlur={() => handleTokensToggle(index)}
        open={showTokens}
        onChange={(value) => {
          console.log({ value }, "value in select token");
          formik.setFieldValue(name, value);
        }}
        onSelect={() => tokenInputRemove()}
      >
        {tokens.map(({ symbol, icon }: any, index: number) => (
          <Option key={index} value={symbol}>
            <div className="demo-option-label-item">
              <Icon icon={icon} width="26" height="26" color="black" />
              <span className="ms-2">{symbol}</span>
            </div>
          </Option>
        ))}
      </Select>
    </SelectTokenStyled>
  );
};

export default SelectToken;
