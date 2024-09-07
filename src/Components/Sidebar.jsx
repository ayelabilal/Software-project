import React, { useState } from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Sidebar = () => {
  const [open, setOpen] = useState({});
  const navigate = useNavigate();

  const handleClick = (item) => {
    setOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const menuItems = [
    {
      name: 'Students',
      route: 'students',
      options: [
        { label: 'Students Registration', path: 'registration' },
        { label: 'Students List', path: 'list' },
      ],
    },
    {
      name: 'Teachers',
      route: 'teachers',
      options: [
        { label: 'Teachers Registration', path: 'registration' },
        { label: 'Teachers List', path: 'list' },
      ],
    },
    {
      name: 'Subjects',
      route: 'subjects',
      options: [
        { label: 'Add Subjects', path: 'add' },
        { label: 'Subjects List', path: 'list' },
      ],
    },
    {
      name: 'School',
      route: 'school',
      options: [
        { label: 'Students Registration', path: 'registration' },
        { label: 'Teachers Registration', path: 'Tearegistration' },

      ],
    },
    {
      name: 'Class',
      route: 'class',
      options: [
        { label: 'Class Form', path: 'add' },
        { label: 'Class List', path: 'list' },
      ],
    },
    {
      name: 'Fees',
      route: 'fees',
      options: [
        { label: 'Fee Structure', path: 'add' },
        { label: 'Fee Submission', path: 'list' },
      ],
    },
    {
      name: 'Admission',
      route: 'admission',
      options: [
        { label: 'Admission Form', path: 'add' },
        
      ],
    },
    {
      name: 'Exam',
      route: 'exam',
      options: [
        { label: 'Exam Schedule', path: 'add' },
        { label: 'Exam Result', path: 'list' },
        
      ],
    },
   
  ];

  return (
    <List
      component="nav"
      sx={{
        // overflow:"scroll",
        width: '300px',
        backgroundColor: '#f8f8f8',
        height: '100%',
        boxShadow: '0 0 25px rgba(0, 0, 0, 0.3)',
      }}
    >
      {menuItems.map((item, index) => (
        <div key={index}>
          <ListItemButton onClick={() => handleClick(item.name)}>
            <ListItemIcon>
              <FaEnvelope style={{ color: '#194D33', fontSize: '22px' }} />
            </ListItemIcon>
            <ListItemText primary={item.name} sx={{ color: '#008000' }} />
            {open[item.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[item.name]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.options.map((option, idx) => (
                <ListItemButton
                  key={idx}
                  sx={{ pl: 4, color: '#008000' }}
                  onClick={() => navigate(`/dashboard/${item.route}/${option.path}`)}
                >
                  <ListItemText primary={option.label} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default Sidebar;