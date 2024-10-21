import { TbPaperclip } from "react-icons/tb";
const AttachmentFile = () => {
  return (
    <div>
      <h3 className="font-semibold text-[#333333] mb-4">
        Add Attachments <span className="text-[#98A2B3]">(Optional)</span>{" "}
      </h3>
      <div className="relative">
        <input
          type="file"
          placeholder="lol"
          className="w-full border rounded-lg border-[#D2D6DB] px-6 py-3 file:hidden bg-white"
        />
        <div className="">
          <button className="absolute top-[6px] right-2 flex items-center gap-1 bg-[#13AF88] font-bold text-white border-none px-4 py-[6px] rounded-lg">
            <TbPaperclip className="font-bold" />
            Add File (5Mb){" "}
          </button>
        </div>
      </div>
      {/* <div>
        <input
          type="file"
          name=""
          id=""
          className="pl-6 pr-2 py-3 w-full bg-white rounded-lg border border-[#D2D6DB] file:bg-[#13AF88] file:text-white file:font-bold file:border-none file:px-4 file:py-[6px] file:rounded-lg  file:float-end"
        />
      </div> */}
    </div>
  );
};

export default AttachmentFile;
