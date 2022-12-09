import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import Input from "../../input";
import Textarea from "../../textarea";
import type { Form, Step } from "..";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<Step>>;
}

const ContactForm: FC<Props> = ({ setStep }) => {
  const { control } = useFormContext<Form>();

  return (
    <div className="flex w-full flex-col gap-y-9">
      {/* Top part */}
      <div className="flex flex-col gap-y-3">
        <h2 className="text-2xl font-bold text-slate-700">Final step!</h2>
        <p className="font-medium text-slate-700">
          Let’s level up your brand, together
        </p>
      </div>
      {/* Inputs */}
      <div className="flex w-full flex-col gap-y-4">
        <div className="w-full max-w-full md:max-w-[302px]">
          <Controller
            name="contacts.email"
            control={control}
            rules={{
              required: "This field is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "The field must have valid email format",
              },
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                label="Email"
                placeholder="example@example.com"
                value={value}
                onChange={onChange}
                error={error?.message}
                autoComplete="email"
              />
            )}
          />
        </div>
        <div className="flex w-full flex-col gap-y-4 gap-x-6 sm:flex-row">
          <div className="w-full max-w-full md:max-w-[302px]">
            <Controller
              name="contacts.firstName"
              control={control}
              rules={{
                required: "This field is required",
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  label="First name"
                  placeholder="Michael"
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                  autoComplete="given-name"
                />
              )}
            />
          </div>
          <div className="w-full max-w-full md:max-w-[302px]">
            <Controller
              name="contacts.lastName"
              control={control}
              rules={{
                required: "This field is required",
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  label="Last name"
                  placeholder="Brown"
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                  autoComplete="family-name"
                />
              )}
            />
          </div>
        </div>
        <Controller
          name="contacts.body"
          control={control}
          rules={{
            required: "This field is required",
          }}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Textarea
              label="Project description"
              value={value}
              placeholder="Short project description"
              onChange={onChange}
              error={error?.message}
            />
          )}
        />
        <div className="w-full max-w-full md:max-w-[302px]">
          <Controller
            name="contacts.budget"
            control={control}
            rules={{
              required: "This field is required",
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                label="Approx. budget in USD"
                placeholder="300"
                value={value.toString()}
                onChange={(val) => {
                  const number = Number(val);
                  if (isNaN(number)) return;
                  onChange(number);
                }}
                type="number"
                error={error?.message}
              />
            )}
          />
        </div>
      </div>

      <div className="flex gap-x-6">
        {/* Buttons */}
        <div className="flex gap-x-6">
          <button
            className="btn bg-slate-400 text-neutral-50"
            onClick={() => setStep("quiz")}
          >
            Back
          </button>
          <button className="btn bg-blue-700 text-neutral-50" type="submit">
            Send
            <PaperAirplaneIcon
              width={20}
              height={20}
              className="text-neutral-50"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
