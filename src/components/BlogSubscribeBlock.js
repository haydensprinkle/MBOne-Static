import * as React from 'react'
import { lightCard } from '../styles/global.module.css'

const subscribeBlock = {
    width: "50%",
    padding: 12,
    margin: "auto",
  };
  const subscribeInput = {
    color: "grey",
    backgroundColor: "#222222",
    border: "none",
    borderRadius: 5,
    boxShadow: "3px 3px 3px -1px black",
    width: "90%",
    height: 28,
    textAlign: "center",
    display: "block",
    margin: "auto",
  };
  const subscribeButton = {
    marginTop: 10,
    backgroundColor: "#343333",
    color: "white",
    border: "none",
  };

export const BlogSubscribeBlock = () => {
    return (
        <div style={subscribeBlock} className={lightCard}>
          <p style={{ margin: "0px 0px 8px 0px" }}>Subscribe to the Blog</p>
          <form style={{ justifyItems: "center" }}>
            <input placeholder="Email" style={subscribeInput}></input>
            <button type="button" style={subscribeButton}>
              Subscribe
            </button>
          </form>
        </div>
    )
}