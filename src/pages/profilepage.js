import React, { useState, useEffect } from 'react';
import { useAuth } from '../components/authcontext'; // Adjust the import path as needed
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, email, cards, user_id, amount, status, airlineCode, reference, starpoints } = useAuth();
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [spendingData, setSpendingData] = useState({});
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const navigate = useNavigate(); // Correctly define navigate
  const { logout } = useAuth();

  const currentYear = new Date().getFullYear();
  const pastFiveYears = Array.from({ length: 5 }, (_, i) => currentYear - i);

  const deleteUserAccount = async () => {
    try {
      const deleteUserResponse = await axios.post('http://weloveesc.xukaiteo.com:8001/user/delete_user', null, {
        params: {
          item: user_id,
        },
      });
  
      if (deleteUserResponse.status === 200) {
        console.log('User deleted successfully from database:', deleteUserResponse.data);
  
        try {
          const response = await axios.post('http://weloveesc.xukaiteo.com:8000/credit/delete', null, {
            params: {
              email: email,
              partner_code: 'bank name', // Replace with actual partner code if needed
            },
          });
  
          if (response.status === 200) {
            console.log('Account deleted from credit system:', response.data);
            logout();
            navigate('/login');
          } else {
            console.error('Failed to delete account from credit system:', response.status, response.data);
            logout();
            navigate('/login');
          }
        } catch (error) {
          if (error.response) {
            console.error('Error deleting account from credit system:', error.response.data);
          } else {
            console.error('Error deleting account from credit system:', error.message || error);
          }
          logout();
          navigate('/login');
        }
      } else {
        console.error('Failed to delete user from database:', deleteUserResponse.status, deleteUserResponse.data);
        logout();
        navigate('/login');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error deleting user from database:', error.response.data);
        if (error.response.data.detail) {
          console.error('Error details:', error.response.data.detail);
        }
      } else {
        console.error('Error deleting user from database:', error.message || error);
      }
      logout();
      navigate('/login');
    }
  };
  
  
  
  // Function to fetch transaction summary
  const fetchTransactionSummary = async (year, cardName) => {
    setLoading(true);
    setNoData(false);
    try {
      const response = await axios.post(`http://weloveesc.xukaiteo.com:8001/transactions/get_summary/?user_id=${user_id}`);
      if (response.status === 200 && response.data.monthly_spendings) {
        const cardSpending = response.data.monthly_spendings[cardName];
        setSpendingData(cardSpending || {});
        if (!cardSpending || Object.keys(cardSpending).length === 0) {
          setNoData(true);
        }
      } else {
        console.error('Failed to fetch transaction summary');
        setNoData(true);
      }
    } catch (error) {
      console.error('Error fetching transaction summary:', error);
      setNoData(true);
    } finally {
      setLoading(false);
    }
  };

  // Set the most recent year and first card as selected by default
  useEffect(() => {
    setSelectedYear(currentYear);
    if (Array.isArray(cards) && cards.length > 0) {
      setSelectedCard(cards[0].card_name);
      fetchTransactionSummary(currentYear, cards[0].card_name);
    }
  }, [cards]);

  // Log state values after they have been updated
  useEffect(() => {
    console.log('Amount:', amount);
    console.log('Status:', status);
    console.log('Airline Code:', airlineCode);
    console.log('Reference:', reference);
    console.log('cards:', cards);
    console.log('Starpoints:', starpoints);
  }, [user_id, amount, status, airlineCode, reference, starpoints]);

  const changeYear = (direction) => {
    const newYear = selectedYear + direction;
    if (pastFiveYears.includes(newYear)) {
      setSelectedYear(newYear);
      fetchTransactionSummary(newYear, selectedCard);
    }
  };

  return (
    <div className="bg-3 min-h-screen p-8">
      {/* Profile and Bank Account Details */}
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="flex mb-8 items-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-8 mr-8">
          <img
            src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" // Replace with your image URL
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-semibold text-9">
            {user?.first_name} {user?.last_name}
          </p>
          <p className="text-lg font-semibold text-9">
            Username: <span className="font-normal">{user?.username}</span>
          </p>
          <p className="text-lg font-semibold text-9">
            Email: <span className="font-normal">{email}</span>
          </p>
          <p className="text-lg font-semibold text-9">
            Starpoints: <span className="font-normal">{starpoints}</span>
          </p>
          <p className="text-lg font-semibold text-9">
            Bank: <span className="font-normal">DBS</span>
          </p>
          <button
            onClick={deleteUserAccount}
            className="mt-4 py-2 px-4 rounded-md bg-red-500 text-white hover:bg-red-700"
          >
            Delete Account
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Annual Spending</h2>
      <div className="bg-2 p-6 rounded-lg shadow-md">
        {/* Year Selector */}
        <div className="mb-4 flex items-center space-x-4">
          <button
            onClick={() => changeYear(-1)}
            className="py-2 px-4 rounded-md focus:outline-none bg-3 text-8 hover:bg-4"
            disabled={selectedYear === pastFiveYears[pastFiveYears.length - 1]}
          >
            &lt;
          </button>
          <span className="text-xl font-bold">{selectedYear}</span>
          <button
            onClick={() => changeYear(1)}
            className="py-2 px-4 rounded-md focus:outline-none bg-3 text-8 hover:bg-4"
            disabled={selectedYear === pastFiveYears[0]}
          >
            &gt;
          </button>
        </div>

        {/* Card Tabs */}
        <div className="mb-4 flex space-x-4">
          {Array.isArray(cards) && cards.map((card) => (
            <button
              key={card.card_name}
              onClick={() => {
                setSelectedCard(card.card_name);
                fetchTransactionSummary(selectedYear, card.card_name);
              }}
              className={`py-2 px-4 rounded-md focus:outline-none ${selectedCard === card.card_name ? 'bg-4 text-8' : 'bg-3 text-8'}`}
            >
              {card.card_name}
            </button>
          ))}
        </div>

        {/* Bank Account Details for Selected Year and Card */}
        {loading ? (
          <p>Loading...</p>
        ) : noData ? (
          <p>No spending data available for the selected year and card.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-3 border rounded-lg">
              <thead className="bg-5">
                <tr>
                  <th className="border px-6 py-3 text-left text-8">Month</th>
                  <th className="border px-6 py-3 text-left text-8">Total Spent</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(spendingData).map(([month, total], index) => (
                  <tr key={index} className="border-t">
                    <td className="border px-6 py-4">{month}</td>
                    <td className="border px-6 py-4">${total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
