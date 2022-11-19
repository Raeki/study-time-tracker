// Dependencies
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Components
import AllTopics from './components/AllTopics/AllTopics';
import Categories from './components/Categories/Categories';
import Topic from './components/Sessions/Sessions';
import Login from './components/Auth/Login';
import NavigationBar from './components/Navigation/NavigationBar';

// MUI Components
import Container from '@mui/material/Container';

export default function App() {
  // useStates
  const [topicID, setTopicID] = useState();
  const [topicName, setTopicName] = useState();
  const [topicGoal, setTopicGoal] = useState();
  const [categoryID, setCategoryID] = useState();
  const [categoryName, setCategoryName] = useState();
  const [categoryGoal, setCategoryGoal] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Container>
      <NavigationBar
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        topicName={topicName}
        setTopicName={setTopicName}
      />
      <Routes>
        <Route
          path='/categories'
          element={
            <Categories
              setCategoryID={setCategoryID}
              setCategoryName={setCategoryName}
              setCategoryGoal={setCategoryGoal}
            />
          }
        />
        <Route
          path='/all-topics'
          element={
            <AllTopics
              categoryID={categoryID}
              setTopicID={setTopicID}
              setTopicName={setTopicName}
              setTopicGoal={setTopicGoal}
            />
          }
        />
        <Route
          path='/topic'
          element={
            <Topic
              topicID={topicID}
              topicName={topicName}
              topicGoal={topicGoal}
              setTopicGoal={setTopicGoal}
            />
          }
        />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Container>
  );
}
