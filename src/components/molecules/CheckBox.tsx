import React from 'react';
import './CheckBox.sass';

type Props = {
  text: string
  onChange: () => void
  checked?: boolean
};

const CheckBox: React.FC<Props> = ({ text, onChange, checked }) => (
  <div className="CheckBox">
    <div
      onClick={onChange}
      onKeyDown={onChange}
      role="button"
      tabIndex={0}
      className="CheckBox__btn"
      data-test="btn"
    >
      <input
        type="checkbox"
        checked={checked || false}
        data-test="input"
      />
      { text }
    </div>
  </div>
);

export default CheckBox;
