import style from "./Profile.module.css";
import image from "../assets/background3.jpg";

//Work experience page, displayed in table
const Home = () => {
  const data = [
    {
      org: "Cognizant",
      project: "Deutsche",
      desc: "Worked as a backend developer."
    },
    {
      org: "Cognizant",
      project: "Agilent",
      desc: "Worked as a Frontend React native developer."
    },
    {
      org: "Persistent",
      project: "Telstra",
      desc: "Worked as a Freontend React JS developer."
    }
  ];
  return (
    <div
      style={{ backgroundImage: `url(${image})`, height: "100%" }}
      className={style.container}
    >
      <h1 className={style.workHeading}>Work Experience!</h1>
      <table className={style.table}>
        <tr>
          <th>Organization</th>
          <th>Project</th>
          <th>Job Description</th>
        </tr>
        {data.map((value, key) => {
          return (
            <tr key={key}>
              <td>{value.org}</td>
              <td>{value.project}</td>
              <td>{value.desc}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Home;
