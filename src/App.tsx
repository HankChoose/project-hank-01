import { useState } from 'react';
import styles from './App.module.scss';
import { Input } from './components/input/input';
import { Button } from './components/button/button';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <form>
                <label>Name</label>
                <Input />
                <label>Email</label>
                <Input />
                <label>Password</label>
                <input type="password" />
                <Button />
            </form>
        </div>
    );
}

export default App;
