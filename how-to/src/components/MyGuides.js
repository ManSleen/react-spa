import React, { useEffect } from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import GuideCard from "./GuideCard";
import { getGuides, getUsers } from "../store/actions";
import decode from "jwt-decode";

import "./MyGuides.css";
import MyGuidePosts from "./MyGuidePosts.js";
import Pagination from './Pagination.js';

const GuideContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LineDiv = styled.div`
  width: 353px;
  height: 8px;
  top: 9px;
  background: #5c5c5c;
  margin-bottom: 14px;
`;

// to edit with user's guide id
const handleClick = () => {
  console.log("guide clicked!");
};

let userId;
if (localStorage.token) {
  userId = decode(localStorage.getItem("token")).userId;
}

function MyGuides({ guides, users, getGuides, getUsers }) {

  useEffect(() => {
    getGuides();
    getUsers();
  }, [getGuides, getUsers]);

  return (
    <div>
      <GuideContainer>
        <Header as="h1">MY GUIDES</Header>
        <LineDiv>{/*grey line under the user card */}</LineDiv>

        {/* input sort/filter functionality here */}
        <p className-="sortTag">Sort/Filter</p>
        {guides && userId
          ? guides
              .sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at);
              })
              .filter(guide => guide.guide_auth_id === userId)
              .map((guide, index) => (
                <Link key={index} to={`/guide/${guide.id}`}>
                  <GuideCard key={index} users={users} guide={guide} />
                </Link>
              ))
          : null}

      </GuideContainer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    guides: state.guides,
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  { getGuides, getUsers }
)(MyGuides);


// const [posts, setPosts] = useState([]);
// const [loading, setLoading] = useState("false");
// const [currentPage, setCurrentPage] = useState(1);
// const [postsPerPage] = useState(3);

// useEffect(() => {
//   const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setPosts(res.data);
//       setLoading(false);
//   }

//   fetchPosts();
// }, []);

// // Get current posts
// const indexOfLastPost = currentPage * postsPerPage;                    
// const indexOfFirstPost = indexOfLastPost - postsPerPage;               
// const currentPosts2 = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page
// const paginate = pageNumber => setCurrentPage(pageNumber);

// Pagination function in return();
{/* <Pagination 
  postsPerPage={postsPerPage}
  totalPosts={posts.length}
  paginate={paginate}
/> */}