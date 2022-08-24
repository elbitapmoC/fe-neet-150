const MapsAndSet = ({ title, descriptions }) => {
  const COUNTRIES_MAP = new Map([
    ["New Zealand", "🇳🇿"],
    ["Israel", "🇮🇱"],
    ["Mexico", "🇲🇽"],
  ]);
  COUNTRIES_MAP.set("United States", "🇺🇸");
  const putin = { name: "Russia" };
  console.log(COUNTRIES_MAP);
  COUNTRIES_MAP.set(putin, "🇷🇺");
  console.log(COUNTRIES_MAP.get(putin));

  const numbersArray = [11, 12, 88, 41, 87, 5, 7, 11, 12, 88, 41, 87, 5, 7];

  const uniqueNumbers = new Set(numbersArray);
  console.log(uniqueNumbers);
  console.log(uniqueNumbers.has(7));
  uniqueNumbers.delete(5);
  console.log(uniqueNumbers);

  return (
    <section className="flex flex-col ">
      <h1 className="title text-4xl">{title}</h1>
      <ul className="mt-4">
        {descriptions.map((description, i) => (
          <li key={i}>{description}</li>
        ))}
      </ul>
    </section>
  );
};

export default MapsAndSet;
