import { Link } from "react-router-dom";

const Cuisines = () => {
  const cuisines = [
    {
      name: "American",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672571739/american_e2ezfu.webp",
    },
    {
      name: "Thai",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672571739/moroccan_u8xvuj.webp",
    },
    {
      name: "Spanish",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672571740/spanish_ftcoix.webp",
    },
    {
      name: "Chinese",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672571739/chinese_pa6yvc.webp",
    },
    {
      name: "French",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672571739/french_ncprec.webp",
    },
    {
      name: "Japanese",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672571739/japanese_bpyjhn.webp",
    },
    {
      name: "Indian",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672571739/indian_akxej4.webp",
    },
    {
      name: "Italian",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672571739/italian_bsampc.webp",
    },
  ];
  return (
    <section id="cuisines" className="cuisines">
      <h2 className="primary-heading">Go for your favorite cuisine</h2>
      <div className="mb-2">
        {cuisines.map((cuisine) => (
          <div key={cuisine + Math.random()} className="cuisine">
            <Link
              className="cuisine__container"
              to={`/search/?cuisine=${cuisine.name}`}
            >
              <img
                className="cuisine__image"
                src={cuisine.img}
                alt={cuisine.name}
              />
              <p className="cuisine__name">{cuisine.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cuisines;
