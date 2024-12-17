import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';
import { RiInformationLine } from "react-icons/ri";


const ThankyouPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log('  location ', location)

    return (
        <div className="thank-you-page sec-eleven-about bg-light">
            {location.state && location.state.status === 'success' ? (<div className="thank-you-content">
                <IoMdCheckmarkCircleOutline />
                <h1>Thank you!</h1>
                <p>Thank you for registering for our webinar. We will get back to you soon.</p>
                <div className='mt-4 button-pane'>
                    <button className="btn btn-primary" onClick={() => navigate("/")} >
                        Go to Homepage
                    </button>
                </div>
            </div>) : (

                <div className='thank-you-expired'>
                    <RiInformationLine />
                    <h1>Your Registration is already submitted or expired</h1>
                    <div className='mt-4 button-pane'>
                        <button className="btn btn-primary" onClick={() => navigate("/")} >
                            Go to Homepage
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ThankyouPage