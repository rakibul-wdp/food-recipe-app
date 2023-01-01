import { Link } from "react-router-dom";
const Groups = () => {
  const groups = [
    {
      name: "Appetizer",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672572309/samples/groups/r4_yfp1vy.jpg",
    },
    {
      name: "Main Dishes",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672572309/samples/groups/photo_xlz8ct.jpg",
    },
    {
      name: "Soup-Salad",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672572308/samples/groups/photo-1_bmvnwa.jpg",
    },
    {
      name: "Desserts",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672572308/samples/groups/photo-2_cu4g0y.jpg",
    },
    {
      name: "Drinks",
      img: "https://res.cloudinary.com/deoxba2ty/image/upload/v1672572309/samples/groups/bg7_khmh2g.jpg",
    },
  ];
  return (
    <section className="groups" id="groups">
      <div className="mb-2 mt-2">
        {groups.map((group) => (
          <Link
            key={group + Math.random()}
            to={`/search/?groups=${group.name}`}
          >
            <div className="group">
              <img src={group.img} alt={group.name} />
              <p>{group.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <h2 className="primary-heading mt-2">
        Find recipes from your desired meal section
      </h2>
    </section>
  );
};

export default Groups;
