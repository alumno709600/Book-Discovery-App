import styles from "./Input.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input = ({ value, onChange, placeholder }: Props) => {
  return (
    <input
      className={styles.input}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
