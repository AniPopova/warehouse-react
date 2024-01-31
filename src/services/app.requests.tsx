// import axios from 'axios';
// import { useState, useEffect } from "react";

// interface User {
//   id: string;
//   username: string;
//   email: string;
//   userRole: string;
// }

// interface UsersState {
//   users: User[] | null;
//   loading: boolean;
//   error: string | null;
// }

// const useUsers = (): UsersState => {
//   const [state, setState] = useState<UsersState>({
//     users: null,
//     loading: true,
//     error: null,
//   });

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:3000/user"
//         );
//         const users = await response.json();
//         setState({ users, loading: false, error: null });
//       } catch (error) {
//         setState({ users: null, loading: false, error: error.message });
//       }
//     };

//     fetchUsers();
//   }, []);

//   return state;
// };

// function UserList() {
//   const { users, loading, error } = useUsers();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <ul>
//       <li>
//         {users?.map((user) => (
//           <div key={user.id}>
//             <p>{user.username}</p>
//             <p>{user.email}</p>
//             <p>{user.userRole}</p>
//           </div>
//         ))}
//       </li>
//     </ul>
//   );
// }

// export default UserList;