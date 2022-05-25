import React from 'react'
import './lesson_4';
import {createHandler, rejectHandler, resolveHandler} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={createHandler}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolveHandler}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectHandler}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;