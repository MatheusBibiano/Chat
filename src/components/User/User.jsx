import { BsPersonCircle } from "react-icons/bs";

import styles from "./User.module.css";

export function User({ data }) {
  return (
    <section className={styles.container}>
      <div className={styles.picContainer}>
        {data.picSource === null || !data.picSource ? (
          <BsPersonCircle className="w-16 h-16 text-slate-300" />
        ) : (
          <img src={data.picSource} alt="" className={styles.pic} />
        )}

        <div
          className={
            styles.status + (data.logged ? " bg-green-600" : " bg-red-600")
          }
          title={data.logged ? "Online" : "Offline"}
        ></div>
      </div>
      <h2 className="flex-1 font-bold text-slate-300 text-base break-all">
        {data.name}
      </h2>
    </section>
  );
}
