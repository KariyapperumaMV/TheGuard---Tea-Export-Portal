import { useNavigate } from "react-router-dom";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import background from "./../../assets/background.png";

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Predict Tea Prices",
      image: card1,
      description:
        "Get accurate tea price predictions using advanced forecasting models. Stay ahead of market trends and make informed decisions.",
      navigateTo: "/predict-tea-prices",
    },
    {
      title: "View Previous Values",
      image: card2,
      description:
        "Access historical tea price data and trends. Analyze past values to understand market fluctuations and plan accordingly.",
      navigateTo: "/previous-values",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-100 p-10"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mx-28">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => navigate(card.navigateTo)}
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-96 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
