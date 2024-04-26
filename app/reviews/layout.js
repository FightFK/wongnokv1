import './review.css'; // Import your CSS file
import Link from 'next/link';
import { AppBar, Box, Toolbar, Typography, Container } from '@mui/material';

export default function Layout({ children }) {
  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static" sx={{ backgroundColor: 'lightgreen' }}> {/* เปลี่ยนสีพื้นหลังที่นี่ */}
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <Link href="/reviews" style={{ textDecoration: 'none', color: 'white' }}>
                <img src="https://img2.pic.in.th/pic/Wongnok_Logo-removebg-preview.png" className="logo" />
              </Link>
              <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                <Link href="/reviews" style={{ textDecoration: 'none', color: 'white' }}>
                  Wong Nok
                </Link>
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        {children}
      </Container>
    </>
  );
}
