import React, { useState } from 'react';

export default function Proto(){
    const [ data, setData ] = useState('House');

    const fetchNewData = () => {
        let newData;
        
        fetch('/api/hello', {method: 'GET'})
            .then(jsonRes=>jsonRes.json())
            .then(response =>{
                console.log(response);
                setData(response.bulldozer);
            })
    }
    return (
        <div>
            <div>
                <p>Component Mounted</p>
                <button onClick={fetchNewData}>Yellow</button>
            </div>
            <div>
                {data}
            </div>
        </div>
    )
}