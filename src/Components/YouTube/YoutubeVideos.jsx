import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css"

const YoutubeVideos = () => {
  const [youTubeVideos, setYouTubeVideos] = useState([]);
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCDhNFXMbWQ19JayNIFOgB14qY3tdXwPE0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((response) => response.json())
      .then((data) => {
        const videos = data.items;
        setYouTubeVideos(videos);
      });
  }, []);
  console.log(youTubeVideos);
  return (
    <div className="allVideosWrapper">
      <div className="container">
        {/* <div className="row h-100 align-items-center justify-content-center text-center"> */}
        <div className="row xs=12 sm=6 md=3 h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youTubeVideos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt={singleVideo.snippet.title}
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideos;






//* I used this one below for deployment 


// import React, { useState, useEffect } from "react";
// import "./YoutubeVideos.css";

// const YoutubeVideos = () => {
//   const [youTubeVideos, setYouTubeVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
//         );

//         if (!response.ok) {
//           throw new Error("YouTube API request failed");
//         }

//         const data = await response.json();
//         setYouTubeVideos(data.items);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching videos:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, [apiKey]);

//   if (loading) return <div className="loading">Loading videos...</div>;
//   if (error) return <div className="error">{error}</div>;

//   return (
//     <div className="allVideosWrapper">
//       <div className="container">
//         <div className="row xs=12 sm=6 md=3 h-100 align-items-center justify-content-center text-center">
//           <div className="col-12">
//             <div className="title-wraper bold video-title-wrapper">
//               Latest Videos
//             </div>
//           </div>
//           {youTubeVideos.map((singleVideo, i) => {
//             const vidId = singleVideo.id?.videoId;
//             const vidLink = `https://www.youtube.com/watch?v=${vidId}`;

//             return (
//               <div key={i} className="col-sm-12 col-md-4">
//                 <div className="singleVideoWrapper">
//                   <div className="videoThumbnail">
//                     <a href={vidLink} target="_blank" rel="noopener noreferrer">
//                       <img
//                         src={singleVideo.snippet?.thumbnails?.high?.url}
//                         alt={singleVideo.snippet?.title}
//                         onError={(e) => {
//                           e.target.src = "/fallback-image.jpg";
//                         }}
//                       />
//                     </a>
//                   </div>
//                   <div className="videoInfoWrapper">
//                     <div className="videoTitle">
//                       <a
//                         href={vidLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {singleVideo.snippet?.title}
//                       </a>
//                     </div>
//                     <div className="videoDesc">
//                       {singleVideo.snippet?.description}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YoutubeVideos;