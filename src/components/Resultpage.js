import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const getColorFromParty = (party) => {
    switch (party) {
        case "BJP":
            return "#F47216";
        case "AAP":
            return "#009ADA";
        case "INC":
            return "#166A2F";
        case "CPIM":
            return "#DE0000";
        default:
            break;
    }
};

const Result = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchResults = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/candidate/vote/count`);
            const json = await response.json();
            if (response.ok) {
                const m = new Map();
                m.set("BJP", 0);
                m.set("AAP", 0);
                m.set("INC", 0);
                m.set("CPIM", 0);
                json.forEach((value) => {
                    const party = value.party.split("(")[0];
                    m.set(party, m.get(party) + value.count);
                });
                const info = [];
                for (const [key, value] of m) {
                    info.push({ name: key, votes: value, color: getColorFromParty(key) });
                }
                setData(info);
            } else {
                alert(json.error);
            }
        };
        fetchResults();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Election Result</h1>
            <div className="resultpage">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="votes">
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}>
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="votes" fill="#8884d8" background={{ fill: "#eee" }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Result;
