import React from "react";

const SuccessStep = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="shadow-section flex w-full max-w-md flex-col items-center gap-y-9 rounded-md bg-neutral-50 p-6">
        <h2 className="text-3xl font-bold text-slate-700">Thank you</h2>
        <img
          src="calculator/success_illustration.svg"
          alt="Done illustration"
          className="h-[148px]"
        />
        <p className="w-full text-center text-slate-700">
          We will contact you soon to schedule a call or meeting to discuss the
          details!
        </p>
        <a href="/" className="btn bg-blue-700 text-neutral-50">
          Go home
        </a>
      </div>
    </div>
  );
};

export default SuccessStep;
