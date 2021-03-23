import React from 'react';

const Form = () => (
    <form id="todoForm">
            <label htmlFor="titleTxt" id="titleLabel">Title</label><br></br>
            <input id="titleTxt" name="titleTxt" type="text"></input><br></br>
            <label htmlFor="contentTxt" id="contentLabel">Content</label><br></br>
            <textarea name="contentTxt" id="contentTxt" cols="30" rows="10"></textarea><br></br>
            <button type="button" id="addBtn">Add</button>
    </form>
);


export default Form;