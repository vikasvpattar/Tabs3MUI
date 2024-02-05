import React from 'react';
import RedirectionBox from '../RedirectionBox';
import { Typography } from '@mui/material';
import { Tab } from '@mui/material';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import { ListItem } from '@mui/material';
import { List } from '@mui/material';
import { Button } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableRow } from '@mui/material';
import { TableHead } from '@mui/material';
import { Checkbox } from '@mui/material';
import { TableBody } from '@mui/material';
import { Table } from '@mui/material';
import { Tabs } from '@mui/material';
import { Container } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
export default function Tabs3() {
  const [tabvalue, setTabvalue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabvalue(newValue);
  };
  const [tabvalue1, setTabvalue1] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setTabvalue1(newValue);
  };
 

  return (
    <Container
      sx={{
        borderRadius: '10px',
        fontFamily: 'Open Sans',
        backgroundColor: '#ffffffff',
        width: '100%',
        maxWidth: '850px',
        color: '#18191d',
      }}>
      <Tabs value={tabvalue} onChange={handleChange}>
        <Tab
          sx={{ paddingTop: '25px', fontSize: '14px' }}
          label={
            <Typography variant="h4" sx={{ whiteSpace: 'nowrap', fontSize: '16px', fontWeight:"bold"  }} >
              Create question
            </Typography>
          }
        />
        <Tab
          sx={{ paddingTop: '25px', fontSize: '14px' }}
          label={
            <Typography variant="h4" sx={{ whiteSpace: 'nowrap', fontSize: '16px', fontWeight:"bold"  }}>
              Import existing questions
            </Typography>
          }
        />
       
      </Tabs>
      <CustomTabPanel value={tabvalue} index={0}>
        <Stack
          sx={{
            alignItems: 'flex-start',
            padding: '25px',
            maxHeight: '725px',
            overflow: 'auto',
            width: '100%',
          }}
          spacing="15px">
          <Typography variant="h2" sx={{ color: '#31529b', fontSize:"24px" }}>
            Closed-ended questions
          </Typography>
          <List
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '15px',
            }}>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBjbGlwLXBhdGg9InVybCgjY2xpcDBfMjY5N18xNjIpIiBmaWxsPSIjMjU2N0Y0Ij4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC41IDcuNUMxMC41IDQuMTg2MjkgMTMuMTg2MyAxLjUgMTYuNSAxLjVDMTkuODEzNyAxLjUgMjIuNSA0LjE4NjI5IDIyLjUgNy41QzIyLjUgMTAuODEzNyAxOS44MTM3IDEzLjUgMTYuNSAxMy41QzEzLjE4NjMgMTMuNSAxMC41IDEwLjgxMzcgMTAuNSA3LjVaTTE2LjUgMEMxMi4zNTc5IDAgOSAzLjM1Nzg2IDkgNy41QzkgMTEuNjQyMSAxMi4zNTc5IDE1IDE2LjUgMTVDMjAuNjQyMSAxNSAyNCAxMS42NDIxIDI0IDcuNUMyNCAzLjM1Nzg2IDIwLjY0MjEgMCAxNi41IDBaTTIwLjAyODUgNi4xNTcxN0MyMC4zMjI0IDUuODY1MyAyMC4zMjQgNS4zOTA0MyAyMC4wMzIyIDUuMDk2NTJDMTkuNzQwMyA0LjgwMjYxIDE5LjI2NTQgNC44MDA5NSAxOC45NzE1IDUuMDkyODNMMTUuMzQ2MiA4LjY5MzAyTDE0LjAyODUgNy4zODQ0OUMxMy43MzQ2IDcuMDkyNjIgMTMuMjU5NyA3LjA5NDI4IDEyLjk2NzggNy4zODgxOUMxMi42NzYgNy42ODIxIDEyLjY3NzYgOC4xNTY5NyAxMi45NzE1IDguNDQ4ODRMMTQuODE3NyAxMC4yODIyQzE1LjExMDEgMTAuNTcyNiAxNS41ODIyIDEwLjU3MjYgMTUuODc0NiAxMC4yODIyTDIwLjAyODUgNi4xNTcxN1pNMTAuMzA0MiAxOS4wNTM1QzEwLjAxMTMgMTkuMzQ2NCA5LjUzNjQxIDE5LjM0NjQgOS4yNDM1MiAxOS4wNTM1TDcuNjI1MzEgMTcuNDM1M0w2LjAwNzExIDE5LjA1MzVDNS43MTQyMSAxOS4zNDY0IDUuMjM5MzQgMTkuMzQ2NCA0Ljk0NjQ1IDE5LjA1MzVDNC42NTM1NSAxOC43NjA3IDQuNjUzNTUgMTguMjg1OCA0Ljk0NjQ1IDE3Ljk5MjlMNi41NjQ2NSAxNi4zNzQ3TDQuOTQ2NDUgMTQuNzU2NUM0LjY1MzU1IDE0LjQ2MzYgNC42NTM1NSAxMy45ODg3IDQuOTQ2NDUgMTMuNjk1OEM1LjIzOTM0IDEzLjQwMjkgNS43MTQyMSAxMy40MDI5IDYuMDA3MTEgMTMuNjk1OEw3LjYyNTMxIDE1LjMxNEw4LjQ1NzExIDE0LjQ4MjJDOC43NTAwMSAxNC4xODkzIDkuMjI0ODggMTQuMTg5MyA5LjUxNzc3IDE0LjQ4MjJDOS44MTA2NyAxNC43NzUxIDkuODEwNjcgMTUuMjUgOS41MTc3NyAxNS41NDI5TDguNjg1OTcgMTYuMzc0N0wxMC4zMDQyIDE3Ljk5MjlDMTAuNTk3MSAxOC4yODU4IDEwLjU5NzEgMTguNzYwNyAxMC4zMDQyIDE5LjA1MzVaTTYuMTY4NTUgOS41MTI2MUM2LjI5OTY2IDkuOTA1NTMgNi4wODc0MiAxMC4zMzAzIDUuNjk0NSAxMC40NjE0QzMuMjYwNTggMTEuMjczNiAxLjUgMTMuNTkwNCAxLjUgMTYuMzI1NUMxLjUgMTkuNzQxOCA0LjI0MzcgMjIuNSA3LjYxNDU0IDIyLjVDMTAuNDQyMyAyMi41IDEyLjgyOTIgMjAuNTU5NCAxMy41MjQ3IDE3LjkxNTNDMTMuNjMgMTcuNTE0NyAxNC4wNDAyIDE3LjI3NTQgMTQuNDQwOCAxNy4zODA4QzE0Ljg0MTQgMTcuNDg2MiAxNS4wODA3IDE3Ljg5NjMgMTQuOTc1MyAxOC4yOTY5QzE0LjExMjkgMjEuNTc1NyAxMS4xNDg2IDI0IDcuNjE0NTQgMjRDMy40MDMwMSAyNCAwIDIwLjU1NzkgMCAxNi4zMjU1QzAgMTIuOTMyNyAyLjE4NTE0IDEwLjA1MTEgNS4yMTk3MiA5LjAzODU2QzUuNjEyNjQgOC45MDc0NSA2LjAzNzQ1IDkuMTE5NjkgNi4xNjg1NSA5LjUxMjYxWiIgZmlsbD0iIzI1NjdGNCI+PC9wYXRoPgo8L2c+CjxkZWZzIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjY5N18xNjIiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIj48L3JlY3Q+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+"
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>True / False</Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner has to decide whether a statement is true or
                  false.
                </Typography>
              </Stack>
            </ListItem>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgOC4yNUMxMC41IDUuMzUwNTEgMTIuODUwNSAzIDE1Ljc1IDNDMTguNjQ5NSAzIDIxIDUuMzUwNTEgMjEgOC4yNUMyMSAxMS4xNDk1IDE4LjY0OTUgMTMuNSAxNS43NSAxMy41QzEyLjg1MDUgMTMuNSAxMC41IDExLjE0OTUgMTAuNSA4LjI1Wk0xNS43NSAxLjVDMTIuMDIyMSAxLjUgOSA0LjUyMjA4IDkgOC4yNUM5IDExLjk3NzkgMTIuMDIyMSAxNSAxNS43NSAxNUMxOS40Nzc5IDE1IDIyLjUgMTEuOTc3OSAyMi41IDguMjVDMjIuNSA0LjUyMjA4IDE5LjQ3NzkgMS41IDE1Ljc1IDEuNVpNMTguNTAxNyA1LjgxNzU0QzE4LjgwOTYgNi4wOTQ2MyAxOC44MzQ2IDYuNTY4ODUgMTguNTU3NSA2Ljg3NjczTDE1LjE4MjUgMTAuNjI2N0MxNS4wNDQ4IDEwLjc3OTcgMTQuODUwNCAxMC44NjkzIDE0LjY0NDcgMTAuODc0N0MxNC40MzkgMTAuODgwMiAxNC4yNDAyIDEwLjgwMDggMTQuMDk0NyAxMC42NTUzTDEyLjU5NDcgOS4xNTUzNEMxMi4zMDE4IDguODYyNDQgMTIuMzAxOCA4LjM4NzU3IDEyLjU5NDcgOC4wOTQ2OEMxMi44ODc2IDcuODAxNzggMTMuMzYyNCA3LjgwMTc4IDEzLjY1NTMgOC4wOTQ2OEwxNC41OTY0IDkuMDM1N0wxNy40NDI1IDUuODczMjhDMTcuNzE5NiA1LjU2NTQgMTguMTkzOCA1LjU0MDQ0IDE4LjUwMTcgNS44MTc1NFpNNy4xNDU1NCA5LjUxMjYzQzcuMjc2NjUgOS45MDU1NSA3LjA2NDQgMTAuMzMwNCA2LjY3MTQ5IDEwLjQ2MTVDNC41NDEzOCAxMS4xNzIyIDMgMTMuMjAwMiAzIDE1LjU5NUMzIDE4LjU4NjIgNS40MDIyMiAyMSA4LjM1MTgxIDIxQzEwLjgyNjIgMjEgMTIuOTE1OCAxOS4zMDE5IDEzLjUyNDcgMTYuOTg2OUMxMy42MyAxNi41ODYzIDE0LjA0MDIgMTYuMzQ3IDE0LjQ0MDggMTYuNDUyNEMxNC44NDE0IDE2LjU1NzcgMTUuMDgwNyAxNi45Njc5IDE0Ljk3NTMgMTcuMzY4NUMxNC4xOTk0IDIwLjMxODMgMTEuNTMyNCAyMi41IDguMzUxODEgMjIuNUM0LjU2MTUzIDIyLjUgMS41IDE5LjQwMjQgMS41IDE1LjU5NUMxLjUgMTIuNTQyNiAzLjQ2NTk0IDkuOTQ5NzYgNi4xOTY3MSA5LjAzODU4QzYuNTg5NjMgOC45MDc0NyA3LjAxNDQzIDkuMTE5NzIgNy4xNDU1NCA5LjUxMjYzWiIgZmlsbD0iIzI1NjdGNCI+PC9wYXRoPgo8L3N2Zz4="
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>Single Selection</Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner has to select the correct answer.
                </Typography>
              </Stack>
            </ListItem>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDEuNUMxMC43NTc0IDEuNSA5Ljc1IDIuNTA3MzYgOS43NSAzLjc1VjEyQzkuNzUgMTMuMjQyNiAxMC43NTc0IDE0LjI1IDEyIDE0LjI1SDIwLjI1QzIxLjQ5MjYgMTQuMjUgMjIuNSAxMy4yNDI2IDIyLjUgMTJWMy43NUMyMi41IDIuNTA3MzYgMjEuNDkyNiAxLjUgMjAuMjUgMS41SDEyWk0xMS4yNSAzLjc1QzExLjI1IDMuMzM1NzkgMTEuNTg1OCAzIDEyIDNIMjAuMjVDMjAuNjY0MiAzIDIxIDMuMzM1NzkgMjEgMy43NVYxMkMyMSAxMi40MTQyIDIwLjY2NDIgMTIuNzUgMjAuMjUgMTIuNzVIMTJDMTEuNTg1OCAxMi43NSAxMS4yNSAxMi40MTQyIDExLjI1IDEyVjMuNzVaTTE5LjMwNzUgNi41MDE3M0MxOS41ODQ2IDYuMTkzODUgMTkuNTU5NiA1LjcxOTYzIDE5LjI1MTcgNS40NDI1NEMxOC45NDM4IDUuMTY1NDQgMTguNDY5NiA1LjE5MDQgMTguMTkyNSA1LjQ5ODI4TDE1LjM0NjQgOC42NjA3TDE0LjQwNTMgNy43MTk2OEMxNC4xMTI0IDcuNDI2NzggMTMuNjM3NiA3LjQyNjc4IDEzLjM0NDcgNy43MTk2OEMxMy4wNTE4IDguMDEyNTcgMTMuMDUxOCA4LjQ4NzQ0IDEzLjM0NDcgOC43ODAzNEwxNC44NDQ3IDEwLjI4MDNDMTQuOTkwMiAxMC40MjU4IDE1LjE4OSAxMC41MDUyIDE1LjM5NDcgMTAuNDk5N0MxNS42MDA0IDEwLjQ5NDMgMTUuNzk0OCAxMC40MDQ3IDE1LjkzMjUgMTAuMjUxN0wxOS4zMDc1IDYuNTAxNzNaTTMuNzUgMTEuMjVDMy4zMzU3OSAxMS4yNSAzIDExLjU4NTggMyAxMlYyMC4yNUMzIDIwLjY2NDIgMy4zMzU3OSAyMSAzLjc1IDIxSDEyQzEyLjQxNDIgMjEgMTIuNzUgMjAuNjY0MiAxMi43NSAyMC4yNVYxNy40NDg1QzEyLjc1IDE3LjAzNDMgMTMuMDg1OCAxNi42OTg1IDEzLjUgMTYuNjk4NUMxMy45MTQyIDE2LjY5ODUgMTQuMjUgMTcuMDM0MyAxNC4yNSAxNy40NDg1VjIwLjI1QzE0LjI1IDIxLjQ5MjYgMTMuMjQyNiAyMi41IDEyIDIyLjVIMy43NUMyLjUwNzM2IDIyLjUgMS41IDIxLjQ5MjYgMS41IDIwLjI1VjEyQzEuNSAxMC43NTc0IDIuNTA3MzYgOS43NSAzLjc1IDkuNzVINi41NTE0N0M2Ljk2NTY4IDkuNzUgNy4zMDE0NyAxMC4wODU4IDcuMzAxNDcgMTAuNUM3LjMwMTQ3IDEwLjkxNDIgNi45NjU2OCAxMS4yNSA2LjU1MTQ3IDExLjI1SDMuNzVaTTkuNzA3NDkgMTYuMjUxN0M5Ljk4NDU4IDE1Ljk0MzggOS45NTk2MiAxNS40Njk2IDkuNjUxNzQgMTUuMTkyNUM5LjM0Mzg2IDE0LjkxNTQgOC44Njk2NCAxNC45NDA0IDguNTkyNTQgMTUuMjQ4M0w3LjA5NjM1IDE2LjkxMDdMNi4xNTUzMyAxNS45Njk3QzUuODYyNDQgMTUuNjc2OCA1LjM4NzU2IDE1LjY3NjggNS4wOTQ2NyAxNS45Njk3QzQuODAxNzggMTYuMjYyNiA0LjgwMTc4IDE2LjczNzUgNS4wOTQ2NyAxNy4wMzA0TDYuNTk0NjcgMTguNTMwNEM2Ljc0MDE2IDE4LjY3NTggNi45MzkwMyAxOC43NTUyIDcuMTQ0NzIgMTguNzQ5OEM3LjM1MDQgMTguNzQ0NCA3LjU0NDgzIDE4LjY1NDcgNy42ODI0NyAxOC41MDE3TDkuNzA3NDkgMTYuMjUxN1oiIGZpbGw9IiMyNTY3RjQiPjwvcGF0aD4KPC9zdmc+"
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>Multiple Choice</Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner can select multiple answers.
                </Typography>
              </Stack>
            </ListItem>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjY3MjcgNC4wOTAyNkMxMy40NjU2IDMuNzMxNTQgMTMuNTg4NSAzLjI3Mjg1IDEzLjk0NzIgMy4wNjU3NEwxNy42NTkgMC45MjI3NUMxOC4wMTc3IDAuNzE1NjQzIDE4LjQ3NjQgMC44Mzg1NDkgMTguNjgzNSAxLjE5NzI3QzE4Ljg5MDYgMS41NTU5OSAxOC43Njc3IDIuMDE0NjggMTguNDA5IDIuMjIxNzlMMTYuNTQ4MiAzLjI5NjE0QzIwLjQwNTUgNC4zMTE4OSAyMy4yNSA3LjgyMzc4IDIzLjI1IDEyLjAwMDFDMjMuMjUgMTYuMTc2MyAyMC40MDU1IDE5LjY4ODIgMTYuNTQ4MiAyMC43MDRMMTguNDA5IDIxLjc3ODNDMTguNzY3NyAyMS45ODU0IDE4Ljg5MDYgMjIuNDQ0MSAxOC42ODM1IDIyLjgwMjhDMTguNDc2NCAyMy4xNjE2IDE4LjAxNzcgMjMuMjg0NSAxNy42NTkgMjMuMDc3NEwxMy45NDcyIDIwLjkzNDRDMTMuNTg4NSAyMC43MjczIDEzLjQ2NTYgMjAuMjY4NiAxMy42NzI3IDE5LjkwOThMMTUuODE1NyAxNi4xOTgxQzE2LjAyMjggMTUuODM5NCAxNi40ODE1IDE1LjcxNjQgMTYuODQwMiAxNS45MjM2QzE3LjE5ODkgMTYuMTMwNyAxNy4zMjE5IDE2LjU4OTQgMTcuMTE0NyAxNi45NDgxTDE1LjcyNTEgMTkuMzU1QzE5LjE2MDkgMTguNjY5OCAyMS43NSAxNS42MzczIDIxLjc1IDEyLjAwMDFDMjEuNzUgOC4zNjI4MiAxOS4xNjA5IDUuMzMwMzEgMTUuNzI1MSA0LjY0NTA3TDE3LjExNDcgNy4wNTIwNEMxNy4zMjE5IDcuNDEwNzUgMTcuMTk4OSA3Ljg2OTQ1IDE2Ljg0MDIgOC4wNzY1NUMxNi40ODE1IDguMjgzNjYgMTYuMDIyOCA4LjE2MDc1IDE1LjgxNTcgNy44MDIwNEwxMy42NzI3IDQuMDkwMjZaTTYuMzc1IDkuNzUwMDVDNC41MTEwNCA5Ljc1MDA1IDMgOC4yMzkwMiAzIDYuMzc1MDVDMyA0LjUxMTA5IDQuNTExMDQgMy4wMDAwNSA2LjM3NSAzLjAwMDA1QzguMjM4OTYgMy4wMDAwNSA5Ljc1IDQuNTExMDkgOS43NSA2LjM3NTA1QzkuNzUgOC4yMzkwMiA4LjIzODk2IDkuNzUwMDUgNi4zNzUgOS43NTAwNVpNNi4zNzUgMTEuMjUwMUMzLjY4MjYxIDExLjI1MDEgMS41IDkuMDY3NDQgMS41IDYuMzc1MDVDMS41IDMuNjgyNjcgMy42ODI2MSAxLjUwMDA1IDYuMzc1IDEuNTAwMDVDOS4wNjczOSAxLjUwMDA1IDExLjI1IDMuNjgyNjcgMTEuMjUgNi4zNzUwNUMxMS4yNSA5LjA2NzQ0IDkuMDY3MzkgMTEuMjUwMSA2LjM3NSAxMS4yNTAxWk02LjM3NSAyMS4wMDAxQzQuNTExMDQgMjEuMDAwMSAzIDE5LjQ4OSAzIDE3LjYyNTFDMyAxNS43NjExIDQuNTExMDQgMTQuMjUwMSA2LjM3NSAxNC4yNTAxQzguMjM4OTYgMTQuMjUwMSA5Ljc1IDE1Ljc2MTEgOS43NSAxNy42MjUxQzkuNzUgMTkuNDg5IDguMjM4OTYgMjEuMDAwMSA2LjM3NSAyMS4wMDAxWk02LjM3NSAyMi41MDAxQzMuNjgyNjEgMjIuNTAwMSAxLjUgMjAuMzE3NCAxLjUgMTcuNjI1MUMxLjUgMTQuOTMyNyAzLjY4MjYxIDEyLjc1MDEgNi4zNzUgMTIuNzUwMUM5LjA2NzM5IDEyLjc1MDEgMTEuMjUgMTQuOTMyNyAxMS4yNSAxNy42MjUxQzExLjI1IDIwLjMxNzQgOS4wNjczOSAyMi41MDAxIDYuMzc1IDIyLjUwMDFaIiBmaWxsPSIjMjU2N0Y0Ij48L3BhdGg+Cjwvc3ZnPg=="
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>Ordered Question</Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner has to reorder the elements.
                </Typography>
              </Stack>
            </ListItem>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMzc1IDYuMTg3NUM5LjM3NSA0LjQyNzA5IDcuOTQ3OTEgMyA2LjE4NzUgM0M0LjQyNzA5IDMgMyA0LjQyNzA5IDMgNi4xODc1QzMgNy45NDc5MSA0LjQyNzA5IDkuMzc1IDYuMTg3NSA5LjM3NUM2LjYwMTcxIDkuMzc1IDYuOTM3NSA5LjcxMDc5IDYuOTM3NSAxMC4xMjVDNi45Mzc1IDEwLjUzOTIgNi42MDE3MSAxMC44NzUgNi4xODc1IDEwLjg3NUMzLjU5ODY3IDEwLjg3NSAxLjUgOC43NzYzMyAxLjUgNi4xODc1QzEuNSAzLjU5ODY3IDMuNTk4NjcgMS41IDYuMTg3NSAxLjVDOC43NzYzMyAxLjUgMTAuODc1IDMuNTk4NjcgMTAuODc1IDYuMTg3NUMxMC44NzUgNi42MDE3MSAxMC41MzkyIDYuOTM3NSAxMC4xMjUgNi45Mzc1QzkuNzEwNzkgNi45Mzc1IDkuMzc1IDYuNjAxNzEgOS4zNzUgNi4xODc1Wk0xNy44MTI1IDNDMTYuMDUyMSAzIDE0LjYyNSA0LjQyNzA5IDE0LjYyNSA2LjE4NzVDMTQuNjI1IDYuNjAxNzEgMTQuMjg5MiA2LjkzNzUgMTMuODc1IDYuOTM3NUMxMy40NjA4IDYuOTM3NSAxMy4xMjUgNi42MDE3MSAxMy4xMjUgNi4xODc1QzEzLjEyNSAzLjU5ODY3IDE1LjIyMzcgMS41IDE3LjgxMjUgMS41QzIwLjQwMTMgMS41IDIyLjUgMy41OTg2NyAyMi41IDYuMTg3NUMyMi41IDguNzc2MzMgMjAuNDAxMyAxMC44NzUgMTcuODEyNSAxMC44NzVDMTcuMzk4MyAxMC44NzUgMTcuMDYyNSAxMC41MzkyIDE3LjA2MjUgMTAuMTI1QzE3LjA2MjUgOS43MTA3OSAxNy4zOTgzIDkuMzc1IDE3LjgxMjUgOS4zNzVDMTkuNTcyOSA5LjM3NSAyMSA3Ljk0NzkxIDIxIDYuMTg3NUMyMSA0LjQyNzA5IDE5LjU3MjkgMyAxNy44MTI1IDNaTTYuOTY5NjcgOC4wMzAzM0M2LjY3Njc4IDcuNzM3NDQgNi42NzY3OCA3LjI2MjU2IDYuOTY5NjcgNi45Njk2N0M3LjI2MjU2IDYuNjc2NzggNy43Mzc0NCA2LjY3Njc4IDguMDMwMzMgNi45Njk2N0wxMC41ODQ0IDkuNTIzNzJDMTAuODc3MyA5LjgxNjYyIDEwLjg3NzMgMTAuMjkxNSAxMC41ODQ0IDEwLjU4NDRDMTAuMjkxNSAxMC44NzczIDkuODE2NjIgMTAuODc3MyA5LjUyMzcyIDEwLjU4NDRMNi45Njk2NyA4LjAzMDMzWk0xMy40MTU2IDE0LjQ3NjNDMTMuMTIyNyAxNC4xODM0IDEzLjEyMjcgMTMuNzA4NSAxMy40MTU2IDEzLjQxNTZDMTMuNzA4NSAxMy4xMjI3IDE0LjE4MzQgMTMuMTIyNyAxNC40NzYzIDEzLjQxNTZMMTcuMDMwMyAxNS45Njk3QzE3LjMyMzIgMTYuMjYyNiAxNy4zMjMyIDE2LjczNzQgMTcuMDMwMyAxNy4wMzAzQzE2LjczNzQgMTcuMzIzMiAxNi4yNjI2IDE3LjMyMzIgMTUuOTY5NyAxNy4wMzAzTDEzLjQxNTYgMTQuNDc2M1pNMTYuMjgwMyA4Ljc4MDMzQzE2LjU3MzIgOC40ODc0NCAxNi41NzMyIDguMDEyNTYgMTYuMjgwMyA3LjcxOTY3QzE1Ljk4NzQgNy40MjY3OCAxNS41MTI2IDcuNDI2NzggMTUuMjE5NyA3LjcxOTY3TDcuNzE5NjcgMTUuMjE5N0M3LjQyNjc4IDE1LjUxMjYgNy40MjY3OCAxNS45ODc0IDcuNzE5NjcgMTYuMjgwM0M4LjAxMjU2IDE2LjU3MzIgOC40ODc0NCAxNi41NzMyIDguNzgwMzMgMTYuMjgwM0wxNi4yODAzIDguNzgwMzNaTTYuMTg3NSAxNC42MjVDNC40MjcwOSAxNC42MjUgMyAxNi4wNTIxIDMgMTcuODEyNUMzIDE5LjU3MjkgNC40MjcwOSAyMSA2LjE4NzUgMjFDNy45NDc5MSAyMSA5LjM3NSAxOS41NzI5IDkuMzc1IDE3LjgxMjVDOS4zNzUgMTcuMzk4MyA5LjcxMDc5IDE3LjA2MjUgMTAuMTI1IDE3LjA2MjVDMTAuNTM5MiAxNy4wNjI1IDEwLjg3NSAxNy4zOTgzIDEwLjg3NSAxNy44MTI1QzEwLjg3NSAyMC40MDEzIDguNzc2MzMgMjIuNSA2LjE4NzUgMjIuNUMzLjU5ODY3IDIyLjUgMS41IDIwLjQwMTMgMS41IDE3LjgxMjVDMS41IDE1LjIyMzcgMy41OTg2NyAxMy4xMjUgNi4xODc1IDEzLjEyNUM2LjYwMTcxIDEzLjEyNSA2LjkzNzUgMTMuNDYwOCA2LjkzNzUgMTMuODc1QzYuOTM3NSAxNC4yODkyIDYuNjAxNzEgMTQuNjI1IDYuMTg3NSAxNC42MjVaTTIxIDE3LjgxMjVDMjEgMTYuMDUyMSAxOS41NzI5IDE0LjYyNSAxNy44MTI1IDE0LjYyNUMxNy4zOTgzIDE0LjYyNSAxNy4wNjI1IDE0LjI4OTIgMTcuMDYyNSAxMy44NzVDMTcuMDYyNSAxMy40NjA4IDE3LjM5ODMgMTMuMTI1IDE3LjgxMjUgMTMuMTI1QzIwLjQwMTMgMTMuMTI1IDIyLjUgMTUuMjIzNyAyMi41IDE3LjgxMjVDMjIuNSAyMC40MDEzIDIwLjQwMTMgMjIuNSAxNy44MTI1IDIyLjVDMTUuMjIzNyAyMi41IDEzLjEyNSAyMC40MDEzIDEzLjEyNSAxNy44MTI1QzEzLjEyNSAxNy4zOTgzIDEzLjQ2MDggMTcuMDYyNSAxMy44NzUgMTcuMDYyNUMxNC4yODkyIDE3LjA2MjUgMTQuNjI1IDE3LjM5ODMgMTQuNjI1IDE3LjgxMjVDMTQuNjI1IDE5LjU3MjkgMTYuMDUyMSAyMSAxNy44MTI1IDIxQzE5LjU3MjkgMjEgMjEgMTkuNTcyOSAyMSAxNy44MTI1WiIgZmlsbD0iIzI1NjdGNCI+PC9wYXRoPgo8L3N2Zz4="
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>Linker</Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner has to recreate the right pairs.
                </Typography>
              </Stack>
            </ListItem>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjYyNSAxLjVDMTAuMzgyNCAxLjUgOS4zNzUgMi41MDczNiA5LjM3NSAzLjc1VjEyLjM3NUM5LjM3NSAxMy42MTc2IDEwLjM4MjQgMTQuNjI1IDExLjYyNSAxNC42MjVIMjAuMjVDMjEuNDkyNiAxNC42MjUgMjIuNSAxMy42MTc2IDIyLjUgMTIuMzc1VjMuNzVDMjIuNSAyLjUwNzM2IDIxLjQ5MjYgMS41IDIwLjI1IDEuNUgxMS42MjVaTTEwLjg3NSAzLjc1QzEwLjg3NSAzLjMzNTc5IDExLjIxMDggMyAxMS42MjUgM0gyMC4yNUMyMC42NjQyIDMgMjEgMy4zMzU3OSAyMSAzLjc1VjEyLjM3NUMyMSAxMi43ODkyIDIwLjY2NDIgMTMuMTI1IDIwLjI1IDEzLjEyNUgxMS42MjVDMTEuMjEwOCAxMy4xMjUgMTAuODc1IDEyLjc4OTIgMTAuODc1IDEyLjM3NVYzLjc1Wk0zLjc1IDkuMzc1QzIuNTA3MzYgOS4zNzUgMS41IDEwLjM4MjQgMS41IDExLjYyNVYxMy41NDQxQzEuNSAxMy45NTgzIDEuODM1NzkgMTQuMjk0MSAyLjI1IDE0LjI5NDFDMi42NjQyMSAxNC4yOTQxIDMgMTMuOTU4MyAzIDEzLjU0NDFWMTEuNjI1QzMgMTEuMjEwOCAzLjMzNTc5IDEwLjg3NSAzLjc1IDEwLjg3NUg0Ljk4NTI5QzUuMzk5NTEgMTAuODc1IDUuNzM1MjkgMTAuNTM5MiA1LjczNTI5IDEwLjEyNUM1LjczNTI5IDkuNzEwNzkgNS4zOTk1MSA5LjM3NSA0Ljk4NTI5IDkuMzc1SDMuNzVaTTMgMTguMzMwOUMzIDE3LjkxNjcgMi42NjQyMSAxNy41ODA5IDIuMjUgMTcuNTgwOUMxLjgzNTc5IDE3LjU4MDkgMS41IDE3LjkxNjcgMS41IDE4LjMzMDlWMjAuMjVDMS41IDIxLjQ5MjYgMi41MDczNiAyMi41IDMuNzUgMjIuNUg1LjY2OTEyQzYuMDgzMzMgMjIuNSA2LjQxOTEyIDIyLjE2NDIgNi40MTkxMiAyMS43NUM2LjQxOTEyIDIxLjMzNTggNi4wODMzMyAyMSA1LjY2OTEyIDIxSDMuNzVDMy4zMzU3OSAyMSAzIDIwLjY2NDIgMyAyMC4yNVYxOC4zMzA5Wk0xNC42MjUgMTkuMDE0N0MxNC42MjUgMTguNjAwNSAxNC4yODkyIDE4LjI2NDcgMTMuODc1IDE4LjI2NDdDMTMuNDYwOCAxOC4yNjQ3IDEzLjEyNSAxOC42MDA1IDEzLjEyNSAxOS4wMTQ3VjIwLjI1QzEzLjEyNSAyMC42NjQyIDEyLjc4OTIgMjEgMTIuMzc1IDIxSDEwLjQ1NTlDMTAuMDQxNyAyMSA5LjcwNTg4IDIxLjMzNTggOS43MDU4OCAyMS43NUM5LjcwNTg4IDIyLjE2NDIgMTAuMDQxNyAyMi41IDEwLjQ1NTkgMjIuNUgxMi4zNzVDMTMuNjE3NiAyMi41IDE0LjYyNSAyMS40OTI2IDE0LjYyNSAyMC4yNVYxOS4wMTQ3WiIgZmlsbD0iIzI1NjdGNCI+PC9wYXRoPgo8L3N2Zz4="
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>Fill in the blank</Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner has to fill in the blanks by writing the missing
                  words.
                </Typography>
              </Stack>
            </ListItem>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjc1IDAuNzVDMTIuNzUgMC4zMzU3ODYgMTIuNDE0MiAwIDEyIDBDMTEuNTg1OCAwIDExLjI1IDAuMzM1Nzg2IDExLjI1IDAuNzVWMi4yNzg0MkM2LjQ2MzIgMi42NDI1NiAyLjY0MjU2IDYuNDYzMiAyLjI3ODQyIDExLjI1SDAuNzVDMC4zMzU3ODYgMTEuMjUgMCAxMS41ODU4IDAgMTJDMCAxMi40MTQyIDAuMzM1Nzg2IDEyLjc1IDAuNzUgMTIuNzVIMi4yNzg0MkMyLjY0MjU2IDE3LjUzNjggNi40NjMyIDIxLjM1NzQgMTEuMjUgMjEuNzIxNlYyMy4yNUMxMS4yNSAyMy42NjQyIDExLjU4NTggMjQgMTIgMjRDMTIuNDE0MiAyNCAxMi43NSAyMy42NjQyIDEyLjc1IDIzLjI1VjIxLjcyMTZDMTcuNTM2OCAyMS4zNTc0IDIxLjM1NzQgMTcuNTM2OCAyMS43MjE2IDEyLjc1SDIzLjI1QzIzLjY2NDIgMTIuNzUgMjQgMTIuNDE0MiAyNCAxMkMyNCAxMS41ODU4IDIzLjY2NDIgMTEuMjUgMjMuMjUgMTEuMjVIMjEuNzIxNkMyMS4zNTc0IDYuNDYzMiAxNy41MzY4IDIuNjQyNTYgMTIuNzUgMi4yNzg0MlYwLjc1Wk01LjI1IDEyLjc1SDMuNzgzNjNDNC4xNDAyOSAxNi43MDc5IDcuMjkyMTUgMTkuODU5NyAxMS4yNSAyMC4yMTY0VjE4Ljc1QzExLjI1IDE4LjMzNTggMTEuNTg1OCAxOCAxMiAxOEMxMi40MTQyIDE4IDEyLjc1IDE4LjMzNTggMTIuNzUgMTguNzVWMjAuMjE2NEMxNi43MDc5IDE5Ljg1OTcgMTkuODU5NyAxNi43MDc5IDIwLjIxNjQgMTIuNzVIMTguNzVDMTguMzM1OCAxMi43NSAxOCAxMi40MTQyIDE4IDEyQzE4IDExLjU4NTggMTguMzM1OCAxMS4yNSAxOC43NSAxMS4yNUgyMC4yMTY0QzE5Ljg1OTcgNy4yOTIxNSAxNi43MDc5IDQuMTQwMjkgMTIuNzUgMy43ODM2M1Y1LjI1QzEyLjc1IDUuNjY0MjEgMTIuNDE0MiA2IDEyIDZDMTEuNTg1OCA2IDExLjI1IDUuNjY0MjEgMTEuMjUgNS4yNVYzLjc4MzYzQzcuMjkyMTUgNC4xNDAyOSA0LjE0MDI5IDcuMjkyMTUgMy43ODM2MyAxMS4yNUg1LjI1QzUuNjY0MjEgMTEuMjUgNiAxMS41ODU4IDYgMTJDNiAxMi40MTQyIDUuNjY0MjEgMTIuNzUgNS4yNSAxMi43NVpNMTIgMTMuMTI1QzEyLjYyMTMgMTMuMTI1IDEzLjEyNSAxMi42MjEzIDEzLjEyNSAxMkMxMy4xMjUgMTEuMzc4NyAxMi42MjEzIDEwLjg3NSAxMiAxMC44NzVDMTEuMzc4NyAxMC44NzUgMTAuODc1IDExLjM3ODcgMTAuODc1IDEyQzEwLjg3NSAxMi42MjEzIDExLjM3ODcgMTMuMTI1IDEyIDEzLjEyNVoiIGZpbGw9IiMyNTY3RjQiPjwvcGF0aD4KPC9zdmc+"
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>Pick-a-Point</Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner has to click on a key area of an image.
                </Typography>
              </Stack>
            </ListItem>
          </List>
          <Typography variant="h2" sx={{ color: '#31529b', fontSize:"24px" }}>
            Open-ended questions
          </Typography>
          <List
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '15px',
            }}>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNzUgMTEuMjVDMy43NSA2LjY5MzY1IDcuNDQzNjUgMyAxMiAzQzE2LjU1NjMgMyAyMC4yNSA2LjY5MzY1IDIwLjI1IDExLjI1QzIwLjI1IDE1LjgwNjMgMTYuNTU2MyAxOS41IDEyIDE5LjVDMTEuMDY4MiAxOS41IDEwLjE3MzkgMTkuMzQ1OCA5LjM0MDQzIDE5LjA2MjFDOS4xMjMzOSAxOC45ODgzIDguODg0NDkgMTkuMDE3NyA4LjY5MTg5IDE5LjE0MjFMNS44MjU2NCAyMC45OTMzTDYuMjY0NDYgMTcuNTkyNEM2LjI5MzYgMTcuMzY2NiA2LjIxODU2IDE3LjEzOTcgNi4wNjA1MSAxNi45NzU4QzQuNjI5MTUgMTUuNDkxNCAzLjc1IDEzLjQ3NDIgMy43NSAxMS4yNVpNMTIgMS41QzYuNjE1MjIgMS41IDIuMjUgNS44NjUyMiAyLjI1IDExLjI1QzIuMjUgMTMuNzQ2MyAzLjE4OTA1IDE2LjAyNDcgNC43MzE4MSAxNy43NDlMNC4xMzExNyAyMi40MDRDNC4wOTM4IDIyLjY5MzYgNC4yMjc4OCAyMi45Nzg1IDQuNDc0ODEgMjMuMTM0M0M0LjcyMTc0IDIzLjI5MDEgNS4wMzY2MyAyMy4yODg1IDUuMjgxOSAyMy4xMzAxTDkuMjA4MjkgMjAuNTk0MkMxMC4wOTM1IDIwLjg1ODQgMTEuMDMwOCAyMSAxMiAyMUMxNy4zODQ4IDIxIDIxLjc1IDE2LjYzNDggMjEuNzUgMTEuMjVDMjEuNzUgNS44NjUyMiAxNy4zODQ4IDEuNSAxMiAxLjVaTTEwLjgxOTMgMTIuODE1MlYxMy4zMDNIMTIuNTY2MlYxMi45MDc1QzEyLjU2NjIgMTIuNzIyOSAxMi41OTAzIDEyLjU2NjkgMTIuNjM4NyAxMi40Mzk1QzEyLjY5MTQgMTIuMzA3NiAxMi43ODgxIDEyLjE3NTggMTIuOTI4NyAxMi4wNDM5QzEzLjA2OTMgMTEuOTEyMSAxMy4yNzE1IDExLjc0OTUgMTMuNTM1MiAxMS41NTYyQzEzLjg4NjcgMTEuMzAxMyAxNC4xNzkgMTEuMDU5NiAxNC40MTE5IDEwLjgzMTFDMTQuNjQ5MiAxMC41OTgxIDE0LjgyNSAxMC4zNDc3IDE0LjkzOTIgMTAuMDc5NkMxNS4wNTc5IDkuODA3MTMgMTUuMTE3MiA5LjQ4NjMzIDE1LjExNzIgOS4xMTcxOUMxNS4xMTcyIDguNDIyODUgMTQuODU3OSA3Ljg1MTU2IDE0LjMzOTQgNy40MDMzMkMxMy44MjUyIDYuOTUwNjggMTMuMDk3OSA2LjcyNDM3IDEyLjE1NzUgNi43MjQzN0MxMS41NDY2IDYuNzI0MzcgMTAuOTg0MSA2LjgwMTI3IDEwLjQ3IDYuOTU1MDhDOS45NTU4MSA3LjEwNDQ5IDkuNDc5IDcuMzAyMjUgOS4wMzk1NSA3LjU0ODM0TDkuNzU4MDYgOC45OTE5NEMxMC4xNDA0IDguNzk4NTggMTAuNTE2MSA4LjY0MjU4IDEwLjg4NTMgOC41MjM5M0MxMS4yNTg4IDguNDA1MjcgMTEuNjM0NSA4LjM0NTk1IDEyLjAxMjUgOC4zNDU5NUMxMi4zOTA0IDguMzQ1OTUgMTIuNjg0OCA4LjQyMDY1IDEyLjg5NTggOC41NzAwN0MxMy4xMDY3IDguNzE5NDggMTMuMjEyMiA4LjkzNzAxIDEzLjIxMjIgOS4yMjI2NkMxMy4yMTIyIDkuNDE2MDIgMTMuMTcyNiA5LjU4OTYgMTMuMDkzNSA5Ljc0MzQxQzEzLjAxODggOS44OTI4MiAxMi44OTc5IDEwLjA0NDQgMTIuNzMxIDEwLjE5ODJDMTIuNTY4NCAxMC4zNTIxIDEyLjM1MDggMTAuNTI1NiAxMi4wNzg0IDEwLjcxOUMxMS43NzUxIDEwLjkzODcgMTEuNTMxMiAxMS4xNTQxIDExLjM0NjcgMTEuMzY1QzExLjE2MjEgMTEuNTcxNSAxMS4wMjgxIDExLjc5MTMgMTAuOTQ0NiAxMi4wMjQyQzEwLjg2MTEgMTIuMjUyNyAxMC44MTkzIDEyLjUxNjQgMTAuODE5MyAxMi44MTUyWk0xMC45NDQ2IDE0LjY4NzNDMTAuNzIwNSAxNC44NTQyIDEwLjYwODQgMTUuMTQ0MyAxMC42MDg0IDE1LjU1NzRDMTAuNjA4NCAxNS45NTI5IDEwLjcyMDUgMTYuMjM4NSAxMC45NDQ2IDE2LjQxNDNDMTEuMTczMSAxNi41OTAxIDExLjQ0NzggMTYuNjc4IDExLjc2ODYgMTYuNjc4QzEyLjA4MDYgMTYuNjc4IDEyLjM0ODYgMTYuNTkwMSAxMi41NzI4IDE2LjQxNDNDMTIuODAxMyAxNi4yMzg1IDEyLjkxNTUgMTUuOTUyOSAxMi45MTU1IDE1LjU1NzRDMTIuOTE1NSAxNS4xNDQzIDEyLjgwMTMgMTQuODU0MiAxMi41NzI4IDE0LjY4NzNDMTIuMzQ4NiAxNC41MjAzIDEyLjA4MDYgMTQuNDM2OCAxMS43Njg2IDE0LjQzNjhDMTEuNDQ3OCAxNC40MzY4IDExLjE3MzEgMTQuNTIwMyAxMC45NDQ2IDE0LjY4NzNaIiBmaWxsPSIjMjU2N0Y0Ij48L3BhdGg+Cjwvc3ZnPg=="
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>Open Question</Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner has to write a text or upload a document.
                </Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The instructor will receive a notification and will have to
                  correct the question manually.
                </Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  It will only be possible to correct this question as part of a
                  program or path.
                </Typography>
              </Stack>
            </ListItem>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2Ljg3NSAzLjc1QzE2Ljg3NSAzLjMzNTc5IDE3LjIxMDggMyAxNy42MjUgM0gyMS4xNzA0QzIxLjkwNjkgMyAyMi41IDMuNTk3MzcgMjIuNSA0LjMzMDU2VjcuODc1QzIyLjUgOC4yODkyMSAyMi4xNjQyIDguNjI1IDIxLjc1IDguNjI1QzIxLjMzNTggOC42MjUgMjEgOC4yODkyMSAyMSA3Ljg3NVY0LjVIMTcuNjI1QzE3LjIxMDggNC41IDE2Ljg3NSA0LjE2NDIxIDE2Ljg3NSAzLjc1Wk0yMi41IDE2LjEyNUMyMi41IDE1LjcxMDggMjIuMTY0MiAxNS4zNzUgMjEuNzUgMTUuMzc1QzIxLjMzNTggMTUuMzc1IDIxIDE1LjcxMDggMjEgMTYuMTI1VjE5LjVIMTcuNjI1QzE3LjIxMDggMTkuNSAxNi44NzUgMTkuODM1OCAxNi44NzUgMjAuMjVDMTYuODc1IDIwLjY2NDIgMTcuMjEwOCAyMSAxNy42MjUgMjFIMjEuMTY5NEMyMS45MDQzIDIxIDIyLjUgMjAuNDA0MyAyMi41IDE5LjY2OTRWMTYuMTI1Wk0zIDE2LjE5MTdDMyAxNS43Nzc0IDIuNjY0MjEgMTUuNDQxNyAyLjI1IDE1LjQ0MTdDMS44MzU3OSAxNS40NDE3IDEuNSAxNS43Nzc0IDEuNSAxNi4xOTE3VjE5LjY2OTRDMS41IDIwLjQwNDMgMi4wOTU3MSAyMSAyLjgzMDU1IDIxSDYuMzA4MzNDNi43MjI1NSAyMSA3LjA1ODMzIDIwLjY2NDIgNy4wNTgzMyAyMC4yNUM3LjA1ODMzIDE5LjgzNTggNi43MjI1NSAxOS41IDYuMzA4MzMgMTkuNUgzVjE2LjE5MTdaTTIuODMwNTYgM0MyLjA5NTcxIDMgMS41IDMuNTk1NzEgMS41IDQuMzMwNTVWNy44MDgzM0MxLjUgOC4yMjI1NSAxLjgzNTc5IDguNTU4MzMgMi4yNSA4LjU1ODMzQzIuNjY0MjEgOC41NTgzMyAzIDguMjIyNTUgMyA3LjgwODMzVjQuNUg2LjMwODMzQzYuNzIyNTUgNC41IDcuMDU4MzMgNC4xNjQyMSA3LjA1ODMzIDMuNzVDNy4wNTgzMyAzLjMzNTc5IDYuNzIyNTUgMyA2LjMwODMzIDNIMi44MzA1NlpNMTIgMTIuNzVDOS45Mjg5MyAxMi43NSA4LjI1IDE0LjQyODkgOC4yNSAxNi41QzguMjUgMTYuOTE0MiA3LjkxNDIxIDE3LjI1IDcuNSAxNy4yNUM3LjA4NTc5IDE3LjI1IDYuNzUgMTYuOTE0MiA2Ljc1IDE2LjVDNi43NSAxNC40NDM1IDcuOTMyNDMgMTIuNjYzMiA5LjY1NDUgMTEuODAxOEM5LjAxOTcxIDExLjE4ODEgOC42MjUgMTAuMzI3NyA4LjYyNSA5LjM3NUM4LjYyNSA3LjUxMTA0IDEwLjEzNiA2IDEyIDZDMTMuODY0IDYgMTUuMzc1IDcuNTExMDQgMTUuMzc1IDkuMzc1QzE1LjM3NSAxMC4zMjc3IDE0Ljk4MDMgMTEuMTg4MSAxNC4zNDU1IDExLjgwMThDMTYuMDY3NiAxMi42NjMyIDE3LjI1IDE0LjQ0MzUgMTcuMjUgMTYuNUMxNy4yNSAxNi45MTQyIDE2LjkxNDIgMTcuMjUgMTYuNSAxNy4yNUMxNi4wODU4IDE3LjI1IDE1Ljc1IDE2LjkxNDIgMTUuNzUgMTYuNUMxNS43NSAxNC40Mjg5IDE0LjA3MTEgMTIuNzUgMTIgMTIuNzVaTTEyIDExLjI1QzEzLjAzNTUgMTEuMjUgMTMuODc1IDEwLjQxMDUgMTMuODc1IDkuMzc1QzEzLjg3NSA4LjMzOTQ3IDEzLjAzNTUgNy41IDEyIDcuNUMxMC45NjQ1IDcuNSAxMC4xMjUgOC4zMzk0NyAxMC4xMjUgOS4zNzVDMTAuMTI1IDEwLjQxMDUgMTAuOTY0NSAxMS4yNSAxMiAxMS4yNVoiIGZpbGw9IiMyNTY3RjQiPjwvcGF0aD4KPC9zdmc+"
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>
                  Video Pitch The learner has to a
                </Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner has to answer the question through a webcam or
                  smartphone recording.
                </Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The instructor will receive a notification and will have to
                  correct the question manually.
                </Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  It will only be possible to correct this question as part of a
                  program or path.
                </Typography>
              </Stack>
            </ListItem>
            <ListItem
              sx={{
                borderRadius: '10px',
                padding: '22px',
                border: '1px solid #e8ebf1',
                display: 'flex',
                alignItems: 'center',
                columnGap: '15px',
              }}>
              <Box
                sx={{
                  borderRadius: '4px',
                  padding: '4px',
                  width: 'fit-content',
                  backgroundColor: '#eef3fe',
                }}>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTA3MjM2NDNhPSIiIGZpbGw9ImN1cnJlbnRDb2xvciIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJpY29uIj4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE3LjYyNSAzQzE3LjIxMDggMyAxNi44NzUgMy4zMzU3OSAxNi44NzUgMy43NUMxNi44NzUgNC4xNjQyMSAxNy4yMTA4IDQuNSAxNy42MjUgNC41SDIxVjcuODc1QzIxIDguMjg5MjEgMjEuMzM1OCA4LjYyNSAyMS43NSA4LjYyNUMyMi4xNjQyIDguNjI1IDIyLjUgOC4yODkyMSAyMi41IDcuODc1VjQuMzMwNTZDMjIuNSAzLjU5NzM3IDIxLjkwNjkgMyAyMS4xNzA0IDNIMTcuNjI1Wk0yMS43NSAxNS4zNzVDMjIuMTY0MiAxNS4zNzUgMjIuNSAxNS43MTA4IDIyLjUgMTYuMTI1VjE5LjY2OTRDMjIuNSAyMC40MDQzIDIxLjkwNDMgMjEgMjEuMTY5NCAyMUgxNy42MjVDMTcuMjEwOCAyMSAxNi44NzUgMjAuNjY0MiAxNi44NzUgMjAuMjVDMTYuODc1IDE5LjgzNTggMTcuMjEwOCAxOS41IDE3LjYyNSAxOS41SDIxVjE2LjEyNUMyMSAxNS43MTA4IDIxLjMzNTggMTUuMzc1IDIxLjc1IDE1LjM3NVpNMi4yNSAxNS40NDE3QzIuNjY0MjEgMTUuNDQxNyAzIDE1Ljc3NzQgMyAxNi4xOTE3VjE5LjVINi4zMDgzM0M2LjcyMjU1IDE5LjUgNy4wNTgzMyAxOS44MzU4IDcuMDU4MzMgMjAuMjVDNy4wNTgzMyAyMC42NjQyIDYuNzIyNTUgMjEgNi4zMDgzMyAyMUgyLjgzMDU1QzIuMDk1NzEgMjEgMS41IDIwLjQwNDMgMS41IDE5LjY2OTRWMTYuMTkxN0MxLjUgMTUuNzc3NCAxLjgzNTc5IDE1LjQ0MTcgMi4yNSAxNS40NDE3Wk0xLjUgNC4zMzA1NUMxLjUgMy41OTU3MSAyLjA5NTcxIDMgMi44MzA1NiAzSDYuMzA4MzNDNi43MjI1NSAzIDcuMDU4MzMgMy4zMzU3OSA3LjA1ODMzIDMuNzVDNy4wNTgzMyA0LjE2NDIxIDYuNzIyNTUgNC41IDYuMzA4MzMgNC41SDNWNy44MDgzM0MzIDguMjIyNTUgMi42NjQyMSA4LjU1ODMzIDIuMjUgOC41NTgzM0MxLjgzNTc5IDguNTU4MzMgMS41IDguMjIyNTUgMS41IDcuODA4MzNWNC4zMzA1NVpNNy41IDYuMzc1QzYuNDY0NDcgNi4zNzUgNS42MjUgNy4yMTQ0NyA1LjYyNSA4LjI1VjEzLjVDNS42MjUgMTQuNTM1NSA2LjQ2NDQ3IDE1LjM3NSA3LjUgMTUuMzc1SDExLjI1VjE2Ljg3NUg5LjM3NUM4Ljk2MDc5IDE2Ljg3NSA4LjYyNSAxNy4yMTA4IDguNjI1IDE3LjYyNUM4LjYyNSAxOC4wMzkyIDguOTYwNzkgMTguMzc1IDkuMzc1IDE4LjM3NUgxNC42MjVDMTUuMDM5MiAxOC4zNzUgMTUuMzc1IDE4LjAzOTIgMTUuMzc1IDE3LjYyNUMxNS4zNzUgMTcuMjEwOCAxNS4wMzkyIDE2Ljg3NSAxNC42MjUgMTYuODc1SDEyLjc1VjE1LjM3NUgxNi41QzE3LjUzNTUgMTUuMzc1IDE4LjM3NSAxNC41MzU1IDE4LjM3NSAxMy41VjguMjVDMTguMzc1IDcuMjE0NDcgMTcuNTM1NSA2LjM3NSAxNi41IDYuMzc1SDcuNVpNMTYuNSAxMy44NzVIMTJINy41QzcuMjkyODkgMTMuODc1IDcuMTI1IDEzLjcwNzEgNy4xMjUgMTMuNVY4LjI1QzcuMTI1IDguMDQyODkgNy4yOTI4OSA3Ljg3NSA3LjUgNy44NzVIMTYuNUMxNi43MDcxIDcuODc1IDE2Ljg3NSA4LjA0Mjg5IDE2Ljg3NSA4LjI1VjEzLjVDMTYuODc1IDEzLjcwNzEgMTYuNzA3MSAxMy44NzUgMTYuNSAxMy44NzVaIiBmaWxsPSIjMjU2N0Y0Ij48L3BhdGg+Cjwvc3ZnPg=="
                  width="24px"
                  height="24px"
                />
              </Box>
              <Stack
                sx={{ alignItems: 'flex-start', width: '100%' }}
                spacing="0px">
                <Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>Open Question</Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The learner has to answer the question through a screen and
                  voice recording for slide presentations or tutorial demos.
                </Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  The instructor will receive a notification and will have to
                  correct the question manually.
                </Typography>
                <Typography variant="p" sx={{ fontSize: '14px' }}>
                  It will only be possible to correct this question as part of a
                  program or path.
                </Typography>
              </Stack>
            </ListItem>
          </List>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={tabvalue} index={1}>
        <Stack
          sx={{
            padding: '15px 35px',
            alignItems: 'flex-start',
            maxHeight: '725px',
            overflow: 'auto',
            width: '100%',
            ' @media(max-width:479px)': { padding: '15px' },
          }}
          spacing="15px">
          <Button disableElevation
            variant="contained"
            sx={{
              backgroundColor: '#eef3fe',
              color: '#2567f4',
              padding: '3px 8px',
              fontSize: '13px',
              textTransform: 'none',
              "&:hover": {
                backgroundColor: "#eef3fe",
              },
            }}>
            IMPORT
          </Button>

          <Tabs value={tabvalue1} onChange={handleChange1} sx={{ width: '100%' }}>
            <Tab
              sx={{ fontSize: '14px' }}
              label={<Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>My questions</Typography>}
            />
            <Tab
              sx={{ fontSize: '14px' }}
              label={<Typography variant="h4" sx={{ fontSize: '16px', fontWeight:"bold" }}>All questions</Typography>}
            />
          </Tabs>
          <CustomTabPanel value={tabvalue1} index={0}>
            <Stack
              sx={{ alignItems: 'flex-start', width: '100%' }}
              spacing="0px">
              <RedirectionBox />
              <Box sx={{ overflow: 'auto', width: '100%' }}>
                <Table
                  sx={{ display: 'table', width: '100%', fontSize: '14px' }}>
                  <TableHead
                    sx={{
                      backgroundColor: '#fafafd',
                      display: 'table-header-group',
                      border: 'none',
                      width: '100%',
                    }}>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          width: '40%',
                          minWidth: '160px',
                          padding: '8px',
                          fontWeight: 'bold',
                        }}>
                        <Typography variant="p">Question</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          width: '35%',
                          minWidth: '160px',
                          padding: '8px',
                          fontWeight: 'bold',
                        }}>
                        <Typography variant="p">Course</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          width: '18%',
                          minWidth: '100px',
                          padding: '8px',
                          fontWeight: 'bold',
                        }}>
                        <Typography variant="p">Author</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          width: '15%',
                          minWidth: '150px',
                          padding: '8px',
                          fontWeight: 'bold',
                        }}>
                        <Typography variant="p">Type</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          width: '10%',
                          padding: '8px',
                          minWidth: '50px',
                        }}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={{ display: 'table-row-group', border: 'none' }}>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Knowledge Check</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Software Training</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Pick-a-Point</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Knowledge Check</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Software Training</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Ordered Questior</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #4</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Pick-a-Point</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #5</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Multiple Choice</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #6</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Single Selection</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #2</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Fill in the blank</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #1</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Multiple Choice</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #3</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Linker</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #2</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Fil in the blank</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #1</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Multiple Choice</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTNhNTkzMTBmPSIiIGRhdGEtdi1mYWQwM2MxNT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyMCAyMCIgaGVpZ2h0PSIyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0iaWNvbiByZWd1bGFyIHdhcm5pbmctaW52YWxpZC1lbGVtZW50Ij4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDJDNS41ODE3MiAyIDIgNS41ODE3MiAyIDEwQzIgMTQuNDE4MyA1LjU4MTcyIDE4IDEwIDE4QzE0LjQxODMgMTggMTggMTQuNDE4MyAxOCAxMEMxOCA1LjU4MTcyIDE0LjQxODMgMiAxMCAyWk0zIDEwQzMgNi4xMzQwMSA2LjEzNDAxIDMgMTAgM0MxMy44NjYgMyAxNyA2LjEzNDAxIDE3IDEwQzE3IDEzLjg2NiAxMy44NjYgMTcgMTAgMTdDNi4xMzQwMSAxNyAzIDEzLjg2NiAzIDEwWk0xMCA1QzEwLjI3NjEgNSAxMC41IDUuMjIzODYgMTAuNSA1LjVWMTFDMTAuNSAxMS4yNzYxIDEwLjI3NjEgMTEuNSAxMCAxMS41QzkuNzIzODYgMTEuNSA5LjUgMTEuMjc2MSA5LjUgMTFWNS41QzkuNSA1LjIyMzg2IDkuNzIzODYgNSAxMCA1Wk05LjI1IDEzLjI1QzkuMjUgMTIuODM1OCA5LjU4NTc5IDEyLjUgMTAgMTIuNUMxMC40MTQyIDEyLjUgMTAuNzUgMTIuODM1OCAxMC43NSAxMy4yNUMxMC43NSAxMy42NjQyIDEwLjQxNDIgMTQgMTAgMTRDOS41ODU3OSAxNCA5LjI1IDEzLjY2NDIgOS4yNSAxMy4yNVoiIGZpbGw9IiNFQjQwNDAiPjwvcGF0aD4KPC9zdmc+"
                            width="20px"
                            height="20px"
                          />
                          <Typography variant="p">Untitled</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                        }}></TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                          fontWeight: 'bold',
                          color: '#2567f4',
                        }}>
                        <Typography variant="p">bill son</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Screencast Demo</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Stack>
          </CustomTabPanel>
          <CustomTabPanel value={tabvalue1} index={1}>
            <Stack
              sx={{ alignItems: 'flex-start', width: '100%' }}
              spacing="0px">
              <RedirectionBox />
              <Box sx={{ overflow: 'auto', width: '100%' }}>
                <Table
                  sx={{ display: 'table', width: '100%', fontSize: '14px' }}>
                  <TableHead
                    sx={{
                      backgroundColor: '#fafafd',
                      display: 'table-header-group',
                      border: 'none',
                      width: '100%',
                    }}>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          width: '40%',
                          minWidth: '160px',
                          padding: '8px',
                          fontWeight: 'bold',
                        }}>
                        <Typography variant="p">Question</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          width: '35%',
                          minWidth: '160px',
                          padding: '8px',
                          fontWeight: 'bold',
                        }}>
                        <Typography variant="p">Course</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          width: '15%',
                          minWidth: '150px',
                          padding: '8px',
                          fontWeight: 'bold',
                        }}>
                        <Typography variant="p">Type</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          width: '10%',
                          padding: '8px',
                          minWidth: '50px',
                        }}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={{ display: 'table-row-group', border: 'none' }}>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Knowledge Check</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Software Training</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Pick-a-Point</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Knowledge Check</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Software Training</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Ordered Questior</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #4</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Pick-a-Point</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #5</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Multiple Choice</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #6</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Single Selection</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #2</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Fill in the blank</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #1</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Multiple Choice</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #3</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Linker</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #2</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Fil in the blank</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <Typography variant="p">Question #1</Typography>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTExLjk4NSA1MTEuOTg1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cmVjdCB3aWR0aD0iNTExLjk4NSIgaGVpZ2h0PSI1MTEuOTg1IiByeD0iMTAyLjM5NyIgcnk9IjEwMi4zOTciIGZpbGw9IiMzMGQxMTEiIHNoYXBlPSJyb3VuZGVkIj48L3JlY3Q+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMC43LDAsMCwwLjcsNzYuNzk3NTkzMzA3NDk1MTMsNzYuNzk3NjMzMzYxODE2NDIpIj48cGF0aCBkPSJNNTAwLjA4OCA4My42ODFjLTE1Ljg0MS0xNS44NjItNDEuNTY0LTE1Ljg1Mi01Ny40MjYgMEwxODQuMjA1IDM0Mi4xNDggNjkuMzMyIDIyNy4yNzZjLTE1Ljg2Mi0xNS44NjItNDEuNTc0LTE1Ljg2Mi01Ny40MzYgMC0xNS44NjIgMTUuODYyLTE1Ljg2MiA0MS41NzQgMCA1Ny40MzZsMTQzLjU4NSAxNDMuNTg1YzcuOTI2IDcuOTI2IDE4LjMxOSAxMS44OTkgMjguNzEzIDExLjg5OSAxMC4zOTQgMCAyMC43OTctMy45NjMgMjguNzIzLTExLjg5OWwyODcuMTcxLTI4Ny4xODFjMTUuODYyLTE1Ljg1MSAxNS44NjItNDEuNTc0IDAtNTcuNDM1eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
                            width="16px"
                            height="16px"
                          />
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Typography variant="p">Knowledge Check</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Multiple Choice</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                    <TableRow sx={{ display: 'table-row' }}>
                      <TableCell sx={{ display: 'table-cell', border: 'none' }}>
                        <Stack
                          sx={{
                            alignItems: 'center',
                            padding: '8px',
                            fontWeight: 'bold',
                          }}
                          spacing="5px"
                          direction="row">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgZGF0YS12LTNhNTkzMTBmPSIiIGRhdGEtdi1mYWQwM2MxNT0iIiBmaWxsPSJjdXJyZW50Q29sb3IiIHZpZXdCb3g9IjAgMCAyMCAyMCIgaGVpZ2h0PSIyMCIgd2lkdGg9IjIwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiBjbGFzcz0iaWNvbiByZWd1bGFyIHdhcm5pbmctaW52YWxpZC1lbGVtZW50Ij4KPHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwIDJDNS41ODE3MiAyIDIgNS41ODE3MiAyIDEwQzIgMTQuNDE4MyA1LjU4MTcyIDE4IDEwIDE4QzE0LjQxODMgMTggMTggMTQuNDE4MyAxOCAxMEMxOCA1LjU4MTcyIDE0LjQxODMgMiAxMCAyWk0zIDEwQzMgNi4xMzQwMSA2LjEzNDAxIDMgMTAgM0MxMy44NjYgMyAxNyA2LjEzNDAxIDE3IDEwQzE3IDEzLjg2NiAxMy44NjYgMTcgMTAgMTdDNi4xMzQwMSAxNyAzIDEzLjg2NiAzIDEwWk0xMCA1QzEwLjI3NjEgNSAxMC41IDUuMjIzODYgMTAuNSA1LjVWMTFDMTAuNSAxMS4yNzYxIDEwLjI3NjEgMTEuNSAxMCAxMS41QzkuNzIzODYgMTEuNSA5LjUgMTEuMjc2MSA5LjUgMTFWNS41QzkuNSA1LjIyMzg2IDkuNzIzODYgNSAxMCA1Wk05LjI1IDEzLjI1QzkuMjUgMTIuODM1OCA5LjU4NTc5IDEyLjUgMTAgMTIuNUMxMC40MTQyIDEyLjUgMTAuNzUgMTIuODM1OCAxMC43NSAxMy4yNUMxMC43NSAxMy42NjQyIDEwLjQxNDIgMTQgMTAgMTRDOS41ODU3OSAxNCA5LjI1IDEzLjY2NDIgOS4yNSAxMy4yNVoiIGZpbGw9IiNFQjQwNDAiPjwvcGF0aD4KPC9zdmc+"
                            width="20px"
                            height="20px"
                          />
                          <Typography variant="p">Untitled</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                        }}></TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          padding: '8px',
                        }}>
                        <Typography variant="p">Screencast Demo</Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          display: 'table-cell',
                          border: 'none',
                          paddingTop: '7px',
                          paddingLeft: '12px',
                        }}>
                        <Checkbox
                          sx={{
                            '& .MuiSvgIcon-root': { fontSize: '15px' },
                            '&.Mui-checked': { color: '#007bff' },
                          }}></Checkbox>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Stack>
          </CustomTabPanel>
        </Stack>
      </CustomTabPanel>
     
    </Container>
  );
}
