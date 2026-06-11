
import React from "react";
const services=[
["UAV","Unmanned Aerial Vehicle (Commonly known as a drone)."],

];
export default function Services(){
return <section className="py-20 px-6 text-center">
<h2 className="text-5xl font-bold mb-12 text-gray-300">Takshion Mechatronics Services</h2>
<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
{services.map((s,i)=><div key={i} className="border border-gray-400 rounded-2xl p-6 bg-gray-900/50">
<h3 className="text-2xl text-gray-300 font-bold mb-3">{s[0]}</h3>
<p className="text-gray-400">{s[1]}</p>
</div>)}
</div></section>
}
