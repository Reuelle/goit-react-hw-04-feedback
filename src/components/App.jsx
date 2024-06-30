import React, { Component } from "react";

import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";



export function App() {
  const[state, setstate] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  const handleClick = type => {
    setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };
    const total = countTotalFeedback();

    const countPositiveFeedbackPercentage = () => {
      const { good } = state;
      return + ((good / total) * 100).toFixed();
      
  };
    const options = ['good', 'neutral', 'bad'];
    const { good, neutral, bad } = state;

    return (
      <div className="container">
      <Section title="Please leave feedback">
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedback}
          />
        ) : (
        <Notification message = "There is no feedback"/>
        )}
        </Section>section>
          </div>
      );
    )


