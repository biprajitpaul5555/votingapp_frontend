import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const [profile, setProfile] = useState({});
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
      const fetchProfile = async () => {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/candidate/CPIM(Communist Party)`, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer ${localStorage.getItem("token")}`,
              },
          });
          const candidateparty = await response.json();
          console.log(candidateparty);
          if (response.ok) {
              setProfile(candidateparty.userProfile);
          } else {
              navigate("/login");
              alert(candidateparty.error);
              // alert("Please log in to access that page");
          }
      };
      fetchProfile();
  });
  return (
    <>
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
            width={400}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}>
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} className="xaxis" />
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

      



{/* /*************************candidate votes table**************************************************** */ }


      <div className="container py-5 my-5" id="guide-section">
        <h2 className="pb-2 border-bottom text-center">Candidate Votes</h2>
        <div className="accordion rounded-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                BJP(Bharatiya Janata Party)
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl no.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Votecount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Rohan Gupta</td>
                      <td>71</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                INC(Indian National Congress)
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl no.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Votecount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Arjun Sharma</td>
                      <td>65</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Priya Patel</td>
                      <td>35</td>
                      <td>3</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                CPIM(Communist Party of India)
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl no.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Votecount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mohini Mehta</td>
                      <td>42</td>
                      <td>0</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour">
                AAP(Aam Admi Party)
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Sl no.</th>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">Votecount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Karan Mehta</td>
                      <td>52</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Sushmita Sharma</td>
                      <td>35</td>
                      <td>0</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
