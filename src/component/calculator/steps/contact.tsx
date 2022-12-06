import type { FunctionComponent } from "preact";

import Input from "../../input";
import type { Form } from "..";

interface Props {
  contacts: Form["contacts"];
  onChange: (contacts: Form["contacts"]) => void;
}

const ContactForm: FunctionComponent<Props> = ({ contacts, onChange }) => {
  const onInputChange = (key: keyof typeof contacts, value: string) => {
    onChange({
      ...contacts,
      [key]: value,
    });
  };

  return (
    <div className="flex flex-col gap-y-4">
      {/* Top part */}
      <div className="flex flex-col gap-y-3">
        <h2 className="text-2xl font-bold text-slate-700">Final step!</h2>
        <p className="font-medium text-slate-700">
          Let’s level up your brand, together
        </p>
      </div>
      {/* Inputs */}
      <div className="flex flex-col gap-y-4">
        <Input
          label="Email"
          placeholder="example@example.com"
          value={contacts.email}
          onChange={(val) => onInputChange("email", val)}
        />
      </div>
    </div>
  );
};

export default ContactForm;
