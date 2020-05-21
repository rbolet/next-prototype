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

const postDolphins = ()=>{
    fetch('/api/hello', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({dolphins: 'so long and thanks for all the fish!'})
    })
}

    return (
        <div>
            <div>
                <p>Component Mounted</p>
                <button onClick={fetchNewData}>Yellow</button>
                <button onClick ={postDolphins}>Dolphins</button>
            </div>
            <div>
                {data}
            </div>
        </div>
    )
}