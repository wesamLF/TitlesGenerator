import express from "express"
const router = express.Router();
import { trendingVideosController, trendingGenresControoler } from "../controllers/trendingController";

router.get('/:genre', trendingVideosController);
router.get('/:genre/genres', trendingGenresControoler); // return top 5 gnere and the trning videos



//get(///) -> download pdf titles and channle links



export default router;