import PricingPlan from "./PricingPlan";

export default function PricingTable(props) {
  return (
    <>
      <p className="title is-5 has-text-white">{props.data.name}</p>
      <p className="subtitle is-6 has-text-white">{props.data.description}</p>
      <div className="pricing-table">
        {props.data.deals.map((deal) => (
          <PricingPlan deal={deal} key={deal.name} />
        ))}
      </div>
    </>
  );
}
