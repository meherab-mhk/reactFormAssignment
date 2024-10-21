const Query = () => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-[#333333] mb-4">
        Your Budget <span className="text-[#98A2B3]">(Optional)</span>{" "}
      </h3>
      <textarea
        className="placeholder:text-[#667085] py-3 px-4 w-full bg-white border border-gray-200 rounded-lg h-[120px]"
        name=""
        id=""
        placeholder="Tell us more about your query"
      ></textarea>
    </div>
  );
};

export default Query;
