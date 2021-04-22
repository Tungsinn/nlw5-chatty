import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(request: Request, response: Response) {
        const { chat, username } = request.body;
        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({ chat, username });
            return response.json(settings);
        } catch(err) {
            // 400 Bad Request
            return response.status(400).json({
                message: err.message,
            });
        }
    }
}

export { SettingsController }