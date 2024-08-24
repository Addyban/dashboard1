import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  totalUsers: 45,
  premiumUsers: 20,
  subscriptions: 15,
  activeUsers: 12,
  newRegistrations: 5,
  reports: 3,
  subscriptionAmount: 8999,
  monthlyUserAnalysis: [
    { month: 'Jan', activeUsers: 40, premiumUsers: 80, newUsers: 20 },
    { month: 'Feb', activeUsers: 50, premiumUsers: 85, newUsers: 30 },
    { month: 'Mar', activeUsers: 40, premiumUsers: 80, newUsers: 20 },
    { month: 'Apr', activeUsers: 50, premiumUsers: 85, newUsers: 30 },
    { month: 'May', activeUsers: 40, premiumUsers: 80, newUsers: 20 },
    { month: 'Jun', activeUsers: 50, premiumUsers: 85, newUsers: 30 },
    { month: 'Jul', activeUsers: 40, premiumUsers: 80, newUsers: 20 },
    { month: 'Aug', activeUsers: 50, premiumUsers: 85, newUsers: 30 },
    { month: 'Sep', activeUsers: 40, premiumUsers: 80, newUsers: 20 },
    { month: 'Oct', activeUsers: 50, premiumUsers: 85, newUsers: 30 },
  ],
  genderDistribution: [
    { name: 'Male', value: 57.9 },
    { name: 'Female', value: 42.1 },
  ],
  likedUsers: [
    { id: 1, name: 'John Brown', email: 'john@example.com', phone: '+1234567890', gender: 'Male', country: 'USA', city: 'New York', activeTime: '2 hours', lastSeen: '1 day ago' },
    { id: 2, name: 'Jim Green', email: 'jim@example.com', phone: '+9876543210', gender: 'Male', country: 'UK', city: 'London', activeTime: '5 hours', lastSeen: '2 hours ago' },
    { id: 3, name: 'Joe Black', email: 'joe@example.com', phone: '+1122334455', gender: 'Male', country: 'Australia', city: 'Sydney', activeTime: '24 hours', lastSeen: '3 days ago' },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default userSlice.reducer;