import { Link } from "react-router-dom";
const Groups = () => {
  const groups = [
    {
      name: "Appetizer",
      img: "/images/groups/r4.jpg",
    },
    {
      name: "Main Dishes",
      img: "/images/groups/photo.jpeg",
    },
    {
      name: "Soup-Salad",
      img: "/images/groups/photo-1.jpeg",
    },
    {
      name: "Desserts",
      img: "/images/groups/photo-2.jpeg",
    },
    {
      name: "Drinks",
      img: "/images/groups/bg7.jpg",
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
