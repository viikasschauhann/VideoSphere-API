import { Comment } from "../models/comments.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

const getVideoComments = asyncHandler(async (req, res) => {
    // user ko lana padega db se
    // content lana frontend se
    // validation check
    const {content} = req.body;
    if(!content){
        throw new ApiError(400, "comment description is not valid")
    }
    
})