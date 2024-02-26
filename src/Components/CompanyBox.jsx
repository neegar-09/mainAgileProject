import React from 'react'

const CompanyBox = () => {
    return (
        // <div style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', borderRadius: '10px', padding: '20px', marginBottom: '20px' }}>
        //     <div style={{ border: '2px #51B5C3', padding: '10px', borderRadius: '10px', marginBottom: '20px' }}>
        //         Company Logo
        //         <div style={{ width: '100px', height: '100px', border: '2px solid #51B5C3', borderRadius: '10px', margin: '0 auto', marginBottom: '20px' }}>
        //             Company logo
        //         </div>
        //         Two Texts

        //     </div>
        // </div>
        <div style={{ display: 'flex', alignItems: 'center', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', borderRadius: '10px', padding: '0px 20px', marginBottom: '20px' }}>
            <div>
                <p style={{fontSize: 'larger', fontWeight: 'bold'}}>Company Name</p>
                <p style={{fontWeight: 'bold'}}>Customer ID: 00000000</p>
            </div>
            <div style={{ border: '2px #51B5C3', borderRadius: '10px'}}>
                <img src="src\assets\AGILE-SOLUTIONS-1-1024x725-1 2.png" alt="" />
            </div>
        </div>

    )
}

export default CompanyBox