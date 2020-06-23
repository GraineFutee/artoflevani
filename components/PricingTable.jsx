import PricingPlan from "./PricingPlan";

export default function PricingTable(props) {
  return (
    <>
      <p className="subtitle is-6">{props.data.description}</p>
      <div className="pricing-table">
        {props.data.deals.map((deal) => (
          <PricingPlan deal={deal} key={deal.name} />
        ))}
      </div>
    </>
  );
}
