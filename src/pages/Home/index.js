import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHobby, removeHobby } from '~/actions/hobbyActions';
import casual from 'casual-browserify';
import { addUser, removeUser } from '~/actions/userActions';

function Home() {
    const [hobby, setHobby] = useState('');
    const [user, setUser] = useState('');

    const hobbies = useSelector((state) => state.hobby.hobbies);
    const users = useSelector((state) => state.user.users);
    const dispatch = useDispatch();

    function handleAddHobby() {
        const newHobby = {
            hobbyId: casual.uuid,
            name: hobby,
        };
        dispatch(addHobby(newHobby));
        setHobby(''); // Reset the input value after adding a hobby
    }

    function handleDeleteHobby(hobbyId) {
        const action = removeHobby(hobbyId);
        dispatch(action);
    }

    const handleAddUser = (user) => {
        console.log('user', user);
        const newUser = {
            name: user,
            userId: casual.uuid,
        };
        dispatch(addUser(newUser));
        setUser('');
    };

    const handleDeleteUser = (userId) => {
        dispatch(removeUser(userId));
    };

    return (
        <>
            <div>
                <h3>Thêm sở thích</h3>
                <input
                    placeholder="Nhập sở thích của bạn vào đây"
                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                />

                <button onClick={() => handleAddHobby()}>Thêm sở thích</button>

                <ul>
                    {hobbies.map((hobby, index) => (
                        <li key={index}>
                            {hobby.name}
                            <button onClick={() => handleDeleteHobby(hobby.hobbyId)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Thêm người dùng</h3>
                <input value={user} onChange={(e) => setUser(e.target.value)} placeholder="Thêm người dùng" />
                <button onClick={() => handleAddUser(user)}>Thêm</button>
                {users.map((user) => (
                    <>
                        <li>{user.name}</li>
                        <button onClick={() => handleDeleteUser(user.userId)}>Delete</button>
                    </>
                ))}
            </div>
        </>
    );
}

export default Home;
