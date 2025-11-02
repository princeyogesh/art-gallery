import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  const [images, setImages] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const ws = React.useRef(null);
  const listRef = React.useRef(null);
  React.useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8999');

    ws.current.onopen = () => {
      
      console.log('WebSocket connection established');
      fetchImages(0); // Fetch first page
      //ws.current.send(JSON.stringify({ type: 'subscribe', topic: 'new-images', page: 0, pageSize:10 }));
     // setLoading(true);
      
    };

    ws.current.onmessage = (event) => {
      console.log('Received message:', event.data);
      console.log('Type of event.data:', typeof event.data);
      const imageList = JSON.parse(event.data);
      console.log('Parsed imageList:', imageList.images);
      // 
      itemData = imageList.images;
      setImages((prevImages) => [...prevImages, ...imageList.images]);

      setLoading(false);
    };

    ws.current.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.current.onclose = () => {
      console.log('WebSocket connection closed');
    };
  },[])

  // Function to fetch images for a given page
  const fetchImages = (pageNum) => {
    if (ws.current && ws.current.readyState === 1) {
      setLoading(true);
      ws.current.send(JSON.stringify({ type: 'subscribe', topic: 'new-images', page: pageNum, pageSize: 10 }));
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll event detected'); 
      const el = listRef.current;
      if (!el || loading) return;
      if(el.scrollHeight - el.scrollTop <= el.clientHeight + 100) {
        console.log('Fetching more images for page:', page + 1);
        fetchImages(page + 1);
        setPage((prevPage) => prevPage + 1);
      }
    }
    const el = listRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', handleScroll);
      }
    };
  },[loading]);

   return (
    <Paper elevation={4} sx={{ p: 3, borderRadius: 4, background: '#fafafa', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        Art Gallery
      </Typography>
      <div ref={listRef} style={{ height: '80vh', overflowY: 'auto' }}>
        <ImageList
          sx={{
            width: '100%',
            
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: 'translateZ(0)',
          }}
          rowHeight={200}
          gap={1}
        >
          {images.map((item) => {
            const cols = item.featured ? 2 : 1;
            const rows = item.featured ? 2 : 1;

            return (
              <ImageListItem key={item.img} cols={cols} rows={rows} sx={{ borderRadius: 3, boxShadow: 2, overflow: 'hidden' }}>
                <img
                  {...srcset(item.imageurl, 250, 200, rows, cols)}
                  alt={item.title}
                  loading="lazy"
                  style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
                />
                <ImageListItemBar
                  sx={{
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    borderRadius: '0 0 12px 12px',
                  }}
                  title={item.title}
                  position="top"
                  actionIcon={
                    <IconButton
                      sx={{ color: 'white' }}
                      aria-label={`star ${item.title}`}
                    >
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
        {loading && <Typography align="center" sx={{ p: 2, color: '#666' }}>Loading more images...</Typography>}
      </div>
    </Paper>
  );
}

let itemData = [];