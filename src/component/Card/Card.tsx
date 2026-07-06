import styles from "./Card.module.scss";
import { ReactNode } from "react";

export interface CardProps {
  title?: string;
  image?: string;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Card({
  title,
  image,
  children,
  className,
  onClick,
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${className ?? ""}`}
      onClick={onClick}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className={styles.image}
        />
      )}
      <div className={styles.content}>
        {title && (
          <h3 className={styles.title}>
            {title}
          </h3>
        )}
        {children}
      </div>
    </div>
  );
}