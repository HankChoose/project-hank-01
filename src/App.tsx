import React, { useState } from 'react';
import styles from './App.module.scss';
import { Label } from './components/label/label';
import { Button } from './components/button/button';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from './components/link/link';
import { Inputpw } from './components/inputpw/inputpw';
import Input_module from './components/input/input.module.scss';
import Classnames from 'classnames';
import { Input } from './components/input/input';

function App() {
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [action, setAction] = useState('login');
    const csrfToken = Cookies.get('csrftoken'); // 获取 CSRF token
    /*
    function handleOnSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log('event', event);
    }
    */
    const handleOnSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userData = { email, password };
        try {
            // 设置CSRF令牌作为请求头
            const config = {
                headers: {
                    'X-CSRFToken': csrfToken, // 你的CSRF令牌的名称可能不同
                },
            };
            const response = await axios.post('/send-data/', userData, config);

            //const response = await axios.post(`/api/${action}/`, userData);
            //console.log('Response:',response.data.message);
            console.log('Response from Django:', response.data);
        } catch (error) {
            //console.error(error);
            console.error('Error sending data to Django:', error);
        }
    };
    return (
        <div className={styles.App}>
            <h1>Sign in to Zhiyouyuec</h1>
            <form onSubmit={handleOnSubmit}>
                <Label htmlFor={'email'}>Email</Label>
                <Input className={Classnames(Input_module.input)} id={''} name={''} />
                <Label htmlFor={'password'}>Password</Label>
                <Inputpw />
                <Button>Sign in</Button>No account yet?<Link>Register</Link>
            </form>
        </div>
    );
}

export default App;
