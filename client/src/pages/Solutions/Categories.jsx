import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '../../components/ui/RokuButton';
import Container from '@mui/material/Container';
import RokuTypography from '../../components/ui/RokuTypography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://unsplash.com/photos/tyfqOL1FAQc/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzNDU4MDU3&force=true&w=640',
    title: 'Handmade dress',
    width: '40%',
  },
  {
    url: 'https://unsplash.com/photos/Ci_fZ5cL9Jo/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzNDU4MTcw&force=true&w=640',
    title: 'Tailored blazer',
    width: '20%',
  },
  {
    url: 'https://unsplash.com/photos/npyWFYpHQ94/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzNDU4Mjk0&force=true&w=640',
    title: 'Custom-made shirt',
    width: '40%',
  },
  {
    url: 'https://unsplash.com/photos/Rf_wydmmbl8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzNDU4NDI1&force=true&w=640',
    title: 'Unique vest',
    width: '38%',
  },
  {
    url: 'https://unsplash.com/photos/Nt0hNFMGbxM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzNDU4NTQy&force=true&w=640',
    title: 'Personalized trousers',
    width: '38%',
  },
  {
    url: 'https://unsplash.com/photos/AhBR8UGvsGU/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzNDU4NTgw&force=true&w=640',
    title: 'Made-to-measure coat',
    width: '24%',
  },
  {
    url: 'https://unsplash.com/photos/2s3GhhJz2uY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzNDU4NjA3&force=true&w=640',
    title: 'Custom-fit jeans',
    width: '40%',
  },
  {
    url: 'https://unsplash.com/photos/VOO5ojMQ_9A/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzNDU1MjY1&force=true&w=640',
    title: 'Bespoke skirt',
    width: '20%',
  },
  {
    url: 'https://unsplash.com/photos/P0W27GRvyww/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgzNDU4Njg4&force=true&w=640',
    title: 'Handcrafted jacket',
    width: '40%',
  },
];

/**
 A React component that uses MUI grid component to display the categories of the website.
 Includes a title and a grid of images.
 Total of 9 images.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const Categories = () => (
    <Container component="section" sx={{mt: 8, mb: 4}}>
      <RokuTypography align="center" variant="h2" marked="center">
        For all tastes and all desires
      </RokuTypography>
      <Box sx={{mt: 8, display: 'flex', flexWrap: 'wrap'}}>
        {images.map((image) => (
            <ImageIconButton
                key={image.title}
                style={{
                  width: image.width,
                }}
            >
              <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 40%',
                    backgroundImage: `url(${image.url})`,
                  }}
              />
              <ImageBackdrop className="imageBackdrop"/>
              <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'common.white',
                  }}
              >
                <RokuTypography
                    component="h3"
                    variant="h6"
                    color="inherit"
                    className="imageTitle"
                >
                  {image.title}
                  <div className="imageMarked"/>
                </RokuTypography>
              </Box>
            </ImageIconButton>
        ))}
      </Box>
    </Container>
);
export default Categories
