import  { useEffect, useState } from 'react';

const useBuyer = (email) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [email])
    return [isBuyer, isBuyerLoading]
};

export default useBuyer;

// import { useEffect, useState } from "react"

// const useBuyer = email => {
//     const [buyer, setBuyer] = useState(false);
    
//     useEffect(() => {
//         if (email) {
//             fetch(`http://localhost:5000/users/admin/${email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data);
//                     setBuyer(data.buyer);
//                     // setIsAdminLoading(false);
//                 })
//         }
//     }, [email])
//     return [buyer]
// }

// export default useBuyer;