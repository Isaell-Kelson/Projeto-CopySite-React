import "./metricCards.css";

interface CardProps {
  metric: string;
  cardTitle: string;
  description: string;
}

export const MetricCards = ({ metric, cardTitle, description }: CardProps) => {
  return (
    <div className="card">
      <h2 className="metric-card-title">{metric}</h2>
      <h6 className="title-card">{cardTitle}</h6>
      <p className="description-card">{description}</p>
    </div>
  );
};
