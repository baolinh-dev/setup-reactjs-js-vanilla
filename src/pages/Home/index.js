import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHobby, removeHobby } from '~/actions/hobbyActions';
import casual from 'casual-browserify';

function Home() {
    const [hobby, setHobby] = useState('');
    const hobbies = useSelector((state) => state.hobby.hobbies);
    const dispatch = useDispatch();

    function handleAddHobby() {
        const newHobby = {
            hobbyId: casual.uuid,
            name: hobby,
        };
        const action = addHobby(newHobby);
        dispatch(action);
        setHobby(''); // Reset the input value after adding a hobby
    }

    function handleDeleteHobby(hobbyId) {
        const action = removeHobby(hobbyId);
        dispatch(action);
    }

    return (
        <>
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
        </>
    );
}

export default Home;
