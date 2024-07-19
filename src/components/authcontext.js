// import React, { createContext, useContext, useState } from 'react';

// // Dummy users data for demonstration
// const usersData = {
//   standardUser: {
//     username: 'johnsmith',
//     first_name: 'John',
//     last_name: 'Smith',
//     password: '1234',
//     partner_code: 'AMEX',
//     member_id: '2153642985',
//     bankAccount: '1234-5678-9012',
//     memberType: 'Standard',
//     amount: '69',
//     bankAccountDetails: [
//       {
//         year: 2023,
//         transactions: [
//           { date: '2023-01-01', amount: 1000 },
//           { date: '2023-02-01', amount: 1200 },
//           { date: '2023-03-01', amount: 800 },
//           { date: '2023-04-01', amount: 1100 },
//           { date: '2023-05-01', amount: 900 },
//           { date: '2023-06-01', amount: 1300 },
//           { date: '2023-07-01', amount: 1500 },
//           { date: '2023-08-01', amount: 1400 },
//           { date: '2023-09-01', amount: 1000 },
//           { date: '2023-10-01', amount: 1100 },
//           { date: '2023-11-01', amount: 1200 },
//           { date: '2023-12-01', amount: 1300 },
//         ],
//       },
//       {
//         year: 2022,
//         transactions: [
//           { date: '2022-01-01', amount: 950 },
//           { date: '2022-02-01', amount: 1100 },
//           { date: '2022-03-01', amount: 850 },
//           { date: '2022-04-01', amount: 1050 },
//           { date: '2022-05-01', amount: 800 },
//           { date: '2022-06-01', amount: 1250 },
//           { date: '2022-07-01', amount: 1400 },
//           { date: '2022-08-01', amount: 1300 },
//           { date: '2022-09-01', amount: 900 },
//           { date: '2022-10-01', amount: 1050 },
//           { date: '2022-11-01', amount: 1150 },
//           { date: '2022-12-01', amount: 1250 },
//         ],
//       },
//     ],
//   },
//   blackCardMember: {
//     username: 'janesmith',
//     first_name: 'Jane',
//     last_name: 'Smith',
//     password: '1234',
//     partner_code: 'VISA',
//     member_id: '1567894821',
//     bankAccount: '9876-5432-1098',
//     memberType: 'Black Card',
//     amount: '3032000',
//     bankAccountDetails: [
//       {
//         year: 2023,
//         transactions: [
//           { date: '2023-01-01', amount: 5000 },
//           { date: '2023-02-01', amount: 7000 },
//           { date: '2023-03-01', amount: 8000 },
//           { date: '2023-04-01', amount: 6000 },
//           { date: '2023-05-01', amount: 5500 },
//           { date: '2023-06-01', amount: 7500 },
//           { date: '2023-07-01', amount: 6800 },
//           { date: '2023-08-01', amount: 7000 },
//           { date: '2023-09-01', amount: 7200 },
//           { date: '2023-10-01', amount: 6300 },
//           { date: '2023-11-01', amount: 8100 },
//           { date: '2023-12-01', amount: 8500 },
//         ],
//       },
//       {
//         year: 2022,
//         transactions: [
//           { date: '2022-01-01', amount: 4500 },
//           { date: '2022-02-01', amount: 6200 },
//           { date: '2022-03-01', amount: 7500 },
//           { date: '2022-04-01', amount: 5300 },
//           { date: '2022-05-01', amount: 6800 },
//           { date: '2022-06-01', amount: 7900 },
//           { date: '2022-07-01', amount: 7200 },
//           { date: '2022-08-01', amount: 6100 },
//           { date: '2022-09-01', amount: 7300 },
//           { date: '2022-10-01', amount: 7800 },
//           { date: '2022-11-01', amount: 8000 },
//           { date: '2022-12-01', amount: 8400 },
//         ],
//       },
//     ],
//   },
// };

// // Create the context
// const AuthContext = createContext();

// // Create the provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(usersData.standardUser); // Set initial user

//   const authenticate = async (username, password) => {
//     // Simulate authentication logic
//     const foundUser = Object.values(usersData).find(
//       (userData) => userData.username === username && userData.password === password
//     );

//     if (foundUser) {
//       setUser(foundUser);
//       return true;
//     } else {
//       return false;
//     }
//   };

//   const signUp = (userData) => {
//     // Check if the user already exists in usersData
//     let newUser = usersData[userData.username];

//     if (!newUser) {
//       // If user does not exist, create a new user with hardcoded values
//       newUser = {
//         ...userData,
//         amount: 0,
//         memberType: 'New member', // Hardcoded member type
//         bankAccountDetails: [
//           {
//             year: 2024, // Assuming transactions for current year
//             transactions: [
//               { date: '2024-01-01', amount: 200 },
//               { date: '2024-02-01', amount: 300 },
//               { date: '2024-03-01', amount: 400 },
//             ],
//           },
//         ],
//       };

//       // Add new user to usersData
//       usersData[userData.username] = newUser;
//     }

//     setUser(newUser); // Set the new or existing user as current user
//   };

//   const logout = () => {
//     setUser(null); // Clear the user state to simulate logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, authenticate, signUp, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// CODE ABOVE IS HARDCODE
// CODE BELOW IS USING BACKEND

// import React, { createContext, useContext, useState } from 'react';

// // Create the context
// const AuthContext = createContext();

// // Create the provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Initialize user as null

//   const authenticate = async (username, password) => {
//     try {
//       // Authenticate user credentials from the first database
//       const authResponse = await fetch(`http://weloveesc.xukaiteo.com:8001/user/auth`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ "username": username, "password": password }),
//       });
//       const authData = await authResponse.json();
//       console.log('Authentication response:', authData);

//       if (authResponse.ok && authData.verified) {
//         setUser(authData);
//         return true;
//       } else {
//         console.error('Authentication failed:', authData.message || 'Invalid credentials');
//         return false;
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error);
//       return false;
//     }
//   };

//   const signUp = async (userData) => {
//     try {
//       // Check if the user already exists in the first database
//       const checkResponse = await fetch(`http://weloveesc.xukaiteo.com:8001/auth`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: userData.username }),
//       });
//       const checkData = await checkResponse.json();

//       if (checkData.exists) {
//         console.error('Username already exists');
//         return false;
//       }

//       // Add new user to the first database
//       const signUpResponse = await fetch(`http://weloveesc.xukaiteo.com:8001/user/add`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!signUpResponse.ok) {
//         throw new Error('Error adding new user to the first database');
//       }

//       const newUserAuthData = await signUpResponse.json();

//       setUser(newUserAuthData); // Set the new user as current user
//       return true;
//     } catch (error) {
//       console.error('Error during sign up:', error);
//       return false;
//     }
//   };

//   const logout = () => {
//     setUser(null); // Clear the user state to simulate logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, authenticate, signUp, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use the AuthContext
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// CODE BELOW IS NEW

import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [cards, setCards] = useState([]);
  const [user_id, setUserId] = useState('');
  const [starpoints, setStarpoints] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [airlineCode, setAirlineCode] = useState('');
  const [reference, setReference] = useState('');
  const [transaction_date, setDate] = useState('');
  const [creditHistory, setCreditHistory] = useState([]); // New state for credit history

  const updateStarpoints = (newStarpoints) => {
    setStarpoints(newStarpoints);
  };
  

  const fetchUserData = async (userId) => {
    try {
      const userResponse = await fetch(`http://weloveesc.xukaiteo.com:8001/user/get?user_id=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await userResponse.json();
      console.log('Fetched user data:', userData);

      setEmail(userData.email);
      setUserId(userData.user_id);

      const secondDBResponse = await fetch(`http://weloveesc.xukaiteo.com:8000/credit/get_by_email?email=${encodeURIComponent(userData.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!secondDBResponse.ok) {
        throw new Error('Failed to fetch credit history');
      }

      const secondDBData = await secondDBResponse.json();
      console.log('Second database response:', secondDBData);

      setCreditHistory(secondDBData);
      setAmount(userData.amount);
      setStatus(userData.status);
      setAirlineCode(userData.airline_code);
      setReference(userData.reference);
      setDate(userData.transaction_date);

      await fetchCardData(userData.user_id);

      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

  const fetchCardData = async (userId) => {
    try {
      const cardResponse = await fetch(`http://weloveesc.xukaiteo.com:8001/card/get_cards?user_id=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId }),
      });

      if (!cardResponse.ok) {
        throw new Error('Failed to fetch card data');
      }

      const cardData = await cardResponse.json();
      console.log('Fetched card data:', cardData);

      setCards(cardData);

      return cardData;
    } catch (error) {
      console.error('Error fetching card data:', error);
      throw error;
    }
  };

  const validateCardName = async (userId, cardName) => {
    try {
      const cardResponse = await fetch(`http://weloveesc.xukaiteo.com:8001/card/get_cards?user_id=${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId }),
      });
  
      if (!cardResponse.ok) {
        throw new Error('Failed to fetch card data');
      }
  
      const cardData = await cardResponse.json();
      console.log('Fetched card data:', cardData);
  
      return cardData.some(card => card.card_name === cardName);
    } catch (error) {
      console.error('Error fetching card data:', error);
      throw error;
    }
  };

  const authenticate = async (username, password) => {
    try {
      const authResponse = await fetch(`http://weloveesc.xukaiteo.com:8001/user/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const authData = await authResponse.json();
      console.log('Authentication response:', authData);
      console.log('User ID:', authData.user_id);
      console.log('authdata', authData);
  
      if (authResponse.ok && authData.verified) {
        setUser(authData);
  
        try {
          const userData = await fetchUserData(authData.user_id);
  
          try {
            const secondDBResponse = await fetch(`http://weloveesc.xukaiteo.com:8000/credit/get_by_email?email=${encodeURIComponent(userData.email)}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });
  
            if (secondDBResponse.ok) {
              const secondDBData = await secondDBResponse.json();
              console.log('Second database response:', secondDBData);
  
              if (secondDBData.length > 0) {
                const firstItem = secondDBData[0];
                console.log('First item:', firstItem);
                setStarpoints(firstItem.starpoints);
                setStatus(firstItem.status);
                setAirlineCode(firstItem.airline_code);
                setReference(firstItem.reference);
              } else {
                console.log('No credit history found for this user.');
              }
            } else {
              console.log('No credit history found for this user.');
            }
          } catch (creditError) {
            console.error('Error fetching credit history:', creditError);
          }
  
          // Fetch card data
          await fetchCardData(userData.user_id);
          
          // Ensure starpoints are set to 1000 if not already set
          if (!userData.starpoints) {
            setStarpoints(1000);
          }
  
        } catch (userDataError) {
          console.error('Error fetching user data:', userDataError);
        }
  
        return true;
      } else {
        console.error('Authentication failed:', authData.detail || 'Invalid credentials');
        return false;
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      return false;
    }
  };
  
  
  const signUp = async (userData) => {
    try {
      const checkResponse = await fetch(`http://weloveesc.xukaiteo.com:8001/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userData.username }),
      });
  
      const checkData = await checkResponse.json();
  
      if (checkData.exists) {
        console.error('Username already exists');
        return false;
      }
  
      // Add starpoints to userData before sending it to the server
      userData.starpoints = 1000;
  
      const signUpResponse = await fetch(`http://weloveesc.xukaiteo.com:8001/user/add_user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!signUpResponse.ok) {
        throw new Error('Error adding new user to the first database');
      }
  
      const newUserAuthData = await signUpResponse.json();
      setUser(newUserAuthData);
  
      // Set starpoints for the new user
      setStarpoints(1000);
  
      await fetchCardData(newUserAuthData.user_id);
  
      return true;
    } catch (error) {
      console.error('Error during sign up:', error);
      return false;
    }
  };
  

  const logout = () => {
    setUser(null);
    setAmount(null);
    setStatus(null);
    setAirlineCode(null);
    setReference(null);
    setCards(null);
    setStarpoints(1000);
    console.log("User has been logged out and state has been cleared.");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        email,
        cards,
        user_id,
        amount,
        status,
        airlineCode,
        reference,
        creditHistory,
        starpoints,
        setUser,
        authenticate,
        signUp,
        logout,
        validateCardName,
        updateStarpoints
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};





    

