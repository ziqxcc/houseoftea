import React from "react";

function Counts() {
    const SPEC = [
        {
          count: "45",
          spec: "Branches",
          dis: "across the world",
        },{
          count: "999",
          spec: "Staffs",
          dis: "in our shop",
        },{
          count: "99M",
          spec: "Happy Customers",
          dis: "across the world",
        },
      ];
  return (
    <section className=" py-20 text-white flex justify-center bg-secondary">
      <div className="w-[80%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-5">
        {SPEC.map((item:any,index:number)=>(
            <div className="flex items-center justify-center gap-10 md:gap-5">
          <h5 className="text-4xl md:text-6xl font-[300] text-primary">{item.count}+</h5>
          <div>
            <h5 className="text-xl md:text-2xl font-[400] text-white">{item.spec}</h5>
            <p className="text-zinc-400">{item.dis}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Counts;
