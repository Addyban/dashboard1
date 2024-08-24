import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import userSlice from '../store/userSlice';
import { FaUser, FaChartBar, FaDollarSign, FaRegListAlt } from 'react-icons/fa';
import { MdSubscriptions } from "react-icons/md";
import { GrUserNew } from "react-icons/gr";
import { TbReportSearch } from "react-icons/tb";
import { blue } from '@mui/material/colors';

const COLORS = ['#0088FE', '#FF8042'];


const Dashboard = () => {
    const {
        totalUsers,
        premiumUsers,
        subscriptions,
        activeUsers,
        newRegistrations,
        reports,
        subscriptionAmount,
        monthlyUserAnalysis,
        genderDistribution,
    } = useSelector((state) => state.users);

    return (
        <Box height={600}
            width="100%"
            my={2}
            display="flex"
            alignItems="flex-start"
            gap={4}
            p={2}
            padding={3}
            sx={{ border: '2px shadow grey' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid xs={6}>
                    <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Total Users</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>{totalUsers}</Typography>
                        </Box>
                        <FaUser size={20} fill='blue' />
                    </Paper>
                </Grid>
                <Grid xs={6}>
                    <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Premium Users</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>{premiumUsers}</Typography>
                        </Box>
                        <FaRegListAlt size={20} fill='green' />
                    </Paper>
                </Grid>
                <Grid xs={6}>
                    <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Active User</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>{activeUsers}</Typography>
                        </Box>
                        <FaChartBar size={20} fill='red' />
                    </Paper>
                </Grid>
                <Grid xs={6}>
                    <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Subscriptions</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>{subscriptions}</Typography>
                        </Box>
                        <MdSubscriptions size={20} fill='orange' />
                    </Paper>
                </Grid>
                <Grid xs={6}>
                    <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>New Registration</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>{newRegistrations}</Typography>
                        </Box>
                        <GrUserNew size={20} fill='cyan' />
                    </Paper>
                </Grid>
                <Grid xs={6}>
                    <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 2 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography>Reports</Typography>
                            <Typography sx={{ fontWeight: 'bold' }}>{reports}</Typography>
                        </Box>
                        <TbReportSearch size={20} fill='blue' />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ padding: 1 }}>
                        <Typography>Gender Distribution</Typography>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={genderDistribution}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    label={({ name }) => `${name}`}
                                >
                                    {genderDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
                    <Paper sx={{ padding: 2, width:'100%' }}>
                        <Typography>Monthly User Analysis</Typography>
                        <ResponsiveContainer width="100%" height={500}>
                            <BarChart data={monthlyUserAnalysis}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="activeUsers" fill="#8884d8" />
                                <Bar dataKey="premiumUsers" fill="#82ca9d" />
                                <Bar dataKey="newUsers" fill="#ffc658" />
                            </BarChart>
                            
                        </ResponsiveContainer>
                    </Paper>
                </Grid>

                <Grid item xs={8} md={8}>
                    <Paper sx={{ padding: 2 }}>
                        <Box display="flex"gap={1} mb={2}>
                        <FaDollarSign color="orange" size={20} />
                        <Typography variant='h6'>Subscription Amount</Typography>
                        </Box>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                            ${subscriptionAmount}
                        </Typography>
                        
                        <ResponsiveContainer width="100%" height={400}>
                        <AreaChart data={monthlyUserAnalysis}>
                            <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="premiumUsers" stroke="#8884d8" fill="url(#colorUv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Box>        
    );
};
export default Dashboard;
