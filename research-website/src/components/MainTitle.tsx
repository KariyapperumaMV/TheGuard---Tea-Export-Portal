type MainTitleProps = {
  name: string;
};

const MainTitle: React.FC<MainTitleProps> = ({ name }) => {
  return (
    <div>
      <h2 className="font-heading text-4xl md:text-4xl font-bold text-gray-800 mb-4">
        {name}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8 rounded-full"></div>
    </div>
  );
};

export default MainTitle;
