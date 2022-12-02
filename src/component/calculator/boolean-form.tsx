import type { FunctionComponent } from "preact";

import RadioButton from "../radio-button";

interface Props {
  value: boolean;
  onChange: (value: boolean) => void;
}

const BooleanQuestionForm: FunctionComponent<Props> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <RadioButton
        isChecked={value === true}
        onClick={() => onChange(true)}
        text="Yes"
      />
      <RadioButton
        isChecked={value === false}
        onClick={() => onChange(false)}
        text="No"
      />
    </div>
  );
};

export default BooleanQuestionForm;
