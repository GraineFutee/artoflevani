import React, { useState } from "react";

export default function PricingPlan({ deal }) {
  const [isActive, switchActive] = useState(false);
  return (
    <div
      className={`pricing-plan ${deal.color} ${isActive && "is-active"}`}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      onMouseEnter={() => {
        switchActive(true);
      }}
      onMouseLeave={() => {
        switchActive(false);
      }}
    >
      <div
        className="plan-header"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      >
        {deal.name}
      </div>
      <div
        className="plan-price"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
      >
        <span className="plan-price-amount">
          <span className="plan-price-currency">{deal.currency}</span>
          {deal.price}
        </span>
      </div>
      <div className="plan-items">
        {deal.featuresValues.map((value, index) => (
          <div
            className="plan-item"
            style={{ backgroundColor: "rgba(235, 235, 235, 0.7)" }}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
