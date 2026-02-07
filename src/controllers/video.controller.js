import { Video } from "../models/video.model";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";

const getAllVideos = asyncHandler(async (req, res) => {});

const publishVideo = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    throw new ApiError(400, "All fields are required");
  }
  const videoLocalPath = req.files?.video[0]?.path;
  const thumbnailLocalPath = req.files?.thumbnail[0]?.path;

  if (!videoLocalPath || !thumbnailLocalPath) {
    throw new ApiError(400, "Video and thumbnail files are required");
  }
  const uploadedVideo = await uploadOnCloudinary(videoLocalPath);
  const uploadedThumbnail = await uploadOnCloudinary(thumbnailLocalPath);

  if(!uploadedVideo?.url || !uploadedThumbnail?.url) {
    throw new ApiError(500, "Failed to upload video or thumbnail");
  }
  const video = await Video.create({
    title, 
    description,
    video: uploadedVideo.url,
    thumbnail: uploadedThumbnail.url,
    duration: uploadedVideo.duration,
    owner: req.user?._id
  })

    if(!video){
        throw new ApiError(500, "failed to publish video");
    }

    return res.
         status(201)
         .json(new ApiResponse(201, video, "Video published successfully"));

});




export { getAllVideos, publishVideo };