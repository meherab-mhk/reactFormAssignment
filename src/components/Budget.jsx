const Budget = () => {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-[#333333] mb-4">
        Your Budget <span className="text-[#98A2B3]">(Optional)</span>{" "}
      </h3>
      <div className="flex flex-wrap gap-4">
        <span className="cursor-pointer inline-block font-semibold py-3 px-6 text-[#333333] border border-[#D2D6DB] rounded-lg hover:text-[#00A88E] hover:border-[#00A88E] hover:bg-[#E9F9F3]">
          {`Less than > $5,00`}
        </span>
        <span className="cursor-pointer inline-block font-semibold py-3 px-6 text-[#333333] border border-[#D2D6DB] rounded-lg hover:text-[#00A88E] hover:border-[#00A88E] hover:bg-[#E9F9F3]">
          {`$5,00 - $1,000`}
        </span>
        <span className="cursor-pointer inline-block font-semibold py-3 px-6 text-[#333333] border border-[#D2D6DB] rounded-lg hover:text-[#00A88E] hover:border-[#00A88E] hover:bg-[#E9F9F3]">
          {`$1,001 - $1500`}
        </span>
        <span className="cursor-pointer inline-block font-semibold py-3 px-6 text-[#333333] border border-[#D2D6DB] rounded-lg hover:text-[#00A88E] hover:border-[#00A88E] hover:bg-[#E9F9F3]">
          {`$1500 - $2,000`}
        </span>
      </div>
    </div>
  );
};

export default Budget;
