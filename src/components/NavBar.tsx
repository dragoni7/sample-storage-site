import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Link,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Payment, PhoneInTalk } from '@mui/icons-material';
import React, { useState } from 'react';

const pages = ['Find Storage', 'Size Guide', 'Storage Types', 'Contact Us'];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="fixed" style={{ width: '100vw', backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Desktop */}
            <Box
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: { xs: 'none', md: 'flex' },
                gap: 2,
              }}
            >
              <img src="/logo.png" width={'10%'} height={'10%'} />
              {pages.map((page) => (
                <Link
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={'/' + page.toLocaleLowerCase().replace(/ +/g, '-')}
                >
                  {page}
                </Link>
              ))}
              <Box sx={{ flexGrow: 1 }} />
              <PhoneInTalk sx={{ color: 'black' }} />
              <Link href={'tel:5412831980'}>{'541-283-1980'}</Link>
              <Button
                variant="outlined"
                key={'Pay Online'}
                onClick={handleCloseNavMenu}
                href={'/pay-online'}
                startIcon={<Payment />}
                sx={{ backgroundColor: 'lightblue', borderRadius: 6 }}
              >
                Pay Online
              </Button>
            </Box>

            {/* Mobile */}
            <Box
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                display: { xs: 'flex', md: 'none' },
                gap: 2,
              }}
            >
              <img src="/logo.png" width={'42%'} height={'42%'} />
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                aria-label="menu options"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="default"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    href={'/' + page.toLocaleLowerCase().replace(/ +/g, '-')}
                  >
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem key={'Pay Online'} onClick={handleCloseNavMenu} href="/pay-online">
                  <Typography sx={{ textAlign: 'center' }}>Pay Online</Typography>
                </MenuItem>
                <MenuItem>
                  <Link href={'tel:5412831980'}>{'541-283-1980'}</Link>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
