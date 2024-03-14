import React from 'react'

const Box = (props) => {


    return (
        <div style={{ textAlign: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', borderRadius: '10px', padding: '20px', marginBottom: '20px', height: '150px' }}>
            <p style={{ fontSize: 'x-large', fontWeight: 'bold' }}>{props.title}</p>
            <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>{props.value}</p>
        </div>
    )
}

export default Box