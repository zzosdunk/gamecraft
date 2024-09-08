import styles from "./Button.module.css";

interface IButton {
  buttonText: string;
  onClick: () => void;
}

const Button = ({ buttonText, onClick }: IButton) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {buttonText}
    </div>
  );
};

export default Button;
