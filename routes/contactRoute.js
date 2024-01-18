import express from "express";
import { createContact, getMessage } from "../controlles/contactController.js";

const router = express.Router();

router.post('/create', createContact);

router.get("/get", getMessage);

export default router;