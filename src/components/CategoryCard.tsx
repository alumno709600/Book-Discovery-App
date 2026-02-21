import styles from "./CategoryCard.module.css";

interface Props {
  title: string;
  description?: string;
  onClick: () => void;
}

const CategoryCard = ({ title, description, onClick }: Props) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
};

export default CategoryCard;

