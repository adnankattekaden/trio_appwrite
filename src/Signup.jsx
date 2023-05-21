// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSignUp = () => {
//     // Perform sign-up logic here
//     // For simplicity, let's just log the entered username and password
//     console.log('Username:', username);
//     console.log('Password:', password);

//     // Redirect to the main page
//     history.push('/main');
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
      
//     </div>
//   );
// };

// export default SignUp;
// // SignUp.js
// import React from 'react';

// const SignUp = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle sign-up logic here
//     // ...

//     // Navigate to the main page
//     window.location.href = '/';
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form >
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">
//           Sign Up
//         </button>
//       </form>
//       <form >
//         {/* Your sign-up form fields */}
//         {/* ... */}

//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
