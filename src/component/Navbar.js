import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Input, Link } from "@mui/material";
import { Button } from "@mui/material";
import "../Css/Navbar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import Modal from "react-modal";
import PeopleAltOutlined from "@mui/icons-material/PeopleAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddLinkIcon from "@mui/icons-material/AddLink";
import {doc, getDoc, getDocs , addDoc, collection, serverTimestamp } from "firebase/firestore";

Modal.setAppElement("#root");
function Navbar({currentLink, setCurrentLink, setLoading, setPosts, IsmodalOpen, setIsModalOpen}) {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    addQuestion(input, user, inputUrl);
    setInput("");
    setInputUrl("");
  };


  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchInput);
    // setPosts()
    const data = await getLatestData();
    console.log(data);
    if(data){
      const filteredData = data.filter((post) => {
        // console.log(post)
        return post.questions.question.toLowerCase().includes(searchInput.toLowerCase().trim());
      });
      console.log("filtered data", filteredData);
      setPosts(filteredData);
    }
    setSearchInput("");
  }

  async function fetchAllQuestions(){
    try{
      const allQuestions = await getLatestData();
      setPosts(allQuestions)
    }catch(error){
      console.log("error while fetching all questions");
    }
  }

  async function getLatestData() {
    const collectionRef = collection(db, "questions");
    const querySnapshot  = await getDocs(collectionRef);
    try{
      const questions = [];
      querySnapshot .forEach((doc) => {
        questions.push({
          id: doc.id,
          questions: doc.data(),
        });
        console.log("Document data:", doc.data());
      })
      console.log("all data", questions);
      return questions;
    }catch(error){
      console.log("No such document!");
      return null;
    }
  }
  
  const questionsCollectionRef = collection(db, "questions");
  const addQuestion = async (input, user, inputUrl) => {
    try {
      const docRef = await addDoc(questionsCollectionRef, {
        question: input,
        imageUrl: inputUrl,
        timestamp: serverTimestamp(),
        user: user,
      });
      console.log("Question added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding question: ", e);
    }
  };

  return (
    <div className="qHeader">
      <div className="qHeader__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt=""
        />
      </div>
      <div className="qHeader__icons">
        <div onClick={() => {setCurrentLink("HomeIcon");setLoading(false); fetchAllQuestions()}} className={`qHeader__icon ${currentLink === "HomeIcon" && "selected"}`}>
          <HomeIcon />
        </div>
        <div onClick={() => setCurrentLink("FeaturedPlayListOutlinedIcon")} className={`qHeader__icon ${currentLink === "FeaturedPlayListOutlinedIcon" && "selected"}`}>
          <FeaturedPlayListOutlinedIcon />
        </div>
        <div onClick={() => setCurrentLink("AssignmentTurnedInOutlinedIcon")} className={`qHeader__icon ${currentLink === "AssignmentTurnedInOutlinedIcon" && "selected"}`}>
          <AssignmentTurnedInOutlinedIcon />
        </div>
        <div onClick={() => setCurrentLink("PeopleAltOutlinedIcon")} className={`qHeader__icon ${currentLink === "PeopleAltOutlinedIcon" && "selected"}`}>
          <PeopleAltOutlinedIcon />
        </div>
        <div onClick={() => setCurrentLink("NotificationsOutlinedIcon")} className={`qHeader__icon ${currentLink === "NotificationsOutlinedIcon" && "selected"}`}>
          <NotificationsOutlinedIcon />
        </div>
      </div>
      <form onSubmit={handleSearch}>
      <div className="qHeader__input">
        <SearchIcon />
        <input value={searchInput} onChange={e => setSearchInput(e.target.value)} type="text" placeholder="Search Quora" />
      </div>
      </form>
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar
            onClick={() => auth.signOut()}
            src={user.photo}
            imgProps={{ referrerPolicy: "no-referrer" }}
          />
        </div>
        
        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              postion: "fixed",
              inset : "0",
            },
          }}
        >
          <div className="moda__body">
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
            <button style={{marginLeft: "auto" , background: "transparent", outline : "none", cursor: "pointer", fontSize : "22px", fontWeight: "900", color: "red"}} onClick={() => setIsModalOpen(false)}>X</button>
          </div>
          <div className="modal__info">
            <Avatar className="avatar" src={user.photo} />
            <p>{user.displayName ? user.displayName : user.email} asked </p>
            <div className="modal__scope">
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMoreIcon />
            </div>
          </div>
          <div className="modal__Field">
            <Input
              required
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What','How','Why',etc."
            />
            <div className="modal__fieldLink">
              <AddLinkIcon />
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: include a link that gives context"
              />
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button onClick={handleQuestion} type="submit" className="add">
              Add Question
            </button>
          </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
