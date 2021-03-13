import styles from "../styles/button.module.scss";
import Link from "next/link";

const Button = (props) => {
  return (
    <div style={props.style}>
      <Link href={props.url} prefetch={true}>
        <a
          style={{
            background: props.color,
            border: `2px solid ${props.color}`,
          }}
          target='_brank'
          onClick={props.onClick}
          className={styles.outer}
        >
          LIVE WEBSITE
        </a>
      </Link>
    </div>
  );
};

export default Button;
