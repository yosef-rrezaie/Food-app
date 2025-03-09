import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href={`/`}>555Food</Link>
        </div>
        <div className={styles.right}>
          <Link href={`/menu`}>Menu</Link>
          <Link href={`/categories`}>categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
    </>
  );
}
