import * as React from "react";
import { NavBar } from "../components/Navbar";
import { darkCardPage, pageStyles } from "../styles/global.module.css";
import { graphql, useStaticQuery } from "gatsby";

const faqCard = {
  border: "1px white solid",
  borderRadius: 8,
  padding: 12,
  textAlign: "left",
  lineSpacing: 2,
  marginTop: 20,
};
const faqText = {
  margin: 2,
};

const FAQ = () => {
  
  const data = useStaticQuery(graphql`
  {
    allPrismicFaqCard {
      nodes {
        data {
          faq_answer {
            text
          }
          faq_question {
            text
          }
        }
      }
    }
  }
  `);

  const faqData = data.allPrismicFaqCard.nodes

  return (
    <main className={pageStyles}>
      <NavBar />
      <div className={darkCardPage}>
        <h2>Frequently Asked Questions</h2>
        <h4>
          You may have questions or concerns about the use of you Multiplied By
          One account. Our contact email is certainly open to questions, though,
          the answers may be found in this FAQ.
        </h4>
        <div>
          {faqData.map((data, index) => (
            <div style={faqCard} key={"faqCard" + index}>
              <p style={faqText}>
                <strong>Question: </strong> 
                {data.data.faq_question.text}
              </p>
              <p style={faqText}>
                <strong>Answer: </strong>
                {data.data.faq_answer.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQ;
