import { VscSend } from "react-icons/vsc";
import AttachmentFile from "./components/AttachmentFile";
import Budget from "./components/Budget";
import InputField from "./components/InputField";
import Query from "./components/Query";
import Service from "./components/Service";

const Form = () => {
  return (
    <div className="w-[1123px] mx-auto my-5">
      <h1 className="text-[48px] font-bold">
        Drop Us a <span className="text-[#00A88E]">Line</span>
      </h1>
      <section className="p-6 bg-[#F9FAFB] rounded-lg mt-8 mb-[64px]">
        <InputField />
        <Service />
        <Budget />
        <Query />
        <AttachmentFile />
      </section>
      <button className="flex justify-center items-center gap-1 py-[14px] px-8 bg-[#0060AF] rounded-lg text-white text-lg font-bold">
        Send Inquiry
        <VscSend className="text-lg font-bold mt-2" />
      </button>
    </div>
  );
};

export default Form;
