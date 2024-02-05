import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { MenuItem as OptionItem } from '@mui/material';
import { Select } from '@mui/material';
import { Box } from '@mui/material';

export default function RedirectionBox() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px',
        padding: '15px 0px',
        ' @media(max-width:479px)': { flexDirection: 'column' },
      }}>
      <Stack
        sx={{
          alignItems: 'center',
          ' @media(max-width:991px)': { columnGap: '5px' },
          ' @media(max-width:479px)': { columnGap: '15px' },
        }}
        spacing="20px"
        direction="row">
        <Stack sx={{ alignItems: 'center' }} spacing="3px" direction="row">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNjEyLjAyIDYxMi4wMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMS4yMjQ2NDY3OTkxNDczNTMyZS0xNiwtMS4yMjQ2NDY3OTkxNDczNTMyZS0xNiwtMSw2MTIuMDE4NTE4NDQ3ODc2LDYxMi4wMTkwODQ5MzA0MTk5KSI+PHBhdGggZD0iTTU5Ni45NiAyNjkuNjc0IDM0Mi4zODEgMTUuMDk0Yy0yMC4wNzktMjAuMDc5LTUyLjY0NC0yMC4wNzktNzIuNzIzIDBzLTIwLjA3OSA1Mi42NDQgMCA3Mi43MjNMNDg3Ljg1MiAzMDYuMDEgMjY5LjY1OCA1MjQuMjAyYy0yMC4wNzkgMjAuMDc5LTIwLjA3OSA1Mi42NDQgMCA3Mi43MjNzNTIuNjQ0IDIwLjA3OSA3Mi43MjMgMEw1OTYuOTYgMzQyLjM0NmMyMC4wNzktMjAuMDI5IDIwLjA3OS01Mi41OTMgMC03Mi42NzJ6bS0zMDYuMTAyLTE1LjQxNkw4OC43NDQgNDEuMjM4Yy0yMC4zMDktMjEuMzc4LTUzLjIwNC0yMS4zNzgtNzMuNTEzIDBzLTIwLjMwOSA1Ni4wNTggMCA3Ny40NjJsMTY1LjM3MSAxNzQuMjg5TDE1LjIzMSA0NjcuMjc4Yy0yMC4zMDkgMjEuMzc5LTIwLjMwOSA1Ni4wODMgMCA3Ny40NjJzNTMuMjA0IDIxLjM3OSA3My41MTMgMGwyMDIuMTE0LTIxMy4wMmMyMC4zMDktMjEuMzc4IDIwLjMwOS01Ni4wNTggMC03Ny40NjJ6IiBmaWxsPSIjYzBjNGNjIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
            width="12px"
            height="12px"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNDUxLjg0NyA0NTEuODQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMS44MzY5NzAxOTg3MjEwMjk3ZS0xNiwxLC0xLC0xLjgzNjk3MDE5ODcyMTAyOTdlLTE2LDQ1MS44NDY5ODc3MjQzMDQyNiwtMC4wMDA0OTExNDIyNzI4OTIzNzUzKSI+PHBhdGggZD0iTTIyNS45MjMgMzU0LjcwNmMtOC4wOTggMC0xNi4xOTUtMy4wOTItMjIuMzY5LTkuMjYzTDkuMjcgMTUxLjE1N2MtMTIuMzU5LTEyLjM1OS0xMi4zNTktMzIuMzk3IDAtNDQuNzUxIDEyLjM1NC0xMi4zNTQgMzIuMzg4LTEyLjM1NCA0NC43NDggMGwxNzEuOTA1IDE3MS45MTUgMTcxLjkwNi0xNzEuOTA5YzEyLjM1OS0xMi4zNTQgMzIuMzkxLTEyLjM1NCA0NC43NDQgMCAxMi4zNjUgMTIuMzU0IDEyLjM2NSAzMi4zOTIgMCA0NC43NTFMMjQ4LjI5MiAzNDUuNDQ5Yy02LjE3NyA2LjE3Mi0xNC4yNzQgOS4yNTctMjIuMzY5IDkuMjU3eiIgZmlsbD0iI2MwYzRjYyIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPjwvZz48L3N2Zz4="
            width="10px"
            height="10px"
          />
          <Typography
            variant="p"
            sx={{
              fontSize: '12px',
              whiteSpace: 'nowrap',
              color: '#c5c8d0',
              paddingTop: '2px',
            }}>
            1-11 Out of 11
          </Typography>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNDUxLjg0NyA0NTEuODQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgzLjA2MTYxNjk5Nzg2ODM4M2UtMTYsLTEsMSwzLjA2MTYxNjk5Nzg2ODM4M2UtMTYsMC4wMDA0OTExNDIyNzI4OTIzNzUzLDQ1MS44NDY5ODc3MjQzMDQxNCkiPjxwYXRoIGQ9Ik0yMjUuOTIzIDM1NC43MDZjLTguMDk4IDAtMTYuMTk1LTMuMDkyLTIyLjM2OS05LjI2M0w5LjI3IDE1MS4xNTdjLTEyLjM1OS0xMi4zNTktMTIuMzU5LTMyLjM5NyAwLTQ0Ljc1MSAxMi4zNTQtMTIuMzU0IDMyLjM4OC0xMi4zNTQgNDQuNzQ4IDBsMTcxLjkwNSAxNzEuOTE1IDE3MS45MDYtMTcxLjkwOWMxMi4zNTktMTIuMzU0IDMyLjM5MS0xMi4zNTQgNDQuNzQ0IDAgMTIuMzY1IDEyLjM1NCAxMi4zNjUgMzIuMzkyIDAgNDQuNzUxTDI0OC4yOTIgMzQ1LjQ0OWMtNi4xNzcgNi4xNzItMTQuMjc0IDkuMjU3LTIyLjM2OSA5LjI1N3oiIGZpbGw9IiNjMGM0Y2MiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD48L2c+PC9zdmc+"
            width="10px"
            height="10px"
          />
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNjEyLjAyIDYxMi4wMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTU5Ni45NiAyNjkuNjc0IDM0Mi4zODEgMTUuMDk0Yy0yMC4wNzktMjAuMDc5LTUyLjY0NC0yMC4wNzktNzIuNzIzIDBzLTIwLjA3OSA1Mi42NDQgMCA3Mi43MjNMNDg3Ljg1MiAzMDYuMDEgMjY5LjY1OCA1MjQuMjAyYy0yMC4wNzkgMjAuMDc5LTIwLjA3OSA1Mi42NDQgMCA3Mi43MjNzNTIuNjQ0IDIwLjA3OSA3Mi43MjMgMEw1OTYuOTYgMzQyLjM0NmMyMC4wNzktMjAuMDI5IDIwLjA3OS01Mi41OTMgMC03Mi42NzJ6bS0zMDYuMTAyLTE1LjQxNkw4OC43NDQgNDEuMjM4Yy0yMC4zMDktMjEuMzc4LTUzLjIwNC0yMS4zNzgtNzMuNTEzIDBzLTIwLjMwOSA1Ni4wNTggMCA3Ny40NjJsMTY1LjM3MSAxNzQuMjg5TDE1LjIzMSA0NjcuMjc4Yy0yMC4zMDkgMjEuMzc5LTIwLjMwOSA1Ni4wODMgMCA3Ny40NjJzNTMuMjA0IDIxLjM3OSA3My41MTMgMGwyMDIuMTE0LTIxMy4wMmMyMC4zMDktMjEuMzc4IDIwLjMwOS01Ni4wNTggMC03Ny40NjJ6IiBmaWxsPSIjYzBjNGNjIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
            width="12px"
            height="12px"
          />
        </Stack>
        <Select
          sx={{
            fontFamily: 'Open Sans',
            fontSize: '12px',
            padding: '4px',
            width: '100px',
            color: '#c5c8d0',
            borderColor: '#e8ebf1',
            borderRadius: '5px',
            '& .MuiSelect-select': { padding: '4px' },
          }}>
          <OptionItem value={10}>Per Page:10</OptionItem>
          <OptionItem value={5}>Per Page:5</OptionItem>
          <OptionItem value={20}>Per Page: 20</OptionItem>
        </Select>
      </Stack>
      <Stack
        sx={{
          alignItems: 'center',
          ' @media(max-width:479px)': { width: '100%' },
        }}
        spacing="8px"
        direction="row">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyLjAwNSA1MTIuMDA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCBkPSJtNTA1Ljc0OSA0NzUuNTg3LTE0NS42LTE0NS42YzI4LjIwMy0zNC44MzcgNDUuMTg0LTc5LjEwNCA0NS4xODQtMTI3LjMxN0M0MDUuMzMzIDkwLjkyNiAzMTQuNDEuMDAzIDIwMi42NjYuMDAzUzAgOTAuOTI1IDAgMjAyLjY2OXM5MC45MjMgMjAyLjY2NyAyMDIuNjY3IDIwMi42NjdjNDguMjEzIDAgOTIuNDgtMTYuOTgxIDEyNy4zMTctNDUuMTg0bDE0NS42IDE0NS42YzQuMTYgNC4xNiA5LjYyMSA2LjI1MSAxNS4wODMgNi4yNTFzMTAuOTIzLTIuMDkxIDE1LjA4My02LjI1MWM4LjM0MS04LjM0MSA4LjM0MS0yMS44MjQtLjAwMS0zMC4xNjV6TTIwMi42NjcgMzYyLjY2OWMtODguMjM1IDAtMTYwLTcxLjc2NS0xNjAtMTYwczcxLjc2NS0xNjAgMTYwLTE2MCAxNjAgNzEuNzY1IDE2MCAxNjAtNzEuNzY2IDE2MC0xNjAgMTYweiIgZmlsbD0iI2MwYzRjYyIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
          style={{ marginTop: '2px' }}
          width="15px"
          height="15px"
        />
      </Stack>
    </Box>
  );
}
