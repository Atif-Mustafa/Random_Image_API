const express = require("express");
const axios = require("axios")
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())


// GET REQUEST
app.get('/api/image/random', async (req, res) => {
    try {
        const url = 'https://picsum.photos/800/600';
        const response = await axios.get(url, { responseType: 'arraybuffer' });

        // Set appropriate headers
        res.header('Content-Type', 'image/jpeg');
        res.send(response.data);
    } catch (err) {
        console.error('Error fetching image:', err.message);
        res.status(500).json({ error: 'Failed to fetch random image' });
    }
})

app.get('/api/health', (req, res) => {
    console.log(process)
    res.json({ status: 'OK', uptime: process.uptime() });
});


app.use((err, req, res, next) => {
        console.log("Error Handling middleware");
    
        res
            .status(400)
            .json({
                success: false,
                message: 'An error occurred. Please try again later.'
            })
    })

app.listen(PORT, () => {
    console.log("server is up and listening at port 5000");
})
