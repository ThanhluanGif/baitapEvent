import React, { useState } from "react";

const App: React.FC = () => {
    const [count, setCount] = useState(0);
    
    const handleIncrement = () => {
        setCount((count) => count + 1);
    }

    const handleDerement = () => {
        setCount((count) => count - 1);
    }

    if (count < 0) {
        setCount(0); // Đặt lại count về 0 nếu nó nhỏ hơn 0
    }
    
    return (
        <>
            <button onClick={handleIncrement}> Tăng giá trị count</button>
            <button onClick={handleDerement}>Giảm giá trị count</button>
            <div>Giá trị hiện tại của count: {count}</div>
            
        </>
    )
};
export default App;