import { useState } from 'react';

export const Card = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="card">
            <h2>Card</h2>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    );
};
