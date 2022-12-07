import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import Input from "../../input";
import Textarea from "../../textarea";
import type { Form } from "..";

const ContactForm: FC = () => {
  const { control } = useFormContext<Form>();

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
        <div className="w-full max-w-[302px]">
          <Controller
            name="contacts.email"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                label="Email"
                placeholder="example@example.com"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-y-4 gap-x-6 sm:flex-row">
          <div className="w-full max-w-[302px]">
            <Controller
              name="contacts.firstName"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  label="First name"
                  placeholder="First"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
          <div className="w-full max-w-[302px]">
            <Controller
              name="contacts.lastName"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Input
                  label="Last name"
                  placeholder="Last"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>
        <Controller
          name="contacts.body"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Textarea
              label="Project description"
              value={value}
              placeholder="Short project description"
              onChange={onChange}
            />
          )}
        />
      </div>
      <div className="w-full max-w-[302px]">
        <Controller
          name="contacts.budget"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              label="Approx. budget"
              placeholder="300"
              value={value.toString()}
              onChange={(val) => {
                const number = Number(val);
                if (isNaN(number)) return;
                onChange(number);
              }}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ContactForm;
