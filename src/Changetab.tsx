import React, { useState } from "react";

function TabApp() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const renderContent = () => {
    switch (selectedTab) {
      case "Home":
        return <p>Welcome</p>;
      case "About":
        return <p>About us</p>;
      case "Contact":
        return <p>Contact us at</p>;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.tabList}>
        {["Home", "About", "Contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              ...styles.tab,
              backgroundColor: selectedTab === tab ? "#007BFF" : "#f1f1f1",
              color: selectedTab === tab ? "#fff" : "#000",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={styles.content}>{renderContent()}</div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    padding: 20,
    maxWidth: 500,
    margin: "0 auto",
  },
  tabList: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
  },
  tab: {
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    borderRadius: 4,
    transition: "0.3s",
  },
  content: {
    border: "1px solid #ddd",
    padding: 20,
    borderRadius: 4,
  },
};

export default TabApp;
