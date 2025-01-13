import express from 'express';
import {
  getModelCounts,
  getPaymentMetrics,
  getPostsMetrics,
} from './analytics.controller';
const router = express.Router();

// Updated routes for clarity and consistency
router.route('/model-counts').get(getModelCounts);
router.route('/posts-metrics').get(getPostsMetrics);
router.route('/payments-metrics').get(getPaymentMetrics);

export const AnalyticsRoutes = router;
