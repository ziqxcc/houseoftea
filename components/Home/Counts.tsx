import React from "react";

function Counts() {
    const SPEC = [
        {
          count: "38",
          spec: "Branches",
          dis: "Sed ut perspiciatis unde",
        },{
          count: "999",
          spec: "Our Staffs",
          dis: "Sed ut perspiciatis unde",
        },{
          count: "99M",
          spec: "Happy Customers",
          dis: "Sed ut perspiciatis unde",
        },
      ];
  return (
    <section className=" py-20 text-white flex justify-center bg-secondary">
      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3">
        {SPEC.map((item:any,index:number)=>(
            <div className="flex items-center justify-center gap-5">
          <h5 className="text-6xl font-[300] text-primary">{item.count}+</h5>
          <div>
            <h5 className="text-2xl font-[400] text-white">{item.spec}</h5>
            <p className="text-zinc-400">{item.dis}</p>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default Counts;
