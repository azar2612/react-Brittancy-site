import React from "react";
import "./Profile.css";
import Profile1 from "./Profile1";
import img1 from "./images/01.jpg";
import img2 from "./images/02.jpeg";

const Profile = ({ image }) => (
  <div className="profile-section" style={{ backgroundImage: `url(${image})` }}>
    <h1>Testimonials</h1>
    <ProfileBlock />
  </div>
);

const ProfileBlock = () => (
  <div className="profile-block">
    <Profile1
      image={img1}
      h3="I’m recommending you to all my friends"
      txt="My sweetheart loved the portrait! You not only captured her image so well but unveiled and projected my feelings and thoughts through it. The depth of your work is really impressive. You are the best and I will recommend you and your services to all my friends!"
      h6="JEFF WILLIAMS"
      span="Sales manager"
    />
    <Profile1
      image={img2}
      h3="Thank you for your creative paintings!"
      txt="You're a gifted and masterful  who is able to capture the essence of people with such depth and accuracy, and at the same time weave in the intricacies of a beautifully composed grand work of art. Each of your pieces is unique, yet identifiably bears your signature style."
      h6="SAMANTHA CLARKSON"
      span="Journalist"
    />
  </div>
);
export default Profile;
