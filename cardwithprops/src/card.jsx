function ProfileCard(props) {
  return (
    <div className="profile-card">
      

      <img src={props.image} alt="profile" className="profile-img" />

      <h2>{props.name}</h2>
      <p className="location">{props.location}</p>

      <p className="bio">{props.bio}</p>

      <div className="buttons">
        <a href="https://linkedin.com/in/mahnoor-ashfaq-50951038a"><button className="linkedin">LinkedIn</button></a>
        <a href="https://github.com/MahnoorAshfaq3"><button className="github">Git Hub</button></a>
      </div>

      <h4>SKILLS</h4>
      <div className="skills">
        {props.skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
