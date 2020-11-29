import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./AllData.css";

function AllData() {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(false);
    const ref = db.collection("notesCollection");

    function getCollections() {
        setLoading(true);
        ref.orderBy("id", "desc").onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setCollections(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getCollections();
    }, []);

    return (
        <div className="allData">
            <h1 className="allData__count">
                {loading
                    ? "Loading...Please wait"
                    : `Total no of data = ${collections.length}`}
            </h1>
            {collections.map((collection) => (
                <div className="allData__container" key={collection.id}>
                    <div className="allData__header">
                        <h3>{collection.name}</h3>
                        <h3>{collection.date}</h3>
                    </div>
                    <div className="allData__body">
                        <p>{collection.details}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AllData;
