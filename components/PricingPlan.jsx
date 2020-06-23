import React, { useState } from "react";

export default function PricingPlan({ deal }) {
  const [isActive, switchActive] = useState(false);
  return (
    <div
      className={`pricing-plan ${deal.color} ${isActive && "is-active"}`}
      onMouseEnter={() => {
        switchActive(true);
      }}
      onMouseLeave={() => {
        switchActive(false);
      }}
    >
      <div className="plan-header">{deal.name}</div>
      <div className="plan-price">
        <span className="plan-price-amount">
          <span className="plan-price-currency">{deal.currency}</span>
          {deal.price}
        </span>
      </div>
      <div className="plan-items">
        {deal.featuresValues.map((value, index) => (
          <div className="plan-item" key={index}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
