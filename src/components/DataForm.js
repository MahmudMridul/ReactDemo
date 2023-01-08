import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../css/DataForm.module.css';
import Navigation from './layouts/Navigation';

export default function DataForm() {

    const navigate = useNavigate();
    const title = useRef();
    const url = useRef();
    const desc = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const titl = title.current.value;
        const img = url.current.value;
        const descrip = desc.current.value;

        const data = {
            title: titl,
            description: descrip,
            imageUrl: img
        };

        addData(data);
    }

    const addData = (data) => {
        fetch('https://fir-879e7-default-rtdb.asia-southeast1.firebasedatabase.app/demodata.json',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(( ) => {
            navigate('/');
        });
    }

    return(
        <div className='container'>
            <Navigation/>
            <h2>Add New Data</h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.control}>
                    <label htmlFor='title'>Title</label>
                    <input type='text' required id='title' ref={title}/>
                </div>

                <div className={style.control}>
                    <label htmlFor='image'>Image URL</label>
                    <input type='url' required id='url' ref={url}/>
                </div>

                <div className={style.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea required rows='5' id='description' ref={desc}></textarea>
                </div>

                <div className={style.actions}>
                    <button>Add</button>
                </div>
            </form>
        </div>
        
    );
}
