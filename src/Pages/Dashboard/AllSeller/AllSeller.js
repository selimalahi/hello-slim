import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';

const AllSeller = () => {
    const {data: allusers = [], refetch } =useQuery({
        queryKey:['allusers'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/allusers?role=seller');
            const data = await res.json();
            return data;
        }
    });


    // delete 

    const [deletingseller, setDeletingseller] = useState(null);

    const closeModal = () => {
      setDeletingseller(null);
    };


    const handleDeleteseller = user =>{
      fetch(`http://localhost:5000/seller/${user._id}`, {
              method: 'DELETE', 
              headers: {
                  authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
          })
          .then(res => res.json())
          .then(data => {
  
            if(data.deletedCount > 0){
              refetch();
              toast.success(`seller ${user.name} deleted successfully`)
          }
            
          })
    }
    // const { data: seller = [], refetch } = useQuery({
    //   queryKey: ["seller"],
    //   queryFn: async () => {
    //     const res = await fetch("http://localhost:5000/seller");
    //     const data = await res.json();
    //     return data;
    //   },
    // });


  

    return (
        <div>
        <h2 className="text-3xl">All seller</h2>
  
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allusers.map((seller, i) => (
                <tr key={seller._id}>
                  <th>{i + 1}</th>
                  <td>{seller.name}</td>
                  <td>{seller.email}</td>
                  <td>{seller.role}</td>
                  
                  <td>
                  <label
                    onClick={() => setDeletingseller(seller)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {deletingseller && (
        <ConfirmationModal
          title={`Are you sure you want to delete`}
          message={`If you Delete ${deletingseller.name}. it cannot be undone`}
          successAction = {handleDeleteseller}
          successButtonName="Delete"
          modalData = {deletingseller}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
      </div>
    );
};

export default AllSeller;