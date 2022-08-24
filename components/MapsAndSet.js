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
  console.log(`Has Israel? ${COUNTRIES_MAP.has("Israel")}`);
  console.log(`Has Trinidad? ${COUNTRIES_MAP.has("Trinidad")}`);

  console.log(COUNTRIES_MAP.keys()); // Empty, returns iterator

  const numbersArray = [11, 12, 88, 41, 87, 5, 7, 11, 12, 88, 41, 87, 5, 7];

  const uniqueNumbers = new Set(numbersArray);
  console.log(uniqueNumbers);
  console.log(uniqueNumbers.has(7));
  uniqueNumbers.delete(5);
  console.log(uniqueNumbers);

  // Can check if has duplicates:
  if (numbersArray.length === uniqueNumbers.size) {
    console.log("Has 0 duplicates");
  } else console.log("Has duplicates...");

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
