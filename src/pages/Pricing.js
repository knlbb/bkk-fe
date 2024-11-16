import React from 'react'
import Market from "../components/Market";
import SearchBox from "../components/SearchBox";

export default function Pricing() {
  return (
    <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight">
            Optimize Your PRICING with<br />
            Cutting-Edge <span className="text-teal-600">AI Solutions</span>
        </h2>
        </div>
        <SearchBox/>
        <Market/>
    </div>
  )
}
