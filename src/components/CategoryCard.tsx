import styles from "./CategoryCard.module.css";

interface Props {
  label: string;
  onClick: () => void;
}

const CategoryCard = ({ label, onClick }: Props) => {
  return (
    <div className={styles.card} onClick={onClick}>
      {label}
    </div>
  );
};

export default CategoryCard;
