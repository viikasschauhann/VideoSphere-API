import { Router } from "express"
import { getAllVideos, publishVideo, getVideoById } from "../controllers/video.controller.js"
import { upload } from "../middlewares/multer.middleware.js ";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/publish-video").post(
    upload.fields([
        {
            name: "video",
            maxCount: 1,
        }, 
        {
            name: "thumbnail",
            maxCount: 1,
        }
    ]), publishVideo
);

router.route("/").get(getAllVideos);
router.route("/videos/:videoId").get(getVideoById);

export default router;