import React from "react";
import { Bookmark } from "lucide-react";
import Cards from "./components/cards";
import "./index.css";

const jobListings = [
  {
    id: 1,
    logo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-logo-smile-icon-vector-34243987.jpg",
    company: "Amazon",
    postedAgo: "5 days ago",
    title: "Senior UI/UX Designer",
    tags: ["Part Time", "Senior Level"],
    payRate: "$120/hr",
    location: "Mumbai, India",
    isSaved: false,
  },
  {
    id: 2,
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
    company: "Google",
    postedAgo: "2 days ago",
    title: "Frontend Developer",
    tags: ["Full Time", "Mid Level"],
    payRate: "$95/hr",
    location: "Bengaluru, India",
    isSaved: true,
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmp9uYn1tXSScUNuTo9glP-xzE8G1MhCjNMsr8LQ-glAguovqp1GNR1gY&s=10",
    company: "Meta",
    postedAgo: "1 day ago",
    title: "Product Designer",
    tags: ["Full Time", "Senior Level"],
    payRate: "$110/hr",
    location: "Remote",
    isSaved: false,
  },
  {
    id: 4,
    logo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    company: "Netflix",
    postedAgo: "3 days ago",
    title: "Full Stack Engineer",
    tags: ["Contract", "Senior Level"],
    payRate: "$135/hr",
    location: "San Francisco, CA",
    isSaved: false,
  },
  {
    id: 5,
    logo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    postedAgo: "Just now",
    title: "iOS Design Lead",
    tags: ["Full Time", "Lead Level"],
    payRate: "$140/hr",
    location: "Cupertino, CA",
    isSaved: true,
  },
  {
    id: 6,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQScpM5Oy3Y5ts22Zgg1IPZ58fiSi9p-uYa8RiID_gcg&s=10",
    company: "Microsoft",
    postedAgo: "4 days ago",
    title: "UX Researcher",
    tags: ["Part Time", "Entry Level"],
    payRate: "$70/hr",
    location: "Hyderabad, India",
    isSaved: false,
  },
  {
    id: 7,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zh_yIhlmebN21dN_TovNAg8OkbfsiF6y2J9htd2sMQYsWTGhKYhuQSc&s=10",
    company: "Spotify",
    postedAgo: "1 week ago",
    title: "UI Engineer",
    tags: ["Full Time", "Mid Level"],
    payRate: "$85/hr",
    location: "New York, NY",
    isSaved: false,
  },
  {
    id: 8,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/960px-Adobe_Acrobat_DC_logo_2020.svg.png?_=20220821153302",
    company: "Adobe",
    postedAgo: "6 days ago",
    title: "Visual Designer",
    tags: ["Freelance", "Senior Level"],
    payRate: "$100/hr",
    location: "Remote",
    isSaved: true,
  },
  {
    id: 9,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nliJRWGHCXGsp-Mc-Lzb1gSrCITubH-qnfzBDGHpmg&s=10",
    company: "Airbnb",
    postedAgo: "2 days ago",
    title: "Interaction Designer",
    tags: ["Full Time", "Mid Level"],
    payRate: "$90/hr",
    location: "Delhi, India",
    isSaved: false,
  },
  {
    id: 10,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r5Pp8196JW12Uxw4kiUZbcUEFFmoaJgQgNesHKkUCmbF9BlWturF2c0&s=10",
    company: "Uber",
    postedAgo: "3 days ago",
    title: "Product Engineer",
    tags: ["Full Time", "Senior Level"],
    payRate: "$115/hr",
    location: "Seattle, WA",
    isSaved: false,
  },
];

console.log(jobListings);

const App = () => {
  return (
    <div className="parent">
      {jobListings.map(function (el) {
        return (
          <Cards
            key={el.id}
            lo={el.logo}
            com={el.company}
            post={el.postedAgo}
            des={el.title}
            t1={el.tags[0]}
            t2={el.tags[1]}
            pay={el.payRate}
            loc={el.location}
          />
        );
      })}
    </div>
  );
};

export default App;
