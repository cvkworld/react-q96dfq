import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 480 },
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Tab label="Home" />
        <Tab label="Projects" />
        <Tab label="UUT Profiles" />
        <Tab label="Configurations" />
        <Tab label="Specification" />
        <Tab label="Test requirements" />
        <Tab label="test cases" />
        <Tab label="Glossaries" />
        <Tab label="Document" />
        <Tab label="" />
        <Tab label="Notifications" />
      </Tabs>
    </Box>
  );
}
