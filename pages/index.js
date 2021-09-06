import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
console.log(styles.container);
import { useState } from "react";
import Axios from "axios";
export default function Home() {
    let [joke, setJoke] = useState("Joke incoming");
    let [history, setHistory] = useState([]);
    console.log(history);
    const getJoke = async () => {
        let {
            data: { value: joke },
        } = await Axios.get("https://api.chucknorris.io/jokes/random");
        setJoke(joke);
        setHistory([...history, joke]);
    };

    return (
        <div className={styles.container}>
            <button onClick={() => getJoke()}>Get Random Joke</button>
            <p>{joke}</p>
        </div>
    );
}
function malac() {}
