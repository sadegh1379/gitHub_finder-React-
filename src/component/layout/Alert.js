import React from 'react'

const Alert = ({alert}) => {
    return (
        alert !== null && (<div className={`alert alert-${alert.type} text-danger mt-2`}>
            <i className="fa text-danger fa-info-circle pr-2"></i>{alert.msg}
        </div>)
        
    )
}
export default Alert;
