import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/navBar";
import SearchBar from "./Components/searchBar";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Create from "./Pages/Create";
import Contact from "./Pages/Contact";
import LandingPage from "./Pages/LandingPage";
import Detail from "./Pages/Details";
import List from "./Pages/List";
import NotFound from "./Pages/NotFound";
import "./App.css";
// import memberAvatar1 from "./Avatars/948109384092365287346502.PNG";
// import ma1 from "./Avatars/948109384092365287346502.PNG";
const members = [
  {
    id: 1,
    name: "Jonathan Reed",
    description: "Tenshin",
    role: "Core Member",
    avatar: "../Avatars/948109384092365287346502.PNG",
  },
  {
    id: 2,
    name: "Jason Vo",
    description: "Wakibara",
    role: "Founding Member",
    avatar: "../Avatars/948109384092365287346502.PNG",
  },
  {
    id: 3,
    name: "David Nguyen",
    description: "Full Fat Ape",
    role: "Core Member",
    avatar: "../Avatars/395246756_1502977017159293_6741642917794917061_n.jpg",
  },
  {
    id: 4,
    name: "Alex Chen",
    description: "Panda86",
    role: "Founding Member",
    avatar: "../Avatars/406801190_1208460693876560_4582260312937556468_n.jpg",
  },
  {
    id: 5,
    name: "Oswaldo Lopez",
    description: "OZwaldBRO",
    role: "Core Member",
    avatar: "../Avatars/409980291_2022399098142365_3882556214359910732_n.jpg",
  },
  {
    id: 6,
    name: "Alan Castaneda",
    description: "Hunbun",
    role: "Core Member",
    avatar: "../Avatars/417047191_231137770031916_5382987639003497828_n.jpg",
  },
  {
    id: 7,
    name: "Brian Castaneda",
    description: "SupaNawi",
    role: "New Member",
    avatar: "../Avatars/426253763_706655768330818_8975535464914862076_n.jpg",
  },
  {
    id: 8,
    name: "D'leon Pate",
    description: "Solar",
    role: "New Member",
    avatar: "../Avatars/426387448_3541900256062296_5005355873785177820_n.jpg",
  },
  {
    id: 9,
    name: "Justin Grover",
    description: "Vulcan",
    role: "New Member",
    avatar: "../Avatars/426454249_429584996062242_6107707124821039345_n.jpg",
  },
  {
    id: 10,
    name: "Aaron Grover",
    description: "Tabrelik",
    role: "New Member",
    avatar: "../Avatars/426530848_1158291698873886_2496420779406267607_n.jpg",
  },
];
const MembersContext = createContext();
function App() {
  const [membersList, setMembers] = useState(members);
  function createNewMember(member) {
    member.id = membersList.length + 1;
    setMembers([...membersList, member]);
  }
  const [filteredMembers, setFilteredMembers] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = membersList.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMembers(filtered);
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Header></Header>
        <MembersContext.Provider value={{ membersList, createNewMember }}>
          <div>
            <SearchBar onSearch={handleSearch} />
            <List members={filteredMembers} />
          </div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/members/:id" element={<Detail />} />
            <Route path="/members/create" element={<Create />} />
            <Route path="/members" element={<List />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MembersContext.Provider>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
export { MembersContext };
