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



export interface UserDataFromApi {
  access_token: string;
}

export class FetchDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FetchDataError";
  }
}

export enum MethodType{
   GET = 'GET',
   POST = 'POST',
   PATCH = 'PATCH',
   PUT = 'PUT',
   DELETE = 'DELETE'
}
 
export const fetchDataFromApi = async (
  url: string,
  user: UserDataFromApi,
  methodType: MethodType,
  body: unknown | null,
  errorMsg: string
) => {
  try {
    const headers = {
      Authorization: `Bearer ${user.access_token}`,
      "Content-Type": "application/json",
    };
 
    const options = {
      method: methodType,
      headers,
      body: body ? JSON.stringify(body) : null,
    };
 
    const response = await fetch(url, options);
 
    if (!response.ok) {
      const errorData = await response.json();
      throw new FetchDataError(`${errorMsg}: ${errorData.message}`);
    }
 
    const data = await response.json();
 
    return data;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
};