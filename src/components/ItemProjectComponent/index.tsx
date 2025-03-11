import "./style.scss";
import vector from "/assets/icon/vector.svg";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ItemProjectComponent = ({ item }: { item: any }) => {
  return (
    <div className="item-project-component">
      <div className="item-project-component__item">
        <div className="item-project-component__item-title">
          <h3>{item.name}</h3>
        </div>
        <div className="item-project-component__item-time">
          <span>{item.createdAt}</span>
          <img style={{ margin: "0 18px" }} src={vector} alt="vector" />
          <span>{item.technologies.slice(0, 2).join(", ")}</span>
        </div>
        <div className="item-project-component__item-description">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemProjectComponent;
