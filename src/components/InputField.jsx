const InputField = () => {
  return (
    <section className="flex flex-col gap-8 mb-8">
      <div className="flex gap-6">
        <div className="flex flex-col">
          <label htmlFor="" className="mb-4 font-semibold text-[#333333]">
            Name*
          </label>
          <input
            type="text"
            name=""
            placeholder="Enter Your Name"
            className="p-3 w-[525.5px] placeholder:text-[#667085] border border-gray-200 rounded-lg "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="mb-4 font-semibold text-[#333333]">
            Email*
          </label>
          <input
            type="email"
            name=""
            placeholder="Enter Your Email"
            className="p-3 w-[525.5px] placeholder:text-[#667085] border border-gray-200 rounded-lg "
          />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col">
          <label htmlFor="" className="mb-4 font-semibold text-[#333333]">
            Phone Number <span className="text-[#98A2B3]">(Optional)</span>
          </label>
          <input
            type="text"
            name=""
            placeholder="Enter Your Phone Number"
            className="p-3 w-[525.5px] placeholder:text-[#667085] border border-gray-200 rounded-lg "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="mb-4 font-semibold text-[#333333]">
            Company Name <span className="text-[#98A2B3]">(Optional)</span>
          </label>
          <input
            type="text"
            name=""
            placeholder="Enter Your Company Name"
            className="p-3 w-[525.5px] placeholder:text-[#667085] border border-gray-200 rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default InputField;
