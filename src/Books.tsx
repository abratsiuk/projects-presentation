import { useState } from 'react';

export const Books = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="books">
            <h2>Books</h2>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    );
};
