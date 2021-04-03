import React, { useState } from 'react';


export default function Pagination({ page }) {

    const [pageNo, setPageNo] = useState('1');

    // passing data to pagination
    page(pageNo);


    // for making active and pass the page value to pagination
    var pagination = document.querySelector('.pagination');
    var page = document.querySelectorAll('.page-item');
    page.forEach(el => {
        el.addEventListener('click', function () {
            pagination.querySelector('.active').classList.remove('active');
            el.classList.add('active');
            setPageNo(el.innerText);
        });
    });





    return (
        <div className="pagination-wrapper">
            <div className="pagination">
                <button className="page-item active">1</button>
                <button className="page-item">2</button>
                <button className="page-item">3</button>
            </div>
        </div>
    );
}