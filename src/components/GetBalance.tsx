import { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap'

const GetBalance = () => {
    const [address, setAddress] = useState<null |string>(null);
    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(()=>{
    },[address])
    
    const handleInputChange=() => {
        if(inputRef.current)
        setAddress(inputRef.current.value);
    }
    console.log({address});
    return (
        <>
            <div style={{
                maxWidth: '700px',
                margin: '0 auto',
                marginTop: '20px'
            }}>
                <h4 className='text-center mt-2'>Balance</h4>

                <Form.Label htmlFor="basic-url">Address</Form.Label>
                <Form.Control
                    aria-label="Default"
                    placeholder="Enter Address"
                    type="text"
                    name='account'
                    aria-describedby="inputGroup-sizing-default"
                    // value={address} onChange={(event) => setAddress(event?.target.value)
                    // }
                    ref={inputRef}
                />
                <div className="w-50 mt-3 mx-auto">
                    <button className="btn btn-primary w-100" onClick={handleInputChange} >Get Balance</button>
                </div>
            </div>
        </>
    )
}

export default GetBalance