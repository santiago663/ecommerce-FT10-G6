import "../../scss/components/_about.scss";
import Card from "./Card";
import team from "./team";

export default function About() {
  return (
    <div className="home-wrapper">
      <div className="section-about">
        <div className="team">
          {team.information.map((member, index) => {
            member.profilePic = team.profilePic[index];
            return <Card member={member} key={member.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
