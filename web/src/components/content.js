import React, { useRef, useEffect, useState } from "react";

function Content({ messages, setMessages }) {
  const contentRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [answers, setAnswers] = useState({
    "Link 1": "ABC",
    "Link 2": "DEF",
    "Link 3": "XYZ",
  });

  useEffect(() => {
    // Scroll to the bottom of the content area when messages change
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Scroll to the bottom when new answers arrive
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [answers]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = () => {
    if (inputValue.trim() !== "") {
      setMessages([
        ...messages,
        { question: inputValue, answer: answers[inputValue] || "TBA" },
      ]);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleInputSubmit();
    }
  };

  return (
    <div
      ref={contentRef} // Assign ref to the main content div
      style={{
        position: "fixed",
        top: "8vh",
        left: "250px",
        height: "85%",
        width: "calc(100% - 250px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "#5d4954 #6d5b65",
      }}
    >
      {/* Main Content */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(to bottom right, #6d5b65, #ffffff)",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        {/* Messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#4A3A43",
              color: "#fff",
              padding: "10px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            <div>{message.question}</div>
            {message.answer && (
              <div
                style={{
                  backgroundColor: "#63555C", // lighter background color for answers
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                  marginTop: "10px",
                }}
              >
                {message.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            margin: "20px",
            marginLeft: "5px",
            marginRight: "20px",
            marginTop: "5px",
            color: "black",
            position: "sticky", // Change to sticky position
            bottom: 0,
            width: "calc(100% - 40px)",
          }}
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            style={{
              width: "100%", // Adjust the width to match the content area
              padding: "10px",
              borderRadius: "100px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              fontSize: "20px",
              cursor: "pointer",
              color: "white",
              backgroundColor: "black",
              padding: "2px 12px",
              borderRadius: "5px",
            }}
            onClick={handleInputSubmit}
          >
            ↵
          </span>
        </div>
      </div>
    </div>
  );
}

export default Content;
