import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./SearchBar.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder: string;
}

const SearchBar = ({ value, onChange, onSearch, placeholder }: Props) => {
  return (
    <div className={styles.container}>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
      <Button text="Search" onClick={onSearch} />
    </div>
  );
};

export default SearchBar;
