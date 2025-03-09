import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";
import styles from "./CategoriesPage.module.css";

function CategoriesPage() {
  
  return (
    <div className={styles.container}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            // value={query.difficulty}
            // name="difficulty"
            // onChange={changeHandler}
          >
            <option >Difficulty</option>
            <option >Easy</option>
            <option >Medium</option>
            <option >Hard</option>
          </select>
          <select>
            <option >Cooking Time</option>
            <option >More than 30 min</option>
            <option>Less than 30 min</option>
          </select>
          <button>Search</button>
        </div>
        {/* <div className={styles.cards}>
          {!data.length ? (
            <img src="/images/search.png" alt="Category" />
          ) : null}
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default CategoriesPage;
